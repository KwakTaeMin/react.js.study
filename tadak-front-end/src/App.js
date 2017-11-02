import React, { Component } from 'react';
import Chat from './components/chat/Chat';
import Menu from './components/menu/Menu';
import SideMenu from './components/sideMenu/SideMenu'
import io from 'socket.io-client';
import SignModal from './components/sign/SignModal'

import { Grid } from 'semantic-ui-react';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socket: io.connect('localhost:4000')
        }
    }

    render() {

    return (
            <div>
                <SignModal socket={this.state.socket}/>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Menu socket={this.state.socket}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column stretched width={16}>
                            <Chat socket={this.state.socket}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default App;
