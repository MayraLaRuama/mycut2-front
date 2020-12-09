import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// core components
import Header from "../../components/HeaderLogged/Header.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardShelf from "../../components/CardShelf/CardShelf.js";
import Carousel from "react-slick";

import styles from "../../assets/jss/material-kit-react/views/customPage.js";

import s1 from '../../assets/images/temp/salao1.jpg';
import s2 from '../../assets/images/temp/salao2.jpeg';
import s3 from '../../assets/images/temp/salao3.jpg';
import s4 from '../../assets/images/temp/salao4.jpg';
import image1 from "../../assets/images/temp/banner1.jpg";
import image2 from "../../assets/images/temp/banner2.jpg";

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Parallax from "../../components/Parallax/Parallax.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
     if(!email || !password) {
       toast.error('Preencha os campos para efetuar login!!!');
       return;
     }

     Axios.post(`http://localhost:3000/users/login`, {email, password})
      .then(response => {
        const { data } = response;
        if(data.email === "error") {
            toast.error("Senha inválida!!!");
            return;
        }

        history.push('/shelf');

      })
      .catch(error => {
        toast.error('Usuário não encontrado!!!');
        return;
      })
  }
  
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  
  const { ...rest } = props;

  const services = [
    { title: 'Escova'},
    { title: 'Corte Feminino'},
    { title: 'Corte Masculino'},
    { title: 'Depilacao'},
    { title: 'Pe'},
    { title: "Mao"}
  ];

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  return (
    <div className={classes.mainPage}>
      <ToastContainer />
      <Header
        brand={LogoHorizontal}
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax fit filter image={require("../../assets/images/bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="space-between" className={classes.menuFilter}>
                <GridItem xs={12} sm={12} md={4}>
                  <Autocomplete
                      id="filter-demo"
                      options={services}
                      getOptionLabel={(option) => option.title}
                      filterOptions={filterOptions}
                      renderInput={(params) => <TextField {...params} label="Buscar estabelecimentos..." variant="outlined" />}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Autocomplete
                      id="combo-box-demo"
                      options={services}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => <TextField {...params} label="Selecione o servico..." variant="outlined" />}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s1} title="LRO Cabelo Estética" avaliation="4.5/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s2} title="Atelier Cabeleireiros" avaliation="4.3/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s3} title="Jacques Janine Sorocaba" avaliation="4.2/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="4.1/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="4.5/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="4.7/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s1} title="LRO Cabelo Estética" avaliation="4.3/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s2} title="Atelier Cabeleireiros" avaliation="4.1/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s3} title="Jacques Janine Sorocaba" avaliation="3.5/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="3.2/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="2.5/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CardShelf img={s4} title="Mônica Otacílio Cabeleireiros" avaliation="2/5" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>  
      <Footer whiteFont />
    </div>
  );
}
