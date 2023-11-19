import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  onDelete = () => {
    const {deleteTodo} = this.props
    const {todoDetails} = this.props
    const {id} = todoDetails

    deleteTodo(id)
  }

  render() {
    const {todoDetails} = this.props
    const {title} = todoDetails
    return (
      <li className="to-do-card-container">
        <p className="todo-title">{title}</p>
        <button type="button" className="btn">
          Edit
        </button>
        <button type="button" className="btn" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
