import React from "react";
import ReactDOM from "react-dom";
import CenteredGrid from "./grid";
import "./styles.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
  typography: {
    fontSize: 12,
    useNextVariants: true
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CenteredGrid theme={theme} />
      </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
