import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Segment, Grid, Menu, Sticky } from 'semantic-ui-react';

const propTypes = {
    onSend: PropTypes.func,
    message: PropTypes.string,
    onInputMessage: PropTypes.func
};
const defaultProps = {
    onSend: console.warn('onSend func is not defined'),
    message: '',
    onInputMessage: console.warn('onInputMessage func is not defined')
};
class InputMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Input  width={15} placeholder='INPUT MESSAGES' value={this.props.message} onChange={this.props.onInputMessage}/>
                        <Form.Button width={1} primary onClick={this.props.onSend} content='Send'/>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

InputMessage.propTypes = propTypes;
InputMessage.defaultProps = defaultProps;
export default InputMessage;
