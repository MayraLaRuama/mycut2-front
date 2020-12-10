import React from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from '@material-ui/icons/Lock';
import Phone from '@material-ui/icons/Phone';
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
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

export default function LoginPage(props) {
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const history = useHistory();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  const classes = useStyles();
  
  const { ...rest } = props;

  const handleSubmit = () => {
    if(!name || !email || !password || !password2) {
      toast.error('Preencha os campos obrigatórios * para efetuar cadastro!!!');
      return;
    }

    if(password !== password2) {
      toast.error('Senhas não coincidem!!!');
      return;
    }

    Axios.post(`${process.env.REACT_APP_API_HOST}/users`, {name, email, phone, password})
    .then(response => {
      history.push('/login');
    })
    .catch(error => {
       toast.error('Erro ao cadastrar usuário ou usuario ja existe!!!');
    })
    
  }
  
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
                    <h4>Cadastro</h4>
                  </CardHeader>
                  <p className={classes.divider}>Preencha os campos abaixo:</p>
                  <CardBody>
                    <CustomInput
                        labelText="Nome *"
                        id="name"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "text",
                            onChange: (event) => setName(event.target.value),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <People className={classes.inputIconsColor} />
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                      labelText="Email *"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        onChange: (event) => setEmail(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Telefone"
                      id="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        onChange: (event) => setPhone(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Senha *"
                      id="password"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (event) => setPassword(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                     <CustomInput
                      labelText="Confirmar senha *"
                      id="password2"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (event) => setPassword2(event.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor}/>
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
