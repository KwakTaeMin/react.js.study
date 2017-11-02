import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from './logo.png'
import PropTypes from 'prop-types';

const propTypes = {
    socket : PropTypes.object
};
const defaultProps = {
};

export default class MenuExampleStackable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernumbers : 0,
            userList : [],
            activeItem : ''
        }
    }
    componentDidMount() {
        this.props.socket.on('login', message => {
            console.log(message.numUsers);

            this.setState({
                usernumbers : message.numUsers,
                userList : message.userList
            })

        });
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src= {logo} />
        </Menu.Item>

        <Menu.Item
          name='DoChat'
          active={activeItem === 'DoChat'}
          onClick={this.handleItemClick}
        >
            접속한 유저 수 [ {this.state.usernumbers} ]
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
           {this.state.userList.map((user, i) => {
               return user + ' '
           })}
        </Menu.Item>
      </Menu>
    )
  }
}
