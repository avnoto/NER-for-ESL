import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing/desktop";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Landing}>
          <Landing {...Desktop1Data} />
        </Route>
      </div>
    </Router>
  );
}

export default App;

const group1Data = {
  leftBand2:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/left-band-2@2x.svg",
  leftBand1:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/left-band-1@2x.svg",
  rightBand1:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/right-band-1@2x.svg",
  rightBand2:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/right-band-2@1x.svg",
  rightBand3:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/right-band-3@2x.svg",
};

const backgroundData = {
  purpleCircle:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/purple-circle@2x.svg",
  turquoiseCircle:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/turquoise-circle@2x.svg",
  bg:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/bg@1x.svg",
  group1Props: group1Data,
};

const footerMini6Data = {
  untitledDesign91:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/untitled-design--9--1@2x.svg",
};

const linksRow2Data = {
  about: "About",
  features: "Features",
  license: "License",
  help: "Help",
  privacyPolicy: "Privacy Policy",
};

const frameData = {
  copyright: "© 2020 NER for ESL. All rights reserved",
};

const adjustablePrimaryLargeData = {
  labelI541147: "Get Started",
};

const header7Data = {
  untitledDesign81:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/untitled-design--8--1@2x.svg",
  text2: "NER for ESL",
  labelI551367: "About",
  labelI551646: "Features",
  labelI551365: "Blog",
  labelI551357: "More",
  vector:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/vector-10@2x.svg",
};

const previewCardData = {
  line1:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/line-1@1x.svg",
  namedentityextraction1:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/namedentityextraction-1@1x.svg",
};

const Desktop1Data = {
  text1: "Enhance your fluency.",
  font1: "LOG IN",
  address: "27 tags",
  spanText: "Input any English text and our ",
  spanText2: "named-entity recognition",
  spanText3:
    " AI model will help you identify proper nouns and learn unknown vocabulary.",
  untitledDesign81:
    "https://anima-uploads.s3.amazonaws.com/projects/604159adc5e397710c55b205/releases/604159be40730c056abbd273/img/untitled-design--8--1@2x.svg",
  backgroundProps: backgroundData,
  footerMini6Props: footerMini6Data,
  linksRow2Props: linksRow2Data,
  frameProps: frameData,
  adjustablePrimaryLargeProps: adjustablePrimaryLargeData,
  header7Props: header7Data,
  previewCardProps: previewCardData,
};
