export interface Component {
  componentId: string;
  parentId: string;
  name: string;
  props: Record<string, any>;
}

export const componentStore: Record<string, Component> = {
  "BasicHeader": {
    "componentId": "BasicHeader",
    "parentId": "headers",
    "name": "Basic Header",
    "props": {
      "headingClass": "",
      "name": "",
      "autoBreadcrumbsBool": true,
      "breadcrumbArray": "{ \"objects\": { \"breadcrumb\": { \"name\": \"\", \"path\": \"\" } }, \"array\": [] }",
      "containerClass": "bg-blue-100 relative h-one w-full overflow-hidden",
      "wrapperClass": "",
      "bgImageBool": true,
      "imageClass": "absolute z-1 object-cover top-0 h-one w-full after:overlay after:bg-white after:opacity-40",
      "img": "",
      "breadcrumbsClass": "",
      "linkClass": "",
      "disabledLinkClass": "",
      "spacerClass": ""
    }
  },
  "BasicNavbar": {
    "componentId": "BasicNavbar",
    "parentId": "navbars",
    "name": "Basic Navbar",
    "props": {
      "img1": ""
    }
  },
  "Navbar": {
    "componentId": "Navbar",
    "parentId": "navbars",
    "name": "Navbar",
    "props": {
      "containerClass": "h-one bg-blue-700",
      "wrapperClass": "flex justify-between max-w-five px-22 mx-auto",
      "navClass": "flex items-end gap-3 text-xl font-semibold text-white",
      "linkClass": "",
      "sublinkContainerClass": "h-full bg-white flex flex-col min-w-one lg:text-lg border shadow",
      "sublinkClass": "text-black px-2 w-full py-2 hover:bg-stone-100",
      "mobileLinkClass": "w-full bg-blue-200 flex justify-between",
      "mobileSublinkClass": "bg-blue-400",
      "arrowClass": "w-7 h-full text-white",
      "logoContainerClass": "flex h-one items-center text-med text-white gap-3",
      "logoClass": "h-small w-small object-cover",
      "logoText": "Company Name",
      "imgLogo": "",
      "timing": ".4s",
      "rightSideContainerClass": "flex items-center",
      "itemArray": "{ \"objects\": { \"item\": { \"content\": \"\", \"classContainer\": \"\", \"pClass\": \"\", \"aClass\": \"\" } },  \"array\": [] }",
      "bannerContainerClass": "",
      "burgerClass": "bg-white"
    }
  },
  "LambNavbar": {
    "componentId": "LambNavbar",
    "parentId": "navbars",
    "name": "Lamb Navbar",
    "props": {
      "containerClass": "h-[6.5625rem] md:h-[136px] bg-blue-700",
      "logoContainerClass": "h-full flex items-center",
      "logoClass": "object-contain w-one h-full",
      "logoText": "",
      "imgLogo": "",
      "callNowClass": "py-4 mx-4 px-8 rounded-lg text-2xl bg-white tracking-wider font-semibold",
      "linkClass": "lg:text-xl cursor-pointer px-2 inline-block text-white hover:text-blue-100 pb-2 block",
      "sublinkClass": "text-nowrap bg-white hover:bg-stone-100 min-w-one py-0.5 px-2",
      "imgMobileLogo": "",
      "mobileLogoClass": "object-contain w-one h-full",
      "burgerClass": "bg-white",
      "mobileLinkClass": "inline-block flex justify-between cursor-pointer text-xl kanit bg-blue-100 px-4 py-2 w-full border-b-2 border-blue-200 hover:border-blue-400",
      "mobileSublinkClass": "px-8 py-1 inline-block w-full text-xl border-b-[1px] border-blue-200 hover:border-blue-400 bg-blue-100",
      "mobileCallNowClass": "mx-auto inline-block py-4 mx-4 px-8 text-2xl bg-white border-b-4 border-x-4 border-gray-300 tracking-wider font-semibold",
      "timing": "0.4s"
    }
  },
  "LambHero": {
    "componentId": "LambHero",
    "parentId": "heros",
    "name": "Lamb Hero",
    "props": {
      "containerClass": "relative h-[630px] lg:h-[700px] w-full overflow-hidden bg-blue-100",
      "imgBg": "house.jpg",
      "bgImageClass": "absolute object-cover w-full top-[-20px] lg:top-[-300px] h-[700px] lg:h-[1000px]",
      "textContainerClass": "relative text-white max-w-four w-full flex flex-col items-center",
      "animationClass": "",
      "invisibleBool": true,
      "content": "",
      "h1Class": "weight-500 text-center text-large lg:text-one",
      "h2Class": "text-small18 lg:text-med px-4 md:px-0 mt-2 text-center max-w-four",
      "h3Class": "",
      "pClass": "text-small18 lg:text-med",
      "buttonContainerClass": "flex flex-col md:flex-row items-center gap-4 justify-center mt-2xsmal",
      "buttonsArray": "{ \"objects\": { \"button\": { \"buttonClass\": \"\", \"text\": \"\", \"href\": \"\" } }, \"array\": [] }"
    }
  },
  "LambLinkBoxes": {
    "componentId": "LambLinkBoxes",
    "parentId": "linkboxes",
    "name": "Lamb Link Boxes",
    "props": {
      "containerClass": "flex",
      "linkBoxClass": "flex flex-col hover:scale-110 hover:border-b-4 border-blue-100 mb-4 hover:mb-0",
      "textClass": "inline-block text-center text-small18",
      "linkBoxesArray": "{ \"objects\": { \"linkBox\": { \"name\": \"\", \"iconClass\":\"\", \"svg\": \"\",  \"href\": \"\"}}, \"array\":[] }"
    }
  },
  "LambPictureText": {
    "componentId": "LambPictureText",
    "parentId": "pictureTexts",
    "name": "Lamb PictureText",
    "props": {
      "containerClass": "py-20",
      "wrapperClass": "grid grid-cols-5 gap-6",
      "imageContainerClass": "",
      "img": "",
      "imageClass": "w-full object-cover:",
      "content": "",
      "htmlContainerClass": "col-span-3 max-w-four",
      "htmlWrapperClass": "",
      "h1Class": "",
      "h2Class": "",
      "h3Class": "",
      "pClass": "",
      "liClass": "",
      "aClass": "",
      "buttonContainerClass": "",
      "buttonsArray": "{ \"objects\": { \"button\": { \"name\": \"\", \"href\": \"\", \"buttonClass\": \"\" } }, \"array\": [] }"
    }
  },
  "Images": {
    "componentId": "Images",
    "parentId": "standalone",
    "name": "Images",
    "props": {
      "containerClass": "",
      "wrapperClass": "w-full flex items-center",
      "imagesArray": "{ \"objects\":{ \"image\":{ \"imageClass\":\"w-one\", \"img\":\"\" }}, \"array\":[] }"
    }
  },
  "TextButtons": {
    "componentId": "TextButtons",
    "parentId": "standalone",
    "name": "TextButtons",
    "props": {
      "containerClass": "",
      "wrapperClass": "w-full flex items-center",
      "htmlContainerClass": "",
      "content": "",
      "h1Class": "",
      "h2Class": "",
      "h3Class": "",
      "pClass": "",
      "ulClass": "",
      "liClass": "",
      "strongClass": "",
      "aClass": "",
      "buttonContainerClass": "",
      "buttonsArray": "{ \"objects\":{ \"button\": { \"buttonClass\":\"\", \"text\":\"\", \"href\":\"\"} }, \"array\":[] }"
    }
  },
  "Form": {
    "name": "Form",
    "componentId": "Form",
    "parentId": "forms",
    "props": {
      "name": "",
      "containerClass": "",
      "wrapperClass": "",
      "preContentArray": "{ \"objects\": { \"content\": { \"content\": \"\", \"containerClass\": \"\", \"wrapperClass\": \"\", \"h1Class\": \"\", \"h2Class\": \"\", \"h3Class\": \"\", \"pClass\": \"\", \"ulClass\": \"\", \"liClass\": \"\", \"aClass\": \"\", \"strongClass\": \"\" } }, \"array\": [] }",
      "formClass": "",
      "formContentArray": "{ \"objects\": { \"content\": { \"content\": \"\", \"containerClass\": \"\", \"wrapperClass\": \"\", \"h1Class\": \"\", \"h2Class\": \"\", \"h3Class\": \"\", \"pClass\": \"\", \"ulClass\": \"\", \"liClass\": \"\", \"aClass\": \"\", \"strongClass\": \"\" } }, \"array\": [] }",
      "inputClass": "",
      "labelClass": "",
      "formArray": "{  \"objects\": { \"text\": { \"type\": \"text\", \"containerClass\": \"\", \"label\": \"\", \"placeholder\": \"\", \"requiredBool\": false },    \"select\": { \"type\": \"select\", \"containerClass\": \"\", \"label\": \"\", \"selectClass\": \"\",\"placeholder\":\"\", \"options\": \"\", \"requiredBool\": false },    \"radio\": { \"type\": \"radio\", \"containerClass\": \"\", \"label\": \"\",\"itemContainerClass\":\"\", \"itemClass\": \"\", \"items\": \"\", \"requiredBool\": false },    \"checkbox\": { \"type\": \"checkbox\", \"containerClass\": \"\", \"label\": \"\",\"itemContainerClass\":\"\", \"itemClass\": \"\", \"items\": \"\" },    \"textarea\": { \"type\": \"textarea\", \"containerClass\": \"\", \"textareaClass\" :\"\", \"label\": \"\", \"placeholder\":\"\", \"requiredBool\": false }  },  \"array\": []}",
      "buttonClass": "",
      "buttonText": "",
      "img": "",
      "imageClass": ""
    }
  },
  "Footer": {
    "componentId": "Footer",
    "parentId": "footers",
    "name": "Footer",
    "props": {
      "containerClass": "",
      "wrapperClass": "",
      "imageContainerClass": "",
      "imageClass": "",
      "img": "",
      "imageText": "",
      "sectionsContainerClass": "",
      "sectionsArray": "{\"objects\": { \"section\": { \"type\": \"text\", \"containerClass\": \"\", \"htmlContainerClass\": \"\", \"content\": \"\" }, \"socials\": { \"type\": \"socials\", \"containerClass\": \"\", \"htmlContainerClass\":\"\", \"content\": \"\", \"iconContainerClass\":\"\",  \"iconArray\": \"{\\\"objects\\\": {\\\"social\\\": {\\\"iconClass\\\": \\\"\\\", \\\"svg\\\": \\\"\\\", \\\"href\\\": \\\"\\\" } }, \\\"array\\\": [] }\" } }, \"array\": [] }",
      "socialsContainerClass": "",
      "socialsArray": "{ \"objects\": { \"social\": { \"svg\":\"\", \"iconClass\":\"\", \"href\" : \"\" } }, \"array\": [] }",
      "h1Class": "",
      "h2Class": "",
      "h3Class": "",
      "pClass": "",
      "aClass": "",
      "ulClass": "",
      "liClass": "",
      "strongClass": "",
      "copyrightClass": ""
    }
  },
  "Carousel": {
    "componentId": "Carousel",
    "parentId": "carousels",
    "name": "Carousel",
    "props": {
      "arrowsBool": true,
      "arrowClass": "w-xsmall h-xsmall md:h-small md:w-small opacity-50 hover:opacity-100",
      "autoPlayBool": true,
      "content": "",
      "htmlContainerClass": "",
      "h1Class": "text-large",
      "h2Class": "text-med",
      "h3Class": "text-small18",
      "liClass": "",
      "aClass": "",
      "containerClass": "bg-accent py-4 cursor-grab active:cursor-grabbing",
      "wrapperClass": "m-auto --slide-height-[20rem] --slide-spacing-[1rem] --slide-size-[50%] md:--slide-size-[25%] xl:--slide-size-[20%]",
      "slidesContainerClass": "relative items-center justify-center",
      "slideContainerClass": "flex items-center justify-center",
      "slideClass": "p-8 rounded-xl bg-white border grid items-center grid-cols-4 grid-rows-4",
      "textClass": "col-span-4 line-clamp-8 row-span-3",
      "fromClass": "col-span-2 row-start-4",
      "ratingClass": "col-span-2 row-start-4 flex justify-end text-orange-400",
      "starSize": "1.1rem",
      "slidesArray": "{  \"objects\": { \"review\": {\"text\": \"\", \"from\": \"\", \"rating\": \"0\"} } , \"array\": [] }"
    }
  },
  "Gallery": {
    "componentId": "Gallery",
    "parentId": "galleries",
    "name": "Gallery",
    "props": {
      "imageGroup": "[]",
      "containerClass": "w-full",
      "wrapperClass": "flex mt-med flex-wrap w-full justify-center gap-2 max-w-four mx-auto",
      "imageContainerClass": "shrink-0 w-two cursor-pointer transition hover:scale-105",
      "imageClass": "w-two h-two object-cover"
    }
  },
  "BragBox": {
    "componentId": "BragBox",
    "parentId": "standalone",
    "name": "BragBox",
    "props": {
      "containerClass": "",
      "wrapperClass": "",
      "htmlContainerClass": "",
      "htmlWrapperClass": "",
      "h1Class": "",
      "h2Class": "",
      "h3Class": "",
      "pClass": "",
      "liClass": "",
      "aClass": "",
      "itemArray": "{ \"objects\": { \"content\": { \"content\": \"\" } }, \"array\": [] }",
      "img": "",
      "imageClass": ""
    }
  },
  "Cards": {
    "componentId": "Cards",
    "parentId": "cards",
    "name": "Cards",
    "props": {
      "containerClass": "",
      "wrapperClass": "",
      "cardContainerClass": "",
      "htmlTopContainerClass": "",
      "htmlBottomContainerClass": "",
      "cardArray": "{ \"objects\": { \"cards\": { \"contentTop\": \"\", \"img\": \"\", \"contentBottom\": \"\", \"href\":\"\" } }, \"array\": [] }",
      "imageContainerClass": "",
      "imageClass": "",
      "h1Class": "",
      "h2Class": "",
      "h3Class": "",
      "pClass": "",
      "ulClass": "",
      "aClass": ""
    }
  },
  "SVGTitleTextImageCards": {
    "componentId": "SVGTitleTextImageCards",
    "parentId": "cards",
    "name": "SVG-Title/Text/Image Cards",
    "props": {
      "containerClass": "",
      "wrapperClass": "",
      "cardContainerClass": "block",
      "headingContainerClass": "",
      "headingClass": "",
      "subheadingClass": "",
      "imageContainerClass": "",
      "imageClass": "",
      "bottomTextClass": "",
      "cardArray": "{ \"objects\": { \"cards\": {  \"svg\":\"\", \"iconClass\":\"\", \"heading\":\"\", \"subheading\":\"\", \"img\":\"\", \"bottomText\":\"\", \"href\":\"\" } }, \"array\": [] }"
    }
  },
  "ImageCarousel": {
    "componentId": "ImageCarousel",
    "parentId": "galleries",
    "name": "ImageCarousel",
    "props": {
      "containerClass": "w-full",
      "wrapperClass": "",
      "carouselClass": "",
      "imageGroup": "[]",
      "htmlContainerClass": "",
      "content": "",
      "h3Class": "",
      "pClass": "",
      "ulClass": "",
      "strongClass": "",
      "aClass": ""
    }
  },
  "Map": {
    "componentId": "Map",
    "parentId": "standalone",
    "name": "Map",
    "props": {
      "containerClass": "",
      "wrapperClass": "",
      "mapClass": ""
    }
  },
  "HowItWorksLinear": {
    "componentId": "HowItWorksLinear",
    "parentId": "howitworks",
    "name": "How It Works Linear",
    "props": {
      "containerClass": "bg-[#f7f7f7] py-26",
      "wrapperClass": "max-w-7xl mx-auto",
      "titleClass": "text-large",
      "title": "How It Works",
      "textContainerClass": "ml-4 grid gap-4 mt-4",
      "textWrapperClass": "grid grid-cols-2 max-w-5xl",
      "htmlContainerClass": "w-full ",
      "circleContainerClass": "flex items-center justify-center",
      "circleClass": "size-10 text-stone-800 relative z-1 rounded-full bg-stone-50 border-2 border-stone-800 flex items-center justify-center",
      "lineClass": "w-0 border-r-2 border-dashed border-stone-800",
      "elementsArray": "{ \"objects\": { \"element\": { \"content\": \"\" } }, \"array\": [] }",
      "h1Class": "",
      "h2Class": "text-med",
      "h3Class": "",
      "pClass": "mt-1",
      "aClass": "",
      "strongClass": "",
      "ulClass": "",
      "liClass": ""
    }
  },
  "Menu": {
    "componentId": "Menu",
    "parentId": "menus",
    "name": "Menu",
    "props": {
      "id": "",
      "containerClass": "max-w-[1200px] mx-auto",
      "wrapperClass": "",
      "content": "",
      "h1Class": "text-[61px] font-bold border-b-4 border-black",
      "h2Class": "text-[49px] italic leading-0 mt-12",
      "h3Class": "text-[31px] font-semibold border-b border-black mt-8",
      "ulClass": "grid grid-cols-2 gap-x-8 gap-y-4 ",
      "liClass": "",
      "nameClass": "text-[25px] text-[#464554]",
      "priceClass": "",
      "servingsClass": "hidden",
      "descriptionClass": ""
    }
  },
  "InfoBoxesWSVG": {
    "componentId": "InfoBoxesWSVG",
    "parentId": "standalone",
    "name": "InfoBoxesWSVG",
    "props": {
      "containerClass": "flex items-center justify-center",
      "wrapperClass": "flex gap-4",
      "titleContainerClass": "flex items-center gap-2",
      "boxesArray": "{ \"objects\": { \"box\": {\"containerClass\": \"\", \"href\": \"\", \"iconClass\": \"\", \"svg\": \"\", \"titleClass\": \"\", \"title\": \"\", \"textClass\": \"\", \"text\": \"\"}}, \"array\":[] }"
    }
  },
  "SimpleHero": {
    "componentId": "SimpleHero",
    "parentId": "heros",
    "name": "Simple Hero",
    "props": {
      "containerClass": "relative h-four w-full overflow-hidden",
      "wrapperClass": "relative text-white h-full z-1",
      "bgImageClass": "object-center min-w-[80rem] top-[-400px] w-full left-[-20rem] sm:relative sm:left-0 after:overlay after:bg-black after:opacity-20",
      "imgBg": "gathering.jpg",
      "htmlContainerClass": "text-center h-full flex justify-center items-center flex-col pb-35",
      "content": "<h1>Great Food, Made Just for You</h1><h2>Providing homemade flavors and personalized service for every occasion.</h2>",
      "h1Class": "text-15.25 font-bold",
      "h2Class": "text-7.75"
    }
  },
  "SimpleNavbar": {
    "componentId": "SimpleNavbar",
    "parentId": "navbars",
    "name": "Simple Navbar",
    "props": {
      "mainClass": "relative w-full h-14",
      "containerClass": "absolute h-14 w-full flex justify-center",
      "wrapperClass": " w-full h-14 flex items-center justify-between max-w-6xl",
      "logo": "Kellis Catering",
      "logoClass": "text-med",
      "linkContainerClass": "flex gap-4 text-small18 font-semibold",
      "linkClass": "hover:text-blue-600"
    }
  },
  "PictureText": {
    "componentId": "PictureText",
    "parentId": "pictureTexts",
    "name": "PictureText",
    "props": {
      "id": "",
      "containerClass": "max-w-[1200px] mx-auto",
      "wrapperClass": "flex gap-8",
      "imageClass": "w-full h-[350px] rounded",
      "img": "catering.jpg",
      "htmlContainerClass": "w-full mt-5",
      "content": "<h2>Menu Recommendations & Customization</h2><p>At Linda Burns Catering, we offer a wide selection of freshly prepared, home-cooked style dishes to suit any occasion. With 25 years of experience catering events like wedding receptions, graduation parties, and casual dinner gatherings, we ensure your expectations will be met. For the best experience, we recommend selecting up to three appetizers and three entrées from our menu, though we can customize dishes to fit your needs. Whether you have specific dietary preferences or allergy concerns, every item is made to order to accommodate your tastes.</p>",
      "h2Class": "text-[31px]",
      "aClass": "",
      "pClass": "text-small18"
    }
  },
  "SimpleNavCustomLinks": {
    "componentId": "SimpleNavCustomLinks",
    "name": "SimpleNavCustomLinks",
    "parentId": "navbars",
    "props": {
      "mainClass": "relative w-full h-14",
      "containerClass": "absolute h-14 w-full flex justify-center",
      "wrapperClass": " w-full h-14 flex items-center justify-between max-w-6xl max-w-[1200px] mx-auto",
      "logo": "Kellis Catering",
      "logoClass": "text-med",
      "linkContainerClass": "flex gap-4 text-small18 font-semibold",
      "linkClass": "hover:text-blue-600",
      "routesArray": "{ \"objects\": { \"route\": { \"name\": \"\", \"path\": \"\" } }, \"array\": [] }"
    }
  },
  "FormFloating": {
    "componentId": "FormFloating",
    "name": "Form Floating",
    "parentId": "forms",
    "props": {
      "name": "Home",
      "containerClass": "bg-[#D9D9D9] relative py-20",
      "containerContentClass": "",
      "containerContentArray": "{\"objects\":{\"content\":{\"type\":\"content\",\"content\":\"\",\"containerClass\":\"\",\"htmlContainerClass\":\"\",\"h1Class\":\"\",\"h2Class\":\"\",\"h3Class\":\"\",\"pClass\":\"\",\"ulClass\":\"\",\"liClass\":\"\",\"aClass\":\"\",\"strongClass\":\"\"}},\"array\":[]}",
      "wrapperClass": "relative max-w-[1200px] grid-cols-2 mx-auto z-2 bg-white py-23 pl-27 flex flex-row-reverse justify-between shadow-inset-[-240px_0_0_0_100] shadow-[#e7e7e7] shadow-inset-[-240px_0_0_0_100]",
      "wrapperContentClass": "col-span-1 text-white bg-[#3B3B3B] px-18 py-16 grid gap-8 w-full basis-2/6",
      "wrapperContentArray": "{\"objects\":{\"content\":{\"type\":\"content\",\"content\":\"\",\"containerClass\":\"\",\"htmlContainerClass\":\"\",\"h1Class\":\"\",\"h2Class\":\"\",\"h3Class\":\"\",\"pClass\":\"\",\"ulClass\":\"\",\"liClass\":\"\",\"aClass\":\"\",\"strongClass\":\"\"},\"iconText\":{\"type\":\"iconText\",\"containerClass\":\"\",\"href\":\"\",\"iconClass\":\"\",\"svg\":\"\",\"textClass\":\"\",\"text\":\"\"}},\"array\":[]}",
      "inputClass": "relative mt-1 resize-none border-black peer w-full border-b-2 border-gray-400 focus:border-blue-500 bg-transparent outline-none text-lg px-1 pt-2 z-1",
      "labelClass": "absolute left-2 transition-all text-gray-500",
      "labelOnInputClass": "top-[-2px] left-[1px] text-sm text-stone-900 z-2",
      "labelOffInputClass": "top-3 text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500",
      "formClass": "grid grid-cols-1 gap-2 w-full basis-3/6",
      "formArray": "{\"objects\":{\"content\":{\"type\":\"content\",\"content\":\"\",\"containerClass\":\"\",\"htmlContainerClass\":\"\",\"h1Class\":\"\",\"h2Class\":\"\",\"h3Class\":\"\",\"pClass\":\"\",\"ulClass\":\"\",\"liClass\":\"\",\"aClass\":\"\",\"strongClass\":\"\"},\"text\":{\"type\":\"text\",\"containerClass\":\"\",\"label\":\"\",\"placeholder\":\"\",\"requiredBool\":false},\"select\":{\"type\":\"select\",\"containerClass\":\"\",\"label\":\"\",\"selectClass\":\"\",\"placeholder\":\"\",\"options\":\"\",\"requiredBool\":false},\"radio\":{\"type\":\"radio\",\"containerClass\":\"\",\"label\":\"\",\"itemContainerClass\":\"\",\"itemClass\":\"\",\"items\":\"\",\"requiredBool\":false},\"checkbox\":{\"type\":\"checkbox\",\"containerClass\":\"\",\"label\":\"\",\"itemContainerClass\":\"\",\"itemClass\":\"\",\"items\":\"\"},\"textarea\":{\"type\":\"textarea\",\"containerClass\":\"relative\",\"textareaClass\":\"\",\"labelClass\":\"\",\"label\":\"\",\"placeholder\":\"\",\"requiredBool\":false}},\"array\":[]}",
      "buttonClass": "w-full mt-4 py-5 px-10 bg-black text-white text-lg",
      "buttonText": "Submit",
      "img": "",
      "imageClass": ""
    }
  },
  "ContentCard": {
    "componentId": "ContentCard",
    "parentId": "cards",
    "name": "Content Card",
    "props": {
      "containerClass": "mt-16",
      "wrapperClass": "flex justify-center gap-8",
      "cardContainerClass": "px-8 py-12 rounded-lg border border-black w-fit shadow-[0_0_10px_10px_10] hover:shadow-black transition",
      "htmlContainerClass": "w-two text-center",
      "cardArray": "{\"objects\":{\"card\":{\"content\":\"\"}},\"array\":[]}",
      "imgForList": "check.png",
      "h1Class": "text-[61px] leading-[1] font-bold",
      "h2Class": "text-[29px]",
      "h3Class": "",
      "pClass": "",
      "ulClass": "text-left mt-4",
      "liClass": "before:top-[60%] before:size-10 before:translate-y-[-50%] pl-10",
      "aClass": "bg-stone-600 text-white rounded-[1rem] w-full block h-16 flex items-center justify-center text-[25px] font-semibold mt-16 cursor-pointer hover:bg-stone-400",
      "strongClass": ""
    }
  },
  "NumberedDivs": {
    "componentId": "NumberedDivs",
    "parentId": "cards",
    "name": "Numbered Divs",
    "props": {
      "containerClass": "mt-32",
      "wrapperClass": "max-w-[1000px] min-h-180 mx-auto bg-[#f1f1f1]  md:grid grid-cols-2 grid-rows-5 md:gap-y-4 md:gap-x-4 lg:gap-x-12",
      "divArray": "{\"objects\":{\"div\":{\"containerClass\":\"\",\"numberContainerClass\":\"\",\"numberClass\":\"\",\"number\":\"\",\"content\":\"\",\"htmlContainerClass\":\"\",\"h2Class\":\"\",\"pClass\":\"\"}},\"array\":[]}"
    }
  },
  "HeroCarousel": {
    "componentId": "HeroCarousel",
    "parentId": "heros",
    "name": "HeroCarousel",
    "props": {
      "mainClass": "",
      "containerClass": "",
      "wrapperClass": "relative h-[700px]",
      "slideGroupContainerClass": "relative h-full",
      "slideGroupClass": "relative h-full",
      "slideClass": "absolute w-full h-full transition duration-500ms ease-in-out",
      "htmlContainerClass": "",
      "htmlWrapperClass": "",
      "content": "",
      "htmlStylesArray": "{\"objects\":{\"el\":{\"elName\":\"\",\"elClass\":\"\"}},\"array\":[]}",
      "slidesArray": "{\"objects\":{\"slide\":{\"containerClass\":\"\",\"wrapperClass\":\"\",\"imageClass\":\"h-full\",\"img\":\"\",\"htmlContainerClass\":\"\",\"content\":\"\",\"htmlStylesArray\":\"{ \\\"objects\\\": { \\\"el\\\": { \\\"elName\\\": \\\"\\\", \\\"elClass\\\": \\\"\\\" } }, \\\"array\\\": [] }\"}},\"array\":[]}",
      "addOnArray": "{\"objects\":{\"dots\":{\"type\":\"dots\",\"containerClass\":\"absolute z-4 translate-y-[-130%] w-full\",\"wrapperClass\":\"\",\"dotContainerClass\":\"flex w-full justify-center gap-2\",\"dotClass\":\"relative size-5 rounded-[200%] shadow-inset-[0px_0px_0px_3px_50] shadow-white transition relative z-10\",\"dotSelectedClass\":\"shadow-inset-[0px_0px_0px_3px_100] shadow-white scale-105\"},\"arrows\":{\"type\":\"arrows\",\"containerClass\":\"absolute z-3 h-full top-[50%] translate-y-[-50%] w-full\",\"wrapperClass\":\"flex justify-between items-center h-full\",\"iconButtonClass\":\"relative text-stone-100 hover:text-white\",\"iconPrevClass\":\"size-30 scale-y-[2]\",\"iconNextClass\":\"size-30 scale-[-1,2]\",\"svg\":\"\"}},\"array\":[]}",
      "delay": "50000"
    }
  }
};