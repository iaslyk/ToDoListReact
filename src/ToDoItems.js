import React, { Component } from "react";
import FlipMove from "react-flip-move";

class ToDoItems extends Component {
	constructor(props) {
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}
	delete(key){
		this.props.delete(key);
	}
	createTasks(item) {
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}

render() {
	var ToDoEntries = this.props.entries;
	var listItems = ToDoEntries.map(this.createTasks);

	return (
		<ul className="theList">
			<FlipMove duration={333} easing="ease-out">
				{listItems}
			</FlipMove>
			
		</ul>
		);
}
};

export default ToDoItems;
