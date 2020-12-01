import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/HeaderLogged/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/images/temp/profile.png";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";


import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        brand={LogoHorizontal}
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../assets/images/bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Gabriel D. Padua</h3>
                    <h6>SOROCABA - SP</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam expedita inventore iusto, atque beatae exercitationem dolor corrupti facere ab eos ea voluptatem voluptates quod dolores autem aliquam, obcaecati mollitia pariatur!{" "}
              </p>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
