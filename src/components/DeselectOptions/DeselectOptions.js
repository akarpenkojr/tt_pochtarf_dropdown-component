//imports
import React, {Component} from 'react'

// import components
import styles from './DeselectOptions.module.scss'

// import styles

class DeselectOptions extends Component {
   render() {
      return (
         <div className={styles.deselectIcon}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12133 7.18196C6.41422 7.47485 6.8891 7.47485 7.18199 7.18196C7.47488 6.88907 7.47488 6.41419 7.18199 6.1213L5.06068 3.99999L7.18199 1.87868C7.47488 1.58578 7.47488 1.11091 7.18199 0.818015C6.8891 0.525122 6.41422 0.525122 6.12133 0.818015L4.00002 2.93933L1.87869 0.817998C1.5858 0.525105 1.11092 0.525104 0.818029 0.817997C0.525136 1.11089 0.525136 1.58576 0.818029 1.87866L2.93936 3.99999L0.818028 6.12132C0.525135 6.41421 0.525135 6.88908 0.818028 7.18198C1.11092 7.47487 1.5858 7.47487 1.87869 7.18198L4.00002 5.06065L6.12133 7.18196Z" fill="#ACACAC"/>
            </svg>
         </div>
      )
   }
}

export default DeselectOptions

