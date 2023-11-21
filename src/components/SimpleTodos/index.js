import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialDodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isModifying: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isModifying: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isModifying: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isModifying: false,
  },
  {id: 5, title: 'Order fruits on Big Basket', isModifying: false},

  {
    id: 6,
    title: 'Fix the production issue',
    isModifying: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isModifying: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isModifying: false,
  },
]

class SimpleTodos extends Component {
  state = {
    TodoList: initialDodosList,
    input: ' ',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickAddBtn = () => {
    const {TodoList, input} = this.state
    const newTodo = {
      id: TodoList.length + 1,
      title: input,
      isModifying: false,
    }
    this.setState({TodoList: [...TodoList, newTodo], input: ''})
  }

  deleteTodo = id => {
    const {TodoList} = this.state
    const filterTodos = TodoList.filter(each => each.id !== id)
    this.setState({TodoList: filterTodos})
  }

  editTodo = id => {
    const {TodoList} = this.state
    this.setState(prevState => ({
      TodoList: prevState.TodoList.map(eachTodo => {
        if (eachTodo.id === id) {
          eachTodo.isModifying = !prevState.TodoList.eachTodo.isModifying
        }
        return eachTodo
      }),
    }))
  }

  render() {
    const {TodoList, input} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Simple Todos</h1>
          <div className="input-container">
            <label htmlFor="new-to-do">New Todo</label>
            <input id="new-to-do" value={input} onChange={this.onChangeInput} />
            <button type="button" onClick={this.onClickAddBtn}>
              Add
            </button>
          </div>

          <ul className="list-container">
            {TodoList.map(each => (
              <TodoItem
                todoDetails={each}
                key={each.id}
                deleteTodo={this.deleteTodo}
                editTodo={this.editTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
