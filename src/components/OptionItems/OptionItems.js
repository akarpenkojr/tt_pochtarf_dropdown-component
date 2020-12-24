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
      return (
         <div className={styles.optionsAreaWrapper} >
					 {this.state.items.map(item => {
					 		return (
					 				<div key={item.id}>
										{ item.title }
									</div>
							)
					 })}
         </div>
      )
   }
}

export default OptionItems
