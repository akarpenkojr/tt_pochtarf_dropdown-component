//imports
import React, {Component} from 'react'

// import components
import styles from './SearchInput.module.scss'

// import styles


class SearchInput extends Component {
constructor(props) {
		super(props);
		this.state = {
			value: 'Все подклассы',
			subString: ''
		};

		this.input = React.createRef();

		this.cleanInput = this.cleanInput.bind(this);
	}

	searchSubString(event) {
		this.setState({subString: event.target.value});
	}

	cleanInput() {
		this.input.current.value = this.input.current.value === 'Все подклассы' ? '' : this.input.current.value;
	}

   render() {
      return (
         <div className={styles.inputWrapper}>
					 <input
							 type="text"
							 ref={this.input}
							 onChange={(e) => {
							 	this.searchSubString(e);
							 	this.props.searchSubString(e);
							 }}
							 onBlur={()=>{
							 	console.log('___---_-_!!!_-_---___', this.props.searchSubString);
								 this.input.current.value = !this.state.subString && !this.props.selectedOptionItems.length ? 'Все подклассы' : this.input.current.value
							 }}
							 onFocus={this.cleanInput} defaultValue={ this.state.value }/>
         </div>
      )
   }
}

export default SearchInput
