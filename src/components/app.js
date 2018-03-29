import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
import listData from '../data/todo_items';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			list: listData
		}
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(item){
		this.setState({
			list:[item, ...this.state.list]
		});
	}

	deleteItem(index){
		// const temp = this.state.list.slice();
		const newList = [...this.state.list];
		// temp.splice(temp.indexOf(item), 1);
	 	newList.splice(index, 1);
		this.setState({
			list: newList
		});
	}	

 	render(){
 		return (
 			<div className="container">
		        <h1 className='center'>To Do List</h1>
		        <AddForm add={this.addItem.bind(this)}/>
		        <List list={this.state.list} delete={this.deleteItem}/>
		    </div>
 		)
    }
};

export default App;
