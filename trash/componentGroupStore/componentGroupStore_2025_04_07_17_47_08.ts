export interface CompGroup {
  id: string;
  name: string;
  color: string;
  componentIds: string[];
}

export const componentGroupStore: Record<string, CompGroup> = {
  "navbars": {
    "id": "navbars",
    "name": "Navbars",
    "color": "#ccfbf1",
    "componentIds": [
      "LambNavbar",
      "Navbar",
      "SimpleNavbar",
      "SimpleNavCustomLinks"
    ]
  },
  "headers": {
    "id": "headers",
    "name": "Headers",
    "color": "#ccfb00",
    "componentIds": [
      "BasicHeader"
    ]
  },
  "heros": {
    "id": "heros",
    "name": "Heros",
    "color": "#fda4af",
    "componentIds": [
      "LambHero",
      "SimpleHero",
      "HeroCarousel"
    ]
  },
  "linkboxes": {
    "id": "linkboxes",
    "name": "LinkBoxes",
    "color": "#a78bfa",
    "componentIds": [
      "LambLinkBoxes"
    ]
  },
  "pictureTexts": {
    "id": "pictureTexts",
    "name": "PictureTexts",
    "color": "#fde047",
    "componentIds": [
      "LambPictureText",
      "PictureText"
    ]
  },
  "forms": {
    "id": "forms",
    "name": "Forms",
    "color": "#6969ff",
    "componentIds": [
      "FormFloating",
      "Form",
      "penski"
    ]
  },
  "carousels": {
    "id": "carousels",
    "name": "Carousels",
    "color": "#f5d0fe",
    "componentIds": [
      "Carousel"
    ]
  },
  "footers": {
    "id": "footers",
    "name": "Footers",
    "color": "#f5d0fe",
    "componentIds": [
      "Footer"
    ]
  },
  "galleries": {
    "id": "galleries",
    "name": "Galleries",
    "color": "#fecdd3",
    "componentIds": [
      "Gallery",
      "ImageCarousel"
    ]
  },
  "standalone": {
    "id": "standalone",
    "name": "Standalone",
    "color": "#EEEEEE",
    "componentIds": [
      "Images",
      "TextButtons",
      "BragBox",
      "Map",
      "InfoBoxesWSVG"
    ]
  },
  "cards": {
    "id": "cards",
    "name": "Cards",
    "color": "#f5f3d8",
    "componentIds": [
      "Cards",
      "SVGTitleTextImageCards",
      "ContentCard",
      "NumberedDivs"
    ]
  },
  "howitworks": {
    "id": "howitworks",
    "name": "HowItWorks",
    "color": "#ffd13c",
    "componentIds": [
      "HowItWorksLinear"
    ]
  },
  "menus": {
    "id": "menus",
    "name": "Menus",
    "color": "#ffd13c",
    "componentIds": [
      "Menu"
    ]
  }
};