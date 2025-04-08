const fs = require("fs");
const { getPropsFromTestProps, generateInterface, getGlobalProps, getPropVariableString, resetAndStringifyArrays } = require("./propManipulator");
const { getAllImports } = require("./importChanger");
const { purgeFile } = require("./purgeFile");
const { addPropsToComponent, arrayChanger } = require("./fileChanger");
const { convertDirectory } = require("./dirChanger");

const writeFile = (filename, str) => {
  try {
    fs.writeFileSync(`/Users/illmonk/fileChanger/outputs/${filename}`, str);
  } catch (error) {
    console.error(error);
  }
};

const destPath = "/Users/illmonk/fileChanger/Destination";
const srcPath = "/Users/illmonk/Documents/GitHub/Component Creator/public/src/components";
const compStorePath = "/Users/illmonk/fileChanger/componentStore.ts";
const groupStorePath = "/Users/illmonk/fileChanger/componentGroupStore.ts";

const groupName = "Heros";
const compName = "HeroCarousel";

const testProps = {
  mainClass: "",
  containerClass: "",
  wrapperClass: "relative h-[700px]",
  slideGroupContainerClass: "relative h-full",
  slideGroupClass: "relative h-full",
  slideClass: "absolute w-full h-full transition duration-500ms ease-in-out",
  htmlContainerClass: "",
  htmlWrapperClass: "",
  content: "",
  htmlStylesArray: { objects: { el: { elName: "", elClass: "" } }, array: [{ elName: "h1", elClass: "text-white font-bold text-10" }] },
  slidesArray: {
    objects: {
      slide: {
        containerClass: "",
        wrapperClass: "",
        imageClass: "h-full",
        img: "",
        htmlContainerClass: "",
        content: "",
        htmlStylesArray: { objects: { el: { elName: "", elClass: "" } }, array: [] },
      },
    },
    array: [
      {
        containerClass: "flex items-center relative justify-center h-full",
        wrapperClass: "",
        imageClass: "h-full",
        img: "city_street.jpg",
        htmlContainerClass: "relative z-1 flex items-center justify-center",
        content: "<h1>0</h1>",
        htmlStylesArray: { objects: { el: { elName: "", elClass: "" } }, array: [{ elName: "h1", elClass: "text-18 text-white" }] },
      },
    ],
  },
  addOnArray: {
    objects: {
      dots: { type: "dots", containerClass: "absolute z-4 translate-y-[-100%] w-full", wrapperClass: "", dotContainerClass: "", dotsClass: "", dotSelectedClass: "" },
      arrows: { type: "arrows", containerClass: "absolute z-3 h-full top-[50%] translate-y-[-50%] w-full", wrapperClass: "", iconButtonClass: "", iconClass: "", svg: "" },
    },
    array: [
      {
        type: "dots",
        containerClass: "absolute z-4 translate-y-[-130%] w-full",
        wrapperClass: "",
        dotContainerClass: "flex w-full justify-center gap-2",
        dotClass: "relative size-5 rounded-[200%] shadow-inset-[0px_0px_0px_3px_50] shadow-white transition relative z-10",
        dotSelectedClass: "shadow-inset-[0px_0px_0px_3px_100] shadow-white scale-105",
      },
      {
        type: "arrows",
        containerClass: "absolute z-3 h-full top-[50%] translate-y-[-50%] w-full",
        wrapperClass: "flex justify-between items-center h-full",
        iconButtonClass: "relative text-orange-500 hover:text-orange-400",
        iconPrevClass: "size-30 scale-y-[2]",
        iconNextClass: "size-30 scale-[-1,2]",
        svg: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>`,
      },
    ],
  },
  delay: "50000",
};

try {
  // const file = fs.readFileSync(`${srcPath}/${groupName}/${compName}/${compName}.tsx`, "utf-8");

  // const { propsString, parsedProps } = getPropsFromTstProps(file);

  const str = resetAndStringifyArrays(testProps);

  console.log(str);

  // writeFile("output.txt", propsString);

  // convertDirectory(groupName, compName, srcPath, destPath);
} catch (error) {
  console.error(error);
}
