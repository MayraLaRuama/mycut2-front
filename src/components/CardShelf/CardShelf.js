import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import Button from "../CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
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

import { cardTitle } from "../../assets/jss/material-kit-react.js";

import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import GoogleMap from 'google-map-react';

const styles = {
  ...imagesStyles,
  cardTitle,
  modalMap: {
    height: 400
  }
};

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

const useStyles = makeStyles(styles);


function Marker({ text }) {
	return (
		<Tooltip title={text} placement="top">
			<Icon className="text-red">place</Icon>
		</Tooltip>
	);
}

export default function Cards(props) {
  const [modal, setModal] = React.useState(false);
  const { img, title, description } = props;

  const classes = useStyles();
  return (
    <div>
      <Card style={{width: "100%"}}>
        <img
          style={{height: "300px", width: "100%", display: "block"}}
          className={classes.imgCardTop}
          src={img}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          <p>{description}</p>
          <Button color="danger" onClick={() => setModal(true)}>
            <InfoIcon/>
            Mais informacoes
          </Button>
          <Button color="success">
            <WhatsAppIcon />
            Contato
          </Button>
        </CardBody>
      </Card>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <h4 className={classes.modalTitle}>Detalhes do estabelecimento</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
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
          <div className="w-full">
            <h4 className={classes.modalTitle}>Localizacao</h4>
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