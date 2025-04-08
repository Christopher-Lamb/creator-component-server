import React, { useState, useEffect } from "react";
import { getCSS, Text, ImageLogo, ImageLogoText, Content, Nav, NavCustom } from ".";


interface FloatingNavbarProps {
  mainClass: string;
  containerClass: string;
  containerAnimationClass: string;
  scollHeight: string;
  wrapperClass: string;
  leftContainerClass: string;
  leftArray: string;
  rightArray: string;
};




interface FloatingNavbarProps {
  routes: any;
}

const FloatingNavbar: React.FC<FloatingNavbarProps> = (props) => {
  const { scollHeight, leftArray, rightArray, routes , ...otherCSS } = props;
  const { cssString, css } = getCSS(otherCSS);
  const [visible, setVisible] = useState(false);

  const { array: leftElements } = JSON.parse(leftArray as any);
  const { array: rightElements } = JSON.parse(rightArray as any);

  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = parseInt(scollHeight);
      if (window.scrollY > scrollVal) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={css["mainClass"]}>
      <style type="text/css" dangerouslySetInnerHTML={{ __html: cssString || "" }} />
      <div className={`${css["containerClass"]} ${visible ? css["containerAnimationClass"] : ""}`}>
        <div className={css["wrapperClass"]}>
          <div className={css["leftContainerClass"]}>
            {leftElements.map((elProps: any) => {
              const { type, ...other } = elProps;
              switch (type) {
                case "text":
                  return <Text {...other} />;
                case "image":
                  return <ImageLogo {...other} />;
                case "imageText":
                  return <ImageLogoText {...other} />;
                default:
                  return <></>;
              }
            })}
          </div>
          <div className={css["rightContainerClass"]}>
            {rightElements.map((elProps: any, i: number) => {
              const { type, ...other } = elProps;
              switch (type) {
                case "content":
                  return <Content {...other} key={i} />;
                case "nav":
                  return <Nav {...{ routes, ...other }} key={i} />;
                case "nav-custom":
                  return <NavCustom {...other} key={i} />;
                default:
                  return <></>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;