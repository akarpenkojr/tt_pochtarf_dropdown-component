//imports
import React, {Component} from 'react'

// import components
import OpenMenuIcon from './openMenuIcon.svg'
import styles from "./OpenSelectionMenu.module.scss";

// import styles

class OpenSelectionMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

   render() {
		console.log('___---_-_!!!_-_---___', this.props);
			const rotate = this.props.isMenuOpen ? {
				transform: 'rotate(0deg)'
			} : {
				transform: 'rotate(180deg)'
			};
      return (
         <div className={styles.openMenuIcon} style={rotate} onClick={this.props.onClick}>
					 <img src={OpenMenuIcon} alt="open close menu"/>
         </div>
      )
   }
}

export default OpenSelectionMenu
