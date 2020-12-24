//imports
import React, {Component} from 'react'

// import components
import DeselectAllSelectedOptions from './deselect.svg';
import styles from './DeselectAllOptions.module.scss'

// import styles

class DeselectAllOptions extends Component {
   render() {
      return (
         <div className={styles.deselectIcon}>
					 <img src={DeselectAllSelectedOptions} alt="deselect all options"/>
         </div>
      )
   }
}

export default DeselectAllOptions

