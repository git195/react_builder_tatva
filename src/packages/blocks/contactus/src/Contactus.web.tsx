import React from "react";
import {
  Modal,
  Container,
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
  Typography,
  Input,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import ContactusController, { Props } from "./ContactusController";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export default class Contactus extends ContactusController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          {/* Customizable Area Start */}

          {/* Customizable End Start */}
        </Container>
      </ThemeProvider>
      //Merge Engine End DefaultContainer
    );
  }
}

// Customizable Area Start

const modalStyle = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 600,
  bgcolor: "background.paper",
};

// Customizable Area End
