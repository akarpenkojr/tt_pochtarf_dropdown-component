//imports
import React, {Component} from 'react'

// import components
import DeselectSelectedOptions from './deselect.svg';
import styles from './DeselectOptions.module.scss'

// import styles

class DeselectOptions extends Component {
   render() {
      return (
         <div className={styles.deselectIcon}>
					 <img src={DeselectSelectedOptions} alt="deselect all options"/>
         </div>
      )
   }
}

export default DeselectOptions

