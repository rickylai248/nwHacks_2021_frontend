import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import history from "./history";

import page1img1 from "./page1img1.svg";
import page1img2 from "./page1img2.svg";

/*import Box from "./Box";*/
/*import BackgroundBox from "./BackgroundBox";*/
import Button from "./Button";




const useStyles = makeStyles(() => ({
  login: {
    backgroundColor: "#FFFFFF",
    border: "3px solid #1B2A4F",
    "&:hover": {
      backgroundColor: "#798FFE",
    },
  }
 
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} direction="column" alignItems="center">
      
        <Grid container item spacing={2} direction="column" alignItems="center">
          <Grid item>
            <h1 class="cool-class">Welcome!</h1>
            <h3 class="cool-class"> Let's set up your account. </h3>
          </Grid>
          <Grid item>
          <img src={page1img1} className="App-logo" alt="page1img1" />
            </Grid>
            <Grid item>
                      <ul class ="about-list">                      
                          <li id = "login-info" >Username:</li>
                              <label for = "Username">
                                 <input type ="username"  placehodler="Enter your username" />
                            </label>       
                          <li id = "login-info">Email:</li>
                           <label for = "Email:" >
                                   <input type ="email"  placehodler="Enter your email" />
                              </label>
                          <li id = "login-info">Password:</li>
                            <label for = "Password:" >
                              <input type ="password"  placehodler="Enter your password" />
                        </label>
                    </ul>
             </Grid>
          <Grid item>
          <Button
                    onClick={(event) => {
                      event.preventDefault();
                      history.push("/SecondPage");
                    }}
                    classes={{ root: classes.login}}
                  >
            <img src={page1img2} className="App-logo" alt="page1img2" />
            </Button>
          </Grid>
        </Grid>

    </Grid>
    </>
  );
};

export default HomePage;
