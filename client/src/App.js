import React from "react";
import "./style.scss";

function App() {
  return <Desktop1 {...Desktop1Data} />;
}

export default App;

function Desktop1(props) {
  const {
    text1,
    font1,
    address,
    spanText,
    spanText2,
    spanText3,
    untitledDesign81,
    backgroundProps,
    footerMini6Props,
    linksRow2Props,
    frameProps,
    adjustablePrimaryLargeProps,
    header7Props,
    previewCardProps,
  } = props;

  return (
    <div className="desktop-1">
      <div className="overlap-group">
        <Background
          purpleCircle={backgroundProps.purpleCircle}
          turquoiseCircle={backgroundProps.turquoiseCircle}
          bg={backgroundProps.bg}
          group1Props={backgroundProps.group1Props}
        />
        <FooterMini6 untitledDesign91={footerMini6Props.untitledDesign91} />
        <LinksRow2
          about={linksRow2Props.about}
          features={linksRow2Props.features}
          license={linksRow2Props.license}
          help={linksRow2Props.help}
          privacyPolicy={linksRow2Props.privacyPolicy}
        />
        <Frame copyright={frameProps.copyright} />
        <h1 className="text-1 manrope-extra-bold-eerie-black-72px">{text1}</h1>
        <AdjustablePrimaryLarge
          labelI541147={adjustablePrimaryLargeProps.labelI541147}
        />
        <Header7
          untitledDesign81={header7Props.untitledDesign81}
          text2={header7Props.text2}
          labelI551367={header7Props.labelI551367}
          labelI551646={header7Props.labelI551646}
          labelI551365={header7Props.labelI551365}
          labelI551357={header7Props.labelI551357}
          vector={header7Props.vector}
        />
        <div className="font-1 manrope-extra-bold-black-18px">{font1}</div>
        <PreviewCard
          line1={previewCardProps.line1}
          namedentityextraction1={previewCardProps.namedentityextraction1}
        />
        <div className="address manrope-bold-black-18px">{address}</div>
        <div className="text-3 manrope-extra-bold-white-28px">
          <span className="span">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="span">{spanText3}</span>
        </div>
        <img
          className="untitled-design-8-1-1"
          alt="esl icon"
          src={untitledDesign81}
        />
      </div>
    </div>
  );
}

function Background(props) {
  const { purpleCircle, turquoiseCircle, bg, group1Props } = props;

  return (
    <div className="background">
      <div className="overlap-group1">
        <img className="purple-circle" alt="purple cirlce" src={purpleCircle} />
        <img
          className="turquoise-circle"
          alt="turquoise cirlce"
          src={turquoiseCircle}
        />
        <img className="bg" alt="background" src={bg} />
        <Group1
          leftBand2={group1Props.leftBand2}
          leftBand1={group1Props.leftBand1}
          rightBand1={group1Props.rightBand1}
          rightBand2={group1Props.rightBand2}
          rightBand3={group1Props.rightBand3}
        />
      </div>
    </div>
  );
}

function Group1(props) {
  const { leftBand2, leftBand1, rightBand1, rightBand2, rightBand3 } = props;

  return (
    <div className="group-1">
      <div className="overlap-group3">
        <img className="left-band-2" alt="background shape" src={leftBand2} />
        <img className="left-band-1" alt="background shape" src={leftBand1} />
      </div>
      <div className="overlap-group2">
        <img className="right-band-1" alt="background shape" src={rightBand1} />
        <img className="right-band-2" alt="background shape" src={rightBand2} />
        <img className="right-band-3" alt="background shape" src={rightBand3} />
      </div>
    </div>
  );
}

function FooterMini6(props) {
  const { untitledDesign91 } = props;

  return (
    <div className="footer-mini-6">
      <img
        className="untitled-design-9-1"
        alt="esl icon"
        src={untitledDesign91}
      />
    </div>
  );
}

function LinksRow2(props) {
  const { about, features, license, help, privacyPolicy } = props;

  return (
    <div className="links-row-2">
      <div className="about manrope-normal-white-16px">{about}</div>
      <div className="features manrope-normal-white-16px">{features}</div>
      <div className="license manrope-normal-white-16px">{license}</div>
      <div className="help manrope-normal-white-16px">{help}</div>
      <div className="privacy-policy manrope-normal-white-16px">
        {privacyPolicy}
      </div>
    </div>
  );
}

function Frame(props) {
  const { copyright } = props;

  return (
    <div className="frame">
      <p className="copyright manrope-normal-alto-14px">{copyright}</p>
    </div>
  );
}

function AdjustablePrimaryLarge(props) {
  const { labelI541147 } = props;

  return (
    <div className="adjustable-primary-large">
      <div className="label-i541147 manrope-bold-white-20px">
        {labelI541147}
      </div>
    </div>
  );
}

function Header7(props) {
  const {
    untitledDesign81,
    text2,
    labelI551367,
    labelI551646,
    labelI551365,
    labelI551357,
    vector,
  } = props;

  return (
    <div className="header-7">
      <img
        className="untitled-design-8-1"
        alt="esl icon"
        src={untitledDesign81}
      />
      <div className="text-2 manrope-bold-black-20px">{text2}</div>
      <div className="overlap-group4">
        <div className="right-nav"></div>
        <div className="nav-items">
          <div className="label-i551367 manrope-bold-eerie-black-14px">
            {labelI551367}
          </div>
          <div className="label-i551646 manrope-bold-eerie-black-14px">
            {labelI551646}
          </div>
          <div className="label-i551365 manrope-bold-eerie-black-14px">
            {labelI551365}
          </div>
          <div className="header-menu-dropdown">
            <div className="label-i551357 manrope-bold-eerie-black-14px">
              {labelI551357}
            </div>
            <div className="essential-icons-chevron-down">
              <img className="vector" alt="arrow down icon" src={vector} />
            </div>
          </div>
          <div className="menu-item-default"></div>
        </div>
      </div>
    </div>
  );
}

function PreviewCard(props) {
  const { line1, namedentityextraction1 } = props;

  return (
    <div className="preview-card">
      <div className="content">
        <div className="feedback-person-details"></div>
      </div>
      <img className="line-1" alt="line vector" src={line1} />
      <img
        className="namedentityextraction-1"
        alt="ner example"
        src={namedentityextraction1}
      />
    </div>
  );
}
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
