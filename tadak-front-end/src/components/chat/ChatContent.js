import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

const propTypes = {
    avatar: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    comment: PropTypes.string
};
const defaultProps = {
    avatar: './human_man.jpg',
    author: 'Anonymous',
    date : '1990-01-01',
    comment : 'HELLO WORLD!!!'
};
class ChatContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Comment>
                    <Comment.Content>
                        <Comment.Author as='a'>{this.props.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>{this.props.date}</div>
                        </Comment.Metadata>
                        <Comment.Text>{this.props.comment}</Comment.Text>
                        <Comment.Actions>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </div>
        );
    }
}
ChatContent.propTypes = propTypes;
ChatContent.defaultProps = defaultProps;
export default ChatContent;
