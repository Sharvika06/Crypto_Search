// import { makeStyles } from "@material-ui/core";
// import Homepage from "./Pages/HomePage";
// import "./App.css";
// import { BrowserRouter, Route } from "react-router-dom";
// import CoinPage from "./Pages/CoinPage";
// import Header from "./components/Header";

// const useStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#14161a",
//     color: "white",
//     minHeight: "100vh",
//   },
// }));

// function App() {
//   const classes = useStyles();

//   return (
//     <BrowserRouter>
//       <div className={classes.App}>
//         <Header />
//         <Route path="/" component={Homepage} exact />
//         <Route path="/coins/:id" component={CoinPage} exact />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import React, { useState } from "react";
import { makeStyles, createTheme, ThemeProvider, CssBaseline, IconButton } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import "./App.css";

const useStyles = makeStyles(() => ({
  App: {
    minHeight: "100vh",
  },
  themeToggleButton: {
    position: "fixed",
    top: 10,
    right: 10,
  },
}));

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#fff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
  },
});

function App() {
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className={classes.App} style={{ backgroundColor: isDarkMode ? "#14161a" : "#fff", color: isDarkMode ? "white" : "black" }}>
          <Header />
          <IconButton onClick={handleThemeToggle} color="inherit" className={classes.themeToggleButton}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
