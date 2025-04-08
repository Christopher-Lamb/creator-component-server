import React, { useState } from "react";
import { getCSS, Text, ImageLogo, ImageLogoText, Nav, Burger, useAnimatedDropdown } from ".";


interface MobileNavbarProps {
  mainClass: string;
  containerClass: string;
  wrapperClass: string;
  elementsContainerClass: string;
  elementsArray: string;
  navArray: string;
};




interface MobileNavbarProps {
  routes: any;
}

const MobileNavbar: React.FC<MobileNavbarProps> = (props) => {
  const { elementsArray, navArray, routes , ...otherCSS } = props;
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const { ref, toggle, isOpen, open, close } = useAnimatedDropdown(".3s");
  const { cssString, css } = getCSS(otherCSS);

  const { array: elements } = JSON.parse(elementsArray as any);

  const { array: navItems } = JSON.parse(navArray as any);

  const handleBurgerClick = () => {
    isOpen ? close() : open();
  };

  return (
    <div className={css["mainClass"]}>
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
                    return <Burger {...other} key={i} onClick={handleBurgerClick} />;
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
  );
};

export default MobileNavbar;