import React, {Component} from 'react';
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import {Grid, Button, ButtonGroup, Typography} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';


export default class HomePage extends Component{
    constructor(props) {
        super(props);
        
    }

    renderHomePage = () => {
        return (
            <Grid container spacing = {3}>
                <Grid item xs = {12} align ="center">
                    <Typography variant="h3" compact="h3">
                        Słuchaj muzyki razem ze znajomymi :)
                    </Typography>
                </Grid>
                <Grid item xs = {12} align ="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to='/join' component={ Link }>
                            Join a Room
                        </Button>               
                        <Button color="secondary" to='/create' component={ Link }>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }
    

    render(){
        return (
        <Router>
            <Switch>
                <Route exact path="/">{this.renderHomePage()}</Route>
                <Route path="/join" component={RoomJoinPage}></Route>
                <Route path="/create" component={CreateRoomPage}></Route>
                <Route path="/room/:roomCode" component={Room}></Route>
            </Switch>
        </Router>
        );
    }
}