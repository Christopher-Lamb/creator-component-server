import React, { useState, useEffect } from "react";
import { getCSS, Text, ImageLogo, ImageLogoText, Nav, Burger, useAnimatedDropdown } from ".";


interface MobileFloatingNavbarProps {
  mainClass: string;
  containerClass: string;
  mainAnimationClass: string;
  scrollHeight: string;
  wrapperClass: string;
  elementsContainerClass: string;
  elementsArray: string;
  navArray: string;
};




interface MobileFloatingNavbarProps {
  routes: any;
}

const MobileFloatingNavbar: React.FC<MobileFloatingNavbarProps> = (props) => {
  const { scrollHeight, elementsArray, navArray, routes , ...otherCSS } = props;
  const { ref, isOpen, open, close } = useAnimatedDropdown(".3s");
  const { cssString, css } = getCSS(otherCSS);
  const [visible, setVisible] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const { array: elements } = JSON.parse(elementsArray as any);

  const { array: navItems } = JSON.parse(navArray as any);

  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = parseInt(scrollHeight);
      if (window.scrollY > scrollVal) {
        setVisible(true);
      } else {
        setVisible(false);
        setIsBurgerActive(false);
        close();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBurgerClick = () => {
    if (!visible) return;
    if (isOpen) {
      setIsBurgerActive(false);
      close();
    } else {
      setIsBurgerActive(true);
      open();
    }
  };

  return (
    <>
      <div className={`${css["mainClass"]} ${visible ? css["mainAnimationClass"] : ""}`}>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: cssString || "" }} />
        <div className={css["containerClass"]}>
          <div className={css["wrapperClass"]}>
            {elements.length > 0 && (
              <div className={css["elementsContainerClass"]}>
                {elements.map((elProps: any, i: number) => {
                  const { type, ...other } = elProps;
                  switch (type) {
                    case "text":
                      return <Text {...other} key={i * 20} />;
                    case "image":
                      return <ImageLogo {...other} key={i} />;
                    case "imageText":
                      return <ImageLogoText {...other} key={i} />;
                    case "burger":
                      return <Burger {...other} key={i} onClick={handleBurgerClick} active={isBurgerActive} />;
                    default:
                      return <></>;
                  }
                })}
              </div>
            )}
          </div>
        </div>
        <div ref={ref} className={`absolute overflow-hidden w-full  ${isOpen ? "z-[9999]" : "z-0"}`}>
          <div className={css["navItemsContainer"]}>
            {navItems.map((itemProps: any, i: number) => {
              const { type, ...other } = itemProps;
              switch (type) {
                case "nav":
                  return <Nav {...{ routes, ...other }} key={i} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFloatingNavbar;