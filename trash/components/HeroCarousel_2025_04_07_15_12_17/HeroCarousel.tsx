import React, { useState, useEffect, useRef } from "react";
import { getCSS, Slide, addClassesToElements, Dots, Arrows } from ".";


interface HeroCarouselProps {
};




interface HeroCarouselProps {}

const HeroCarousel: React.FC<HeroCarouselProps> = (props) => {
  const { ...otherCSS } = props;

  const { array: slides } = JSON.parse(slidesArray as any);
  const { array: addOns } = JSON.parse(addOnArray as any);

  const { cssString, css } = getCSS(otherCSS);
  const { array: htmlStyles } = JSON.parse(htmlStylesArray as any);
  
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto Play functions
  const startAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, parseInt(delay));
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay(); // optional cleanup on unmount
  }, []);

  const onNext = () => {
    startAutoplay()
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const onPrev = () => {
    startAutoplay()
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  //Digest HTML files
  const getHtmlCss = (): { htmlCssString: string; htmlCSS: any } => {
    const styleObj = htmlStyles.reduce((acc: Record<string, string>, { elName, elClass }: { elName: string; elClass: string }) => {
      const newName = elName + "Class";
      acc[newName] = elClass;
      return acc;
    }, {});

    const { cssString, css } = getCSS(styleObj);

    return {
      htmlCssString: cssString,
      htmlCSS: css,
    };
  };
  const { htmlCssString, htmlCSS } = getHtmlCss();

  const cssStyleString = htmlCssString + cssString;
  const html = addClassesToElements(content, htmlCSS);

  const handleSelectPage = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className={css["mainClass"]}>
      <style type="text/css" dangerouslySetInnerHTML={{ __html: cssStyleString || "" }} />
      <div className={css["containerClass"]}>
        <div className={css["wrapperClass"]}>
          {content && (
            <div className={css["htmlContainerClass"]}>
              <div className={css["htmlWrapperClass"]} dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          )}

          <div className={`${css["slideGroupContainerClass"]}`}>
            <div className={`${css["slideGroupClass"]}`}>
              {slides.map((elProps: any, i: number) => {
                return (
                  <div key={i} className={`${css["slideClass"]} ${i === slideIndex ? "opacity-100" : "opacity-0"}`}>
                    <Slide {...elProps} />
                  </div>
                );
              })}
            </div>
          </div>
          {addOns.map((elProps: any, i: number) => {
            const { type, ...otherProps } = elProps;
            switch (type) {
              case "dots":
                return <Dots index={slideIndex} slidesLength={slides.length} onSelect={handleSelectPage} {...otherProps} />;
              case "arrows":
                return <Arrows onNextClick={onNext} onPrevClick={onPrev} {...otherProps} />;
              default:
                return;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;