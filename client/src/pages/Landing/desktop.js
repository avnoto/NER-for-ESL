import React from "react";
import Footer from "../../components/Footer";
import GetStartedButton from "../../components/GetStartedButton";
import Background from "../../components/Background";
import FooterLinksRow1 from "../../components/FooterLinksRow1";
import FooterLinksRow2 from "../../components/FooterLinksRow2";
// import HeroSubText from "../../components/HeroSubText";
// import HeroText from "../../components/HeroText";
// import LoginButton from "../../components/LoginButton";
import Navbar from "../../components/Navbar";
import PreviewCard from "../../components/PreviewCard";
import "./desktop.css";

function Landing(props) {
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
    <div className="container-center-horizontal">
      <div className="desktop-1 screen ">
        <div className="overlap-group">
          <Background
            purpleCircle={backgroundProps.purpleCircle}
            turquoiseCircle={backgroundProps.turquoiseCircle}
            bg={backgroundProps.bg}
            group1Props={backgroundProps.group1Props}
          />
          <Footer untitledDesign91={footerMini6Props.untitledDesign91} />
          <FooterLinksRow1
            about={linksRow2Props.about}
            features={linksRow2Props.features}
            license={linksRow2Props.license}
            help={linksRow2Props.help}
            privacyPolicy={linksRow2Props.privacyPolicy}
          />
          <FooterLinksRow2 copyright={frameProps.copyright} />
          <h1 className="text-1 manrope-extra-bold-eerie-black-72px">
            {text1}
          </h1>
          <GetStartedButton
            labelI541147={adjustablePrimaryLargeProps.labelI541147}
          />
          <Navbar
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
            className="untitled-design-8-1"
            alt="esl icon"
            src={untitledDesign81}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
