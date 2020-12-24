/**
 Created on 23.12.2020
 */

//imports
import React, {Component} from 'react'

// import components

// import styles
import styles from './Dropdown.module.scss'

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

   render() {
      return (
         <div className={styles.dropDownComponent}>
					 <div className={styles.dropDownComponent__title}>
						 Все подклассы
					 </div>
         </div>
      )
   }
}

export default Dropdown
