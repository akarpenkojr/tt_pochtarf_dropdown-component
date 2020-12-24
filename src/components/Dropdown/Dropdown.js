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
import SelectedOptionItems from "../SelectedOptionItems";

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
		this.selectOption = this.selectOption.bind(this);
	}

	selectOption = (object, id) => {
		let selected = [...this.state.selectedOptions];
		selected.push(object.filter(item => {
			return item.id === id;
		}));
		this.setState({
			selectedOptions: selected
		});
	};

	switchMenu() {
		this.setState(state => ({
			isMenuOpen: !state.isMenuOpen
		}));
	}

   render() {
		 const openComponent = this.state.isMenuOpen ? {
			 maxHeight: '205px',
			 height: '100%',

		 } : {
			 maxHeight: '40px',
			 height: '100%'
		 };

		 let dropDownComponent = styles.dropDownComponent;
		 if (this.state.isMenuOpen || this.state.selectedOptions.length) {
			 dropDownComponent = styles.dropDownComponent + ' ' + styles.dropDownComponentActive;
		 }

      return (
         <div className={dropDownComponent} style={openComponent}>
					 <div className={styles.dropDownComponent__headerWrapper}>
						 { !this.state.selectedOptions.length ? (
								 <div className={styles.dropDownComponent__titleWrapper}>
									 <DropdownTitle />
								 </div>
						 ) : (
								 <div className={styles.dropDownComponent__content}>
									 <div className={styles.dropDownComponent__selectedOptionItemsWrapper}>
										 <SelectedOptionItems />
									 </div>
									 <div className={styles.dropDownComponent__deselectIconWrapper}>
										 <DeselectAllOptions />
									 </div>
								 </div>
						 )
						 }
						 <OpenSelectionMenu switchMenu={this.switchMenu} isMenuOpen={this.state.isMenuOpen}/>
					 </div>
					 <OptionItems selectOption={this.selectOption} items={this.props.menuItems}/>
         </div>
      )
   }
}

export default Dropdown
