import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Segment, Grid } from 'semantic-ui-react';

const propTypes = {
    onSend: PropTypes.func,
};
const defaultProps = {
    onSend: console.warn('onSend func is not defined'),
};
class InputMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid columns={1}>
                    <Grid.Column>
                        <Segment color='black'>
                            <Form>
                                <Form.Group>
                                    <Form.Input placeholder='INPUT MESSAGES' width={16} ref="message"/>
                                    <Form.Button primary onClick={this.props.onSend} content='Send'/>
                                </Form.Group>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

InputMessage.propTypes = propTypes;
InputMessage.defaultProps = defaultProps;
export default InputMessage;
