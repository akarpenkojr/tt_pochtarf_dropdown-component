//imports
import React, {Component} from 'react'

// import components
import styles from './SelectedOptionItems.module.scss'

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
					 {this.props.selected.title}
         </div>
      )
   }
}

export default SelectedOptionItems

