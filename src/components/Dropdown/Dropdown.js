/**
 Created on 23.12.2020
 */

//imports
import React, {Component} from 'react'

// import components
import DeselectAllOptions from "../DeselectAllOptions";
import DropdownTitle from "../DropdownTitle";
import OpenSelectionMenu from "../OpenSelectionMenu";

// import styles
import styles from './Dropdown.module.scss'

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOptions: [],
			isMenuOpen: false
		};

		this.switchMenu = this.switchMenu.bind(this);
	}

	switchMenu() {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen
		}));
	}

   render() {
      return (
         <div className={styles.dropDownComponent}>
					 { !this.state.selectedOptions.length ? (
							 <div className={styles.dropDownComponent__titleWrapper}>
								 <DropdownTitle />
							 </div>
					 ) : (
							 <div>
								 <div className={styles.dropDownComponent__deselectIconWrapper}>
									 <DeselectAllOptions />
								 </div>
							 </div>
					 )
					 }
					 <OpenSelectionMenu onClick={this.switchMenu} isMenuOpen={this.state.isMenuOpen}/>
         </div>
      )
   }
}

export default Dropdown
