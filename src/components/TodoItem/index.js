import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  onDelete = () => {
    const {deleteTodo} = this.props
    const {todoDetails} = this.props
    const {id} = todoDetails

    deleteTodo(id)
  }

  onClickEdit = () => {
    const {todoDetails, editTodo} = this.props
    const {id} = todoDetails

    editTodo(id)
  }

  render() {
    const {todoDetails} = this.props

    const {id, title, isModifying} = todoDetails
    let btnContent

    if (isModifying === true) {
      btnContent = 'Save'
    } else {
      btnContent = 'Edit'
    }

    return (
      <li className="to-do-card-container">
        {isModifying && (
          <input type="text" value={title} onChange={this.onChangeInput} />
        )}
        {!isModifying && <p className="todo-title">{title}</p>}
        <button type="button" className="btn" onClick={this.onClickEdit}>
          {btnContent}
        </button>
        <button type="button" className="btn" onClick={this.onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
