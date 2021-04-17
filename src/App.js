import "./App.css";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import Model from "./Model";
import Grid from "@material-ui/core/Grid";
import logo from "./images/logo.svg";
import { useSpring, animated } from "react-spring";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

//
// Theme
//

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e01a4f",
    },
    type: "dark",
    background: {
      default: "#e01a4f",
    },
  },
  typography: {
    h1: {
      fontWeight: 800,
    },
    body1: {
      fontWeight: 300,
    },
    fontFamily: `"Barlow Semi Condensed","Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
theme = responsiveFontSizes(theme);
//
// STYLES
//
const useStyles = makeStyles((theme) => ({
  gridd: {
    height: "100vh",
  },
  illustration: {
    height: "80vh",
  },
  logo: {
    margin: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const [clicked, setClicked] = useState(true);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container className={classes.gridd}>
          <AppBar position="fixed" elevation={0}>
            <Toolbar>
              <Box display="flex" flexGrow={1}>
                <img src={logo} alt="React Logo" height="50px" />
              </Box>

              <Button color="inherit" className={classes.menuButton}>
                Portfolio
              </Button>
              <Button color="inherit" className={classes.menuButton}>
                Klienci
              </Button>
              <Button
                color="inherit"
                className={classes.menuButton}
                onClick={() => setClicked(true)}
              >
                Kontakt
              </Button>
            </Toolbar>
          </AppBar>

          <Box height={100} width="100%">
            <Grid container spacing={3} fixed></Grid>
            <Grid
              container
              spacing={3}
              className={classes.gridd}
              alignItems="center"
            >
              <Grid item xs={12} sm={4} alignItems="center">
                <Typography variant="h1" component="h2">
                  Lorem Ipsum
                </Typography>
                <Typography variant="body1" component="h2">
                  W biznesie najważeniejsza jest prezentacja Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  i ncididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercita tion ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8} className={classes.illustration}>
                <Canvas
                  shadows
                  dpr={[1, 2]}
                  camera={{ position: [0, 0, 4], fov: 50 }}
                >
                  <ambientLight intensity={0.7} />
                  <spotLight
                    intensity={0.5}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />

                  <Suspense fallback={null}>
                    <Model position={[0, -0.8, 0]} />
                    <ContactShadows
                      rotation-x={Math.PI / 2}
                      position={[0, -0.8, 0]}
                      opacity={0.25}
                      width={10}
                      height={10}
                      blur={1.5}
                      far={0.8}
                    />
                  </Suspense>
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
