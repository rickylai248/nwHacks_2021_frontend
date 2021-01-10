/*import React, { useState } from "react";*/
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
/*import Typography from "./Typography";*/

import page2img1 from "./page2img1.svg";
import Button from "./Button";
import history from "./history"



const useStyles = makeStyles((theme) => ({
    skip: {
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
  

const SecondPage = () => {
    const classes = useStyles();
    return (
      <>
        <Grid container spacing={3} direction="column" alignItems="center">
    
          <Grid container item spacing={2} direction="column" alignItems="center">
                <Grid item>
                <h1 class="cool-class">Almsot There!</h1>
                </Grid>
                <Grid item>
            <img src={page2img1} className="App-logo" alt="page2img1" />
                </Grid>
                <Grid item>
                    <p>Import Your Calendars.</p>
                            <ul class ="about-list">                      
                                <li id = "calendar-info" >(TODO: Add selection) Canvas</li>

                                <li id = "calendar-info">Google</li>

                                <li id = "calendar-info">Phone Calendar</li>
                        </ul>
                </Grid>
                <Grid item>
                     <Button
                            onClick={(event) => {
                            event.preventDefault();
                            history.push("/secondPage");
                            }}
                            classes={{ root: classes.skip}}
                        > Skip.
                    
                    </Button>
                </Grid>
          </Grid>
      </Grid>
      </>
    );
  };
  
export default SecondPage;


