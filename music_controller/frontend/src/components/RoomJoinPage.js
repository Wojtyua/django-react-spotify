import React, { Component } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: "",
      error: "",
    };
  }

  render() {
    return (
      <Grid container spacing={1} align="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Dołącz do ekipy
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={this.state.error}
            label="kodzik tutaj byczkq"
            placeholder="wpisuj"
            value={this.state.roomCode}
            helperText={this.state.error}
            variant="outlined"
            onChange={this.handleTextFieldChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.roomButtonPressed}
          >
            Wbijaj wariacie
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" to="/" component={Link}>
            ewakuacja!
          </Button>
        </Grid>
      </Grid>
    );
  }

  handleTextFieldChange = (e) => {
    this.setState({
      roomCode: e.target.value,
    });
  };

  roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: this.state.roomCode,
      }),
    };
    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          this.props.history.push(`/room/{${this.state.roomCode}}`);
        } else {
          this.setState({ error: "Room not Found." });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
