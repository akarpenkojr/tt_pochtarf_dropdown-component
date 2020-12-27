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
		this.onFocusInputValue = this.onFocusInputValue.bind(this);
		this.onBlurInputValue = this.onBlurInputValue.bind(this);
	}

	searchSubString(event) {
		this.setState({subString: event.target.value});
	}

	cleanInput() {
		this.input.current.value = this.input.current.value === 'Все подклассы' ? '' : this.input.current.value;
	}

	onFocusInputValue() {
		this.input.current.value = this.input.current.value === 'Все подклассы' ? '' : this.input.current.value;
	};

	onBlurInputValue() {
		this.input.current.value = this.input.current.value
				? this.input.current.value
				: this.props.selectedOptionItems.length ? '' : 'Все подклассы'
	};

	render() {
		const inputSize = this.props.selectedOptionItems.length < 5 ? 22 - this.props.selectedOptionItems.length * 5 : 2;
      return (
         <div className={styles.inputWrapper}>
					 <input
							 type="text"
							 ref={this.input}
							 onChange={(e) => {
							 	this.searchSubString(e);
							 	this.props.searchSubString(e);
							 }}
							 onFocus={this.onFocusInputValue}
							 onBlur={this.onBlurInputValue}
							 defaultValue={this.state.value}
							 size={inputSize}/>
         </div>
      )
   }
}

export default SearchInput
