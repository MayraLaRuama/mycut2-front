import React from "react";
import Axios from "axios";
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

  const [data, setData] = React.useState([]);
 
  React.useEffect(async () => {
      const {data} = await handleLoadProfile();
      setData(data);
  }, []);

  const handleLoadProfile = async () => {
     const userId = localStorage.getItem('userId')
     return await Axios.get(`${process.env.REACT_APP_API_HOST}/users/${userId}`);
  }

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
                    <h3 className={classes.title}>{data.name}</h3>
                    <h4>{data.email}</h4>
                    <h6>Localicacao: SOROCABA - SP</h6>
                    <h6>Telefone: {data.phone}</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Bio: 
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
