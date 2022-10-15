import { Component } from 'react';
import check from './check-icon.jpg';

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            groceryList: []
        }
    }
    onChangeEvent(event) {
        this.setState({userInput: event});
    }
    addItem(input) {
        if (input === '') {
            alert('Please enter an item!');
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput: ''});
        }
    }
    deleteItem() {
        let listArray = this.state.groceryList;
        listArray.length = 0;
        this.setState({groceryList: listArray});
    }
    crossedItem(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }
    render() {
        return(
            <form className='form' onSubmit={this.onFormSubmit}>
                <input type='text' 
                    placeholder='What would you like to buy today?' 
                    onChange={(event) => {this.onChangeEvent(event.target.value)}}
                    value={this.state.userInput}
                />
                <button className='add btn' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                <button className='delete btn' onClick={() => this.deleteItem()}>Delete</button>
                <ul>
                    {this.state.groceryList.map((item, index) => (<li onClick={this.crossedItem} key={index}><img src={check} alt='Check icon' width='24px'/>{item}</li>))}
                </ul>
            </form>
        )
    }
}