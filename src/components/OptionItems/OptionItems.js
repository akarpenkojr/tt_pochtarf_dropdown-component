//imports
import React, {Component} from 'react'

// import components
import styles from './OptionItems.module.scss'

// import styles

class OptionItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items
		};

	}

   render() {
		console.log('___---_-_!!!_-_---___', this.props);
      return (
         <div className={styles.optionsAreaWrapper} >
					 {this.state.items.map(item => {
					 		return (
					 				<div
											key={item.id}
											onClick={() => this.props.selectOption(this.props.items, item.id)}
									>
										<div className={styles.optionItem}>
											<div className={styles.optionItem__checkbox}>

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
