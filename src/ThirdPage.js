/*import React, { useState } from "react";*/
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
/*import Typography from "./Typography";*/

import page3img1 from "./page3img1.svg";
import page3component from "./page3component.svg";
import Button from "./Button";
import history from "./history"



const useStyles = makeStyles((theme) => ({
  addtodo: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    }/*,
    send: {
      backgroundColor: "#FFD600",
      "&:hover": {
        backgroundColor: "#FFD600",
      },
    },*/
  }));
  

const ThirdPage = () => {
    const classes = useStyles();
    return (
      <>
        <Grid container spacing={3} direction="column" alignItems="center">
    
          <Grid container item spacing={2} direction="column" alignItems="center">
                <Grid item>
                <h2 class="cool-class">Hello Lisa!</h2>
                <h1 id="cool-class2">Here is your personalized schedule</h1>
                </Grid>

                <Grid item>
                <h4>Today: Jan 9</h4>
                </Grid>
                <Grid item>
                  <Button
                            onClick={(event) => {
                              event.preventDefault();
                              history.push("/TodoPage");
                            }}
                            classes={{ root: classes.addtodo}}
                          >
                     <img src={page3img1} className="todo" alt="page3img1" />
            </Button>
          </Grid>                
                <Grid item>
            <img src={page3component} className="Schedule-logo" alt="page3component" />
                </Grid>   
             
          </Grid>
      </Grid>
      </>
    );
  };
  
export default ThirdPage;


