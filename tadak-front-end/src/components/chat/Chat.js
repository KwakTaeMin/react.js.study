import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './ChatWindow';
import InputMessage from './InputMessage';

const propTypes = {
};
const defaultProps = {
};
class Chat extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        return(
            <div>
                <ChatWindow/>
                <InputMessage/>
            </div>

        );
    }
}
Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;
export default Chat;
