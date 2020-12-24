/**
 Created on 23.12.2020
 */

//imports
import React, {Component} from 'react'

// import components
import DeselectAllOptions from "../DeselectAllOptions";
import DropdownTitle from "../DropdownTitle";
import OpenSelectionMenu from "../OpenSelectionMenu";
import OptionItems from "../OptionItems";

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
		 const openComponent = this.state.isMenuOpen ? {
			 maxHeight: '205px',
			 height: '100%',
			 borderColor: 'rgba(0, 85, 166, 1)'
		 } : {
			 maxHeight: '40px',
			 height: '100%'
		 };
      return (
         <div className={styles.dropDownComponent} style={openComponent}>
					 <div className={styles.dropDownComponent__headerWrapper}>
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
						 <OpenSelectionMenu switchMenu={this.switchMenu} isMenuOpen={this.state.isMenuOpen}/>
					 </div>
					 <OptionItems items={this.props.menuItems}/>
         </div>
      )
   }
}

export default Dropdown
