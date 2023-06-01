import { Component } from 'react';
import checkIcon from './img/check-icon.jpg';

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            groceryList: [],
        }
    }

    onChangeEvent(event) {
        this.setState({
            userInput: event,
        });
    }
    addItem(input) {
        if (input === '') {
            alert('Please enter an item!');
        } else {
            let groceries = this.state.groceryList;
            groceries.push(input);

            this.setState({
                groceryList: groceries, 
                userInput: '',
            });
        }
    }
    deleteAllItems() {
        let groceries = this.state.groceryList;
        groceries.length = 0;

        this.setState({
            groceryList: groceries,
        });
    }
    crossOutItem(event) {
        const listItem = event.target;
        listItem.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <form className='form' onSubmit={this.onFormSubmit}>
                <input 
                    type='text' 
                    placeholder='What would you like to buy today?' 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}
                />
                <button className='add btn' onClick={() => this.addItem(this.state.userInput)}>Add</button>
                <button className='delete btn' onClick={() => this.deleteAllItems()}>Delete</button>
                <ul>
                    {this.state.groceryList.map((input, index) => (
                        <li onClick={this.crossOutItem} key={index}>
                            <img src={checkIcon} alt='Check icon' width='24px'/>
                            {input}
                        </li>
                    ))}
                </ul>
            </form>
        )
    }
}
