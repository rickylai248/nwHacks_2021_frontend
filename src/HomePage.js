import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


import page1img1 from "./page1img1.svg";
import page1img2 from "./page1img2.svg";
/*import calm from "./calm.svg";
import depressed from "./depressed.svg";
import stressed from "./stressed.svg";
import happy from "./happy.svg";*/

/*import Box from "./Box";*/
/*import BackgroundBox from "./BackgroundBox";*/
/*import Button from "./Button";
import history from "./history";*/


const useStyles = makeStyles(() => ({
  happy: {
    backgroundColor: "#FFD9AC",
    border: "3px solid #FEA53F",
    "&:hover": {
      backgroundColor: "#FFD9AC",
    },
  },
  calm: {
    backgroundColor: "#EBD4F4",
    border: "3px solid #D499EB",
    "&:hover": {
      backgroundColor: "#EBD4F4",
    },
  },
  depressed: {
    backgroundColor: "#CCD3FA",
    border: "3px solid #526AF0",
    "&:hover": {
      backgroundColor: "#CCD3FA",
    },
  },
  stressed: {
    backgroundColor: "#DCFFCA",
    border: "3px solid #8CD167",
    "&:hover": {
      backgroundColor: "#DCFFCA",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={15} direction="column" alignItems="center">
      
        <Grid container item spacing={2} direction="column" alignItems="center">
          <Grid item>
            <h1 class="cool-class">Welcome!</h1>
            <h3 id="cool-class2"> Let's set up your account. </h3>
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
            <img src={page1img2} className="App-logo" alt="page1img2" />
            
          </Grid>
        </Grid>
    </Grid>
    </>
  );
};

export default HomePage;
