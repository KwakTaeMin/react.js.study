import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Comment, Grid, Container, Menu} from 'semantic-ui-react';
import ChatContent from './ChatContent';
import InputMessage from './InputMessage';
import io from 'socket.io-client';

const propTypes = {
    socket : PropTypes.object
};
const defaultProps = {
};

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatDataList: [{type: 1, author : "공지사항", date : "2017-10-31", comment : "테스트 서버 입니다."}],
            author: 'Anonymous',
            message: '',
            usernumbers : 0,
            userList : []
        }
    }

    componentDidMount() {
        this.props.socket.on('new message', message => {
            console.log(message);
            let currentDate = new Date().toISOString();
            this.setState({
                chatDataList: this.state.chatDataList.concat( {author : message.username, date : currentDate, comment : message.message} )
            });
        });

        this.props.socket.on('user joined', message => {
            console.log(message.username);
            let currentDate = new Date().toISOString();
            this.setState({
                author : message.username,
                chatDataList: this.state.chatDataList.concat( {author : message.username, date : currentDate, comment : message.username + '님이 접속하셨습니다.'} )
            })
        });
    }

    handleMessageBox(e) {
        console.log(e)
        let message = e.target.value;
        this.setState ({
            message: message
        });
    }

    handleInputMessageButtonClick() {

        this.props.socket.emit('new message', this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return(
            <div>
                <Segment>
                    <Container fluid style={{height: '75%', maxHeight: '75%', overflowX: 'hidden' }}>
                        <Comment.Group>
                            {this.state.chatDataList.map((chatData, i) => {
                                return (<ChatContent author={chatData.author} date={chatData.date} comment={chatData.comment} key={i}/> )
                            })}
                        </Comment.Group>
                    </Container>

                    <Container fluid>
                        <InputMessage message={this.state.message} onSend={this.handleInputMessageButtonClick.bind(this)} onInputMessage={this.handleMessageBox.bind(this)} />
                    </Container>
                </Segment>
            </div>
        );
    }
}
ChatWindow.contextTypes = {
    scrollArea: PropTypes.object
};
ChatWindow.propTypes = propTypes;
ChatWindow.defaultProps = defaultProps;

export default ChatWindow;
