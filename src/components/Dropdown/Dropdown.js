/**
 Created on 23.12.2020
 */

//imports
import React, {Component} from 'react'

// import components
import DeselectOptions from "../DeselectOptions";
// import DropdownTitle from "../DropdownTitle";
import OpenSelectionMenu from "../OpenSelectionMenu";
import OptionItems from "../OptionItems";
import SelectedOptionItems from "../SelectedOptionItems";
import SearchInput from "../SearchInput";

// import styles
import styles from './Dropdown.module.scss'

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOptions: [],
			isMenuOpen: false,
			subString: ''
		};

		this.switchMenu = this.switchMenu.bind(this);
		this.selectOption = this.selectOption.bind(this);
		this.deselectOptionItem = this.deselectOptionItem.bind(this);
		this.searchSubString = this.searchSubString.bind(this);
	}

	searchSubString(event) {
		this.setState({subString: event.target.value});
	}

	selectOption = (arr, id) => {
		let selected = this.state.selectedOptions.slice(0);
		let duplicatedItemIndex = selected.map(item => {
			return item[0].id;
		}).indexOf(id);

		if (duplicatedItemIndex === -1) {
			selected.push(arr.filter(item => {
				return item.id === id;
			}));
			this.setState({
				selectedOptions: selected
			});
		} else {
			this.deselectOptionItem(id)
		}
	};

	clearSelectedOptionItemList = () => {
		let selected = this.state.selectedOptions.slice(0, 0);
		this.setState({
			selectedOptions: selected
		});
	};

	deselectOptionItem = (id) => {
		let selected = this.state.selectedOptions.slice(0);
		let deselectedOptionItemIndex = selected.map(item => {
			return item[0].id;
		}).indexOf(id);
		selected.splice(deselectedOptionItemIndex,1);
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

		 const visibleOptionItems = this.state.selectedOptions.length > 4
				 ? [...this.state.selectedOptions].slice(0, 4)
				 : [...this.state.selectedOptions]
		 ;

      return (
         <div className={dropDownComponent} style={openComponent}>
					 <div className={styles.dropDownComponent__headerWrapper}>
						 <div className={styles.dropDownComponent__content}>
							 <div className={styles.dropDownComponent__selectedOptionItemsWrapper}>
								 {visibleOptionItems.map(item => {
									 return (
											 <SelectedOptionItems
													 deselectOptionItem={this.deselectOptionItem}
													 selected={item[0]}
													 key={item[0].id}
											 />
									 )
								 })}
								 {this.state.selectedOptions.length > 4 ? (
										 <div className={styles.dropDownComponent__extraItems}>...</div>
								 ) : null}
								 <SearchInput searchSubString={this.searchSubString} selectedOptionItems={this.state.selectedOptions} />
							 </div>
						 { this.state.selectedOptions.length ? (
								 <div className={styles.dropDownComponent__deselectIconWrapper} onClick={this.clearSelectedOptionItemList}>
									 <DeselectOptions />
								 </div>
						 ) : null
						 }
						 </div>
						 <OpenSelectionMenu switchMenu={this.switchMenu} isMenuOpen={this.state.isMenuOpen}/>
					 </div>
					 <OptionItems selectOption={this.selectOption}
												selectedOptionItems={this.state.selectedOptions}
												items={this.props.menuItems}
												subString={this.state.subString}
					 />
         </div>
      )
   }
}

export default Dropdown
