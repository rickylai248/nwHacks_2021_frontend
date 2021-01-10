/*import React, { useState } from "react";*/
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
/*import Typography from "./Typography";*/



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
  

const TodoPage = () => {
    const classes = useStyles();
    return (
      <>
        <Grid container spacing={3} direction="column" alignItems="center">
      
      <Grid container item spacing={2} direction="column" alignItems="center">
       
          <Grid item>
                    <ul class ="about-list">                      
                        <li id = "login-info" >Task:</li>
                            <label for = "Tasks">
                               <input type ="text" id = "tasks" placeholder="Add Your Task Here" />
                          </label>       
                  </ul>
           </Grid>
           <div class="lists">
					<section class="favs">
						<h3></h3>
						<ul></ul>
					</section>

					<section class="tasks">
						<h3></h3>
						<ul></ul>
					</section>

					<section class="done">
						<h3></h3>
						<ul></ul>
					</section>
				</div>
      
      </Grid>

  </Grid>
      </>
    );
  };
  
export default TodoPage;


