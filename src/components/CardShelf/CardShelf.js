import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "../CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InfoIcon from '@material-ui/icons/Info';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { cardTitle } from "../../assets/jss/material-kit-react.js";

import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import GoogleMap from 'google-map-react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ImgDefault from '../../assets/images/temp/default.jpg';

const useStyles = makeStyles((theme) => ({
  ...imagesStyles,
  cardTitle,
  modalMap: {
    height: 500
  },
  modalDivider: {
    marginTop: 30,
    marginBottom: 15,
    border: '1px solid #ccc'
  },
  root: {
    maxWidth: 345,
    marginBottom: 15
  },
  media: {
    height: 150,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  favoriteButton: {
    color: '#ccc'
  },
  favoriteButtonSelect: {
    color: 'red'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function createData(servico, preco, tempo) {
  return { servico, preco, tempo };
}

const rows = [
  createData('Corte Masculino', 'R$ 45.00', '1h'),
  createData('Corte Masculino', 'R$ 60.00', '1.5h'),
  createData('Escolva', 'R$ 120.00', '1.5h'),
  createData('Tintura', 'R$ 150.00', '2h'),
  createData('Depilacao parcial', 'R$ 80.00', '1.5h')
];

function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

export default function Cards(props) {
  const [modal, setModal] = React.useState(false);

  const { img, title, description, avaliation } = props;

  const classes = useStyles();

  const [color, setColor] = React.useState('#ccc');

  const hendleFirstLetterName = (name) => {
    return name.charAt(0).toUpperCase();
  }


  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {hendleFirstLetterName(title)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={avaliation}
        />
        <CardMedia
          className={classes.media}
          image={img ? img : ImgDefault}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon style={{color: color}} onClick={() => setColor('red')}/>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton onClick={() => setModal(true)}>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <WhatsAppIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        className={classes.modalFull}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
        fullScreen={true}
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <h4 className={classes.modalTitle}>
            Informacoes: {title}
          </h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <h5 className={classes.modalTitle}>
            Servicos
          </h5>
         <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Servico</TableCell>
                  <TableCell align="right">Preco</TableCell>
                  <TableCell align="right">Tempo Estimado em Horas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.servico}>
                    <TableCell component="th" scope="row">
                      {row.servico}
                    </TableCell>
                    <TableCell align="right">{row.preco}</TableCell>
                    <TableCell align="right">{row.tempo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <hr className={classes.modalDivider}/>
          <div className="w-full">
            <h5 className={classes.modalTitle}>
              Localizacao
            </h5>
            <div className={classes.modalMap}>
              <GoogleMap
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_MAP_KEY
                }}
                defaultZoom={12}
                defaultCenter={[-34.397, 150.64]}
              >
                <Marker text="Marker Text" lat="-34.397" lng="150.644" />
              </GoogleMap>
            </div>
          </div>
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)} color="danger">Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}