/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AccountCircle, Done, Favorite, Home} from "@material-ui/icons";

// core components
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const handleName = () => {
    return localStorage.getItem('userName') ? localStorage.getItem('userName') : 'Usuario';
  }

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/products"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Ola, {handleName()}
        </Button>
        <Button
          href="/products"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Home className={classes.icons} />
          Home
        </Button>
        <Button
          href="/profile"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AccountCircle className={classes.icons} /> Perfil
        </Button>
        <Button
        href="#"
        color="transparent"
        target="_blank"
        className={classes.navLink}
        >
          <Done className={classes.icons} /> 
         Completar Cadastro...
        </Button>
        <Button
          href="/favorites"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
         <Favorite className={classes.icons} /> 
            Favoritos
        </Button>
      </ListItem>
    </List>
  );
}
