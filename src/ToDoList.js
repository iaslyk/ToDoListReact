import React, {Component} from 'react';
import ToDoItems from "./ToDoItems";
import "./ToDoList.css"


class ToDoList extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e){
		if (this._inputElement.value !== "") {
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
			this._inputElement.value = "";
		}

		console.log(this.state.items);

		e.preventDefault();
	}

	deleteItem(key) {
		var filledItems = this.state.items.filter(function (item) {
			return (item.key !== key);
		});

		this.setState({
			items: filledItems
		});
	}

	render () {
		return (
			<div className="ToDoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="enter task">
						</input>
						<button type="submit">Add Task</button>
					</form>
				</div>
				<ToDoItems entries={this.state.items} delete={this.deleteItem}/>
			</div>
			);
	}
}

export default ToDoList;