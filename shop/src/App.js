import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h4 className="bg-primary text-white text-center p-2">
//         Lista zadań
//       </h4>
//     </div>
//   );
// }

// export default App;

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
      newItemText: "",
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

  createNewToDo = () => {
    if(!this.state.toDoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        toDoItems: [...this.state.toDoItems, {
          action: this.state.newItemText, done: false 
        }],
        newItemText: ""
      })
    }
  }
  render (){
    return (
      <div className="App">
             <h4 className="bg-primary text-white text-center p-2">
               Lista zadań użytkownika {this.state.name}
               (Liczba zdań: {this.state.toDoItems.filter(t => !t.done).length})
             </h4>
             <div className="container-fluid">
               <div className="my-1">
                 <input className="form-control"
                      value={this.state.newItemText}
                      onChange={this.updateNewTextValue}
                 />

               </div>

             </div>
             <button className="btn btn-primary mt-1" onClick = {this.createNewToDo}>
               Dodaj
             </button>
      </div>
    )
  }
  
}
