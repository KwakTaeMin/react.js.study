import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Input } from 'semantic-ui-react'
const propTypes = {
};
const defaultProps = {
};
class SignModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : true,
            nickname : ''
        }
        this.close = this.close.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ nickname: e.target.value })
    }

    close() {
        let socket = this.props.socket;
        console.log(socket);
        console.log(this.refs.nicknameref);
        socket.emit('add user', this.state.nickname);
        this.setState({ open: false })
    }

    render() {
        return(
            <Modal size={'mini'} open={this.state.open}>
                <Modal.Header>
                    Nick Name
                </Modal.Header>
                <Modal.Content>
                    <Input label='Nick Name' onChange={this.onChange}></Input>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.close} />
                </Modal.Actions>
            </Modal>
        );
    }
}
SignModal.propTypes = propTypes;
SignModal.defaultProps = defaultProps;
export default SignModal;
