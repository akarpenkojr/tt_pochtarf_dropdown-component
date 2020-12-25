//imports
import React, {Component} from 'react'

// import components
import styles from './SearchInput.module.scss'

// import styles


class SearchInput extends Component {
constructor(props) {
		super(props);
		this.state = {
		};
	}

   render() {
      return (
         <div className={styles.inputWrapper}>
					 <input type="text" onChange={(e) => this.props.searchSubString(e)} />
         </div>
      )
   }
}

export default SearchInput
