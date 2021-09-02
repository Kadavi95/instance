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

  render (){
    return (
      <div className="App">
             <h4 className="bg-primary text-white text-center p-2">
               Lista zadań użytkownika {this.state.name}
             </h4>
             <button className="btn btn-primary m-2" onClick = {this.changeName}>
               Zmień
             </button>
      </div>
    )
  }
  
}
