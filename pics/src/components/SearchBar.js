// Import the React and ReactDOM libraries
import React from 'react';

// Create a react component
class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label> Input Search </label>
						<input 
							type="text" 
							onClick={this.onInputClick} 
							value={this.state.term}
							onChange={  (e) => this.setState({ term: e.target.value }) } />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;