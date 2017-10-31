import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Comment } from 'semantic-ui-react';
import ChatContent from './ChatContent';
import InputMessage from './InputMessage';

const propTypes = {
};
const defaultProps = {
};


class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatDataList: [{author : "tom", date : "ccc", comment : "안녕하세요"}]
        }


    }
    handleInputMessageClick() {
        this.setState({

            chatDataList: this.state.chatDataList.concat( {author : this.props.author, date : this.props.date, comment : this.refs.message.value })
        });
    }
    render() {
        return(
            <div>
                <Segment color='black'>
                    <Comment.Group>
                        {this.state.chatDataList.map((chatData, i) => {
                            return (<ChatContent author={chatData.author} date={chatData.date} comment={chatData.comment} key={i}/> )
                        })}
                    </Comment.Group>
                </Segment>
                <InputMessage onSend={this.handleInputMessageClick.bind(this)}/>
            </div>

        );
    }
}

ChatWindow.propTypes = propTypes;
ChatWindow.defaultProps = defaultProps;
export default ChatWindow;
