import classNames from 'classnames';
import cx from 'classnames';
import { Component } from 'react';

export default class TodoList extends Component {
    constructor (props){
        super(props);
        this.state ={
            items: [],
            item: {
                name: '',
                isDone: false,
                id: 0,
            },
            count: 0,
        }
    }
    handleChange = (e) => {
        
        this.setState({
            item: {
                name: e.target.value,
                isDone: false,
                id:0,
            }
        })
    }
    handleAddList = () => {
        if(this.state.item?.name){
            let item = this.state.item;
            item.id = this.state.items.length;
            console.log('item', item);
            this.setState({
                items: [...this.state.items, item],
                count: this.state.count + 1,
                item: {name: '',
                isDone: false,
                id: 0,}
            }, () => {
                console.log('items', this.state.items);
            })
    }
    }
    toggleTask = (index) => {
        console.log(index);
        let toggleItems = [...this.state.items];
        toggleItems.map((x,i) => {
            if(i === index) x.isDone = !x.isDone
        })
        let count = toggleItems.filter(x => x.isDone === false).length
        this.setState({
            items: toggleItems,
            count: count,
        })
    }
    render() {
        return (
            <>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    <div>
                    <input type = "text" name='list_item'value={this.state.item.name} onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleAddList}>Add</button>
                    <p>{this.state.count} remaining out of {this.state.items.length} tasks</p>
                    </div>
                    <ul>
                        {this.state.items.map((item, index) => {
                            return <li className={item.isDone ? 'is-done': ''} key={index} onClick={() => this.toggleTask(index)}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </>
        );
    }
}