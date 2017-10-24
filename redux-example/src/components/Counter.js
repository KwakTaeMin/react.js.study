import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Value from './Value';
import Control from './Control'
const propTypes = {
};
const defaultProps = {
};
class Count extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}
Count.propTypes = propTypes;
Count.defaultProps = defaultProps;
export default Count;
