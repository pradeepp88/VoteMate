import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SaveIcon from "@material-ui/icons/Save";
import logo from './logo.png';
import './Login.css';
import TweetContainer from "./TweetContainer";
import Questionnaire from "./Questionnaire"
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      address: "",
    }
  }

  handleUserChange = (e)=>{
    this.setState({ userid: e.target.value });
    
  }

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
    
  }

  handleSubmit(event) {
    return(
      <Questionnaire />
    )
  }

 
  // eslint-disable-next-line react/require-render-return
  render() {
    
    const classes = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(2),
      },
    }));
    
    const formStyle = {
      display: "flex",
      flexDirection: "column",
    };
    
    const buttonDivStyle = {
      display: "normal",
      flexDirection: "row",
      marginLeft: "60px",
      
    };
    return(
    <>
    <div className="divStyle">
    <form style={formStyle}>
      
    <img src={logo} alt="Logo" className="image" />

      <TextField 
        placeholder="Username" 
        margin="dense" 
        autoComplete="off" 
        onChange={(e) => this.handleUserChange(e)} 
      />

      <TextField
        placeholder="Password"
        margin="dense"
        autoComplete="off"
        length="5"
        onChange={(e) => this.handleAddressChange(e)}
      />

      <div style={buttonDivStyle}>
      <br></br>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<ExitToAppIcon />}
        >
          Login
        </Button>
        {" "}
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Register
        </Button>
      </div>
      <br></br>
      <br></br>
      <Button
      variant="contained"
      color="secondary"
      size="medium"
      startIcon={<SendRoundedIcon />}
      onClick={event =>  window.location.href='/Questionnaire'}
      alignItems="center"
      >
      Answer Quesstionnaire
      </Button>
    </form>
    </div>
    
    <TweetContainer status="Enter your Question" userid={this.state.userid}/>
    </>
    )
  }
}

export default LoginForm;
