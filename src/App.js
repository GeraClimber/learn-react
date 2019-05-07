import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        // Обновите состояние так, чтобы у элемента с заданным id свойство 
        // completed поменялось бы c false на true (или наоборот).
        // Помните о том, что предыдущую версию состоянию менять не следует.
        // Вместо этого нужно вернуть новую версию состояния, содержащую изменения.
        // (Подумайте о том, как для этого использовать метод массивов map.)
        console.log("Changed ", id);
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App