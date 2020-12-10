import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// @material-ui/icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
// core components
import Header from "../../components/HeaderLogged/Header.js";
import HeaderLinks from "../../components/HeaderLogged/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import ImgBg from "../../assets/images/bg.jpg";


import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

const useStyles = makeStyles(styles);

export default function AddressPage(props) {
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const history = useHistory();

  const [cep, setCep] = React.useState('');
  const [logradouro, setLogradouro] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [bairro, setBairro] = React.useState('');
  const [cidade, setCidade] = React.useState('');
  const [estado, setEstado] = React.useState('');

  const handleSubmit = () => {
    toast.success('Cadastro atualizado com sucesso!!!');
    localStorage.setItem('completeRegistre', true);
    localStorage.setItem('locale', cidade);
    history.push('/products');    
  }

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();

  const handleKeyDown = (e) => {
     if(e.key === 'Enter' || e.key === 'Tab') {
       Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
           const {data} = response;
           setLogradouro(data.logradouro);
           setBairro(data.bairro);
           setCidade(data.localidade);
           setEstado(data.uf);
        })
        .catch(err => {
          console.log(err);
        })
     }
  }
  
  const { ...rest } = props;
 
  return (
    <div>
      <ToastContainer />
      <Header
        absolute
        color="transparent"
        brand={LogoHorizontal}
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + ImgBg + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="custom" className={classes.cardHeader}>
                    <h4>Atualizar endereço</h4>
                  </CardHeader>
                  <p className={classes.divider}>Preencha os campos abaixo:</p>
                  <CardBody>
                    <CustomInput
                        labelText="CEP"
                        id="cep"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "text",
                            value: cep,
                            onChange: (event) => setCep(event.target.value),
                            onKeyDown: (event) => {handleKeyDown(event)},
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LocationOnIcon className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                      labelText="Logradouro"
                      id="logradouro"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value: logradouro,
                        onChange: (event) => setLogradouro(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Numero"
                      id="numero"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value: numero,
                        onChange: (event) => setNumero(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Bairro"
                      id="bairro"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "bairro",
                        value: bairro,
                        onChange: (event) => setBairro(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                     <CustomInput
                      labelText="Cidade"
                      id="cidade"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "cidade",
                        value: cidade,
                        onChange: (event) => setCidade(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    <CustomInput
                      labelText="Uf"
                      id="uf"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value: estado,
                        onChange: (event) => setEstado(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <LocationOnIcon className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="customBlue" size="lg" onClick={handleSubmit}>
                      Cadastrar
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
