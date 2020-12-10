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

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


export default function FavoritePage(props) {

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


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
            <div className={classes.description}>
              <GridContainer justify="center">
                <Grid item xs={12} md={6}>
                        <Typography variant="h6" className={classes.title}>
                            Lista de Favoritos
                        </Typography>
                        <div className={classes.demo}>
                            <List dense={dense}>
                                <ListItem>
                                  <ListItemAvatar>
                                      <Avatar>
                                      <FolderIcon />
                                      </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                      primary="Salao da Ana"
                                  />
                                  <ListItemSecondaryAction>
                                      <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                      </IconButton>
                                  </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem>
                                  <ListItemAvatar>
                                      <Avatar>
                                      <FolderIcon />
                                      </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                      primary="Salao da Jose"
                                  />
                                  <ListItemSecondaryAction>
                                      <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                      </IconButton>
                                  </ListItemSecondaryAction>
                                </ListItem>
                                <ListItem>
                                  <ListItemAvatar>
                                      <Avatar>
                                      <FolderIcon />
                                      </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText
                                      primary="Salao da Joao"
                                  />
                                  <ListItemSecondaryAction>
                                      <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                      </IconButton>
                                  </ListItemSecondaryAction>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
