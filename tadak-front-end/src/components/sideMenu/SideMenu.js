import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
const propTypes = {
};
const defaultProps = {
};
class SideMenu extends Component {


    state = { activeItem: 'bio' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    constructor(props) {
        super(props);
    }
    render() {
        const { activeItem } = this.state;
        return(

            <Menu vertical>
               <Menu.Item>
                 <Menu.Header>Products</Menu.Header>

                 <Menu.Menu>
                   <Menu.Item name='enterprise' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
                   <Menu.Item name='consumer' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
                 </Menu.Menu>
               </Menu.Item>

               <Menu.Item>
                 <Menu.Header>CMS Solutions</Menu.Header>

                 <Menu.Menu>
                   <Menu.Item name='rails' active={activeItem === 'rails'} onClick={this.handleItemClick} />
                   <Menu.Item name='python' active={activeItem === 'python'} onClick={this.handleItemClick} />
                   <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
                 </Menu.Menu>
               </Menu.Item>

               <Menu.Item>
                 <Menu.Header>Hosting</Menu.Header>

                 <Menu.Menu>
                   <Menu.Item name='shared' active={activeItem === 'shared'} onClick={this.handleItemClick} />
                   <Menu.Item name='dedicated' active={activeItem === 'dedicated'} onClick={this.handleItemClick} />
                 </Menu.Menu>
               </Menu.Item>

               <Menu.Item>
                 <Menu.Header>Support</Menu.Header>

                 <Menu.Menu>
                   <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                     E-mail Support
                   </Menu.Item>

                   <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                     FAQs
                   </Menu.Item>
                 </Menu.Menu>
               </Menu.Item>
             </Menu>

        );
    }
}
SideMenu.propTypes = propTypes;
SideMenu.defaultProps = defaultProps;
export default SideMenu;
