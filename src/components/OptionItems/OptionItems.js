//imports
import React, {Component} from 'react'

// import components
import styles from './OptionItems.module.scss'
import checkboxArrow from './checkboxArrowIcon.svg'

// import styles

class OptionItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items
		};

	}

	selectItem = (id) => {
		let selectedOptionItemIndex = this.props.selectedOptionItems.map(item => {
			return item[0].id;
		}).indexOf(id);
		return selectedOptionItemIndex !== -1 ? ({
				backgroundColor: 'rgba(245, 246, 250, 1)'
		}) : null;
	};

	selectCheckbox = (id) => {
		let selectedOptionItemIndex = this.props.selectedOptionItems.map(item => {
			return item[0].id;
		}).indexOf(id);
		return selectedOptionItemIndex !== -1 ? ({
			borderColor: 'transparent',
			backgroundColor: 'rgba(73, 92, 100, 1)',
			backgroundImage: `url(${checkboxArrow})`,
		}) : null;
	};
   render() {
      return (
         <div className={styles.optionsAreaWrapper}>
					 {this.state.items.map(item => {
					 		return (
					 				<div
											key={item.id}
											onClick={() => this.props.selectOption(this.props.items, item.id)}
									>
										<div className={styles.optionItem} style={this.selectItem(item.id)}>
											<div className={styles.optionItem__checkbox} style={this.selectCheckbox(item.id)}>

											</div>
											<div className={styles.optionItem__data}>
												<div className={styles.optionItem__title}>
													{ item.title }
												</div>
												<div className={styles.optionItem__text}>
													{ item.text }
												</div>
											</div>
										</div>
									</div>
							)
					 })}
         </div>
      )
   }
}

export default OptionItems
