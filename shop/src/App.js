import React, {Component} from 'react';
import { ToDoBanner } from './ToDoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
import { VisibilityControl } from './visibilityControl';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "Adam", 
      toDoItems: [
      {action: "buy flowers", done: false},
      {action: "take shoes", done: false},
      {action: "buy tickets", done: true},
      {action: "call mom", done: false}],
      showCompleted: true
    }
  }
  changeName = () => {
    this.setState({
      name: this.state.name === "Adam" ? "Jakub" : "Adam"
    })
  }
  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value
    })
  }

  createNewToDo = (task) => {
    if(!this.state.toDoItems.find(item => item.action === task)) {
      this.setState({
        toDoItems: [...this.state.toDoItems, {
          action: task, done: false 
        }],
      })
    }
  }

  toggleToDo = (todo) => this.setState({
    toDoItems:
      this.state.toDoItems.map(item => item.action === todo.action
        ? {...item.action, done: !item.done} : item)
  })
  todoTableRows = (doneValue) => this.state.toDoItems.filter(item => item.done === doneValue).map(item => 
      <TodoRow key={item.action} item={item} callback={this.toggleToDo}></TodoRow>
    )

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null ? JSON.parse(data) : {
      name: "Adam",
      toDoItems: [
        {action: "buy flowers", done: false},
        {action: "take shoes", done: false},
        {action: "buy tickets", done: true},
        {action: "call mom", done: false}
      ],
      showCompleted: true
    })
  }
  render (){
    return (
      <div className="App">
           <ToDoBanner name={this.state.name} tasks = {this.state.toDoItems}></ToDoBanner>
             <div className="container-fluid">
                <TodoCreator callback={this.createNewToDo}>

                </TodoCreator>

             </div>
             <button className="btn btn-primary mt-1" onClick = {this.createNewToDo}>
               Dodaj
             </button>
             <table className="table table-striped table-bordered">
               <thead>
                  <tr><th>Opis</th><th>Wykonane</th></tr>
               </thead>
               <tbody>{this.todoTableRows(false)}</tbody>
             </table>
             <div className="bg-secondary text-white text-center p-2">
               <VisibilityControl description="zadanie wykonane" isChecked={this.state.showCompleted} callback={(checked) => this.setState({showCompleted: checked})}>

               </VisibilityControl>
             </div>

             {this.state.showCompleted && 
              <table className="table table-striped table-bordered">
                <thead>
                  <tr><th>Opis</th><th>Wykonane</th></tr>
                </thead>
                <tbody>
                  {this.todoTableRows(true)}
                </tbody>

              </table>
             }
      </div>
    )
  }
  
}
