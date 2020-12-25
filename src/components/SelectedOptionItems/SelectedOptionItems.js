//imports
import React, {Component} from 'react'

// import components
import styles from './SelectedOptionItems.module.scss'
import DeselectOptions from "../DeselectOptions";


// import styles


class SelectedOptionItems extends Component {
constructor(props) {
		super(props);
		this.state = {

		};
	}

   render() {
      return (
         <div className={styles.selectedOptionItem} onClick={() => this.props.deselectOptionItem(this.props.selected.id)}>
					 <div className={styles.selectedOptionItem__title}>
						 {this.props.selected.title}
					 </div>
					 <div className={styles.selectedOptionItem__deselectIcon}>
						 <DeselectOptions />
					 </div>
         </div>
      )
   }
}

export default SelectedOptionItems

