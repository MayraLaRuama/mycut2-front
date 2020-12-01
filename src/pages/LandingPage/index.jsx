import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

import ImgBg from "../../assets/images/bg.jpg";
import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={LogoHorizontal}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={ImgBg}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>MELHORES ESTABELECIMENTOS DA SUA CIDADE.</h1>
              <h4>
                Confira nosso catálogo e encontre os melhores servicos de beleza da sua cidade ou regiao de forma facil.
              </h4>
              <br />
              <Button
                color="customBlue"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                ASSISTA AGORA
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
