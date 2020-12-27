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
			items: props.items,
			nothingFoundTitle: 'Не найдено'
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
   		const searchItems = this.state.items.filter(item => item.title.includes(this.props.subString.toUpperCase()) || item.text.toLowerCase().includes(this.props.subString.toLowerCase()));
      return (
         <div className={styles.optionsAreaWrapper}>
					 {searchItems.map(item => {
					 		return  (
					 				<div
											key={item.id}
											onClick={() => this.props.selectOption(this.props.items, item.id)}
									>
										<div
												className={styles.optionItem}
												style={this.selectItem(item.id)}
										>
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
					 {!searchItems.length ? (
							<div>
								<div
										className={styles.optionItem}
								>
									<div className={styles.optionItem__nodata}>
										{this.state.nothingFoundTitle}
									</div>
								</div>
							</div>
					 ) : null}
         </div>
      )
   }
}

export default OptionItems
