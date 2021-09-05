import React, { Component} from 'react';


export class ToDoBanner extends Component {
    render() { 
        return (
            <h4>
                <h4 className="bg-primary text-white text-center p-2">
                    Lista zadań użytkownika {this.props.name}
                    (Liczba zadań: {this.props.toDoItems.filter(t => !t.done).length})
                </h4>
            </h4>

        )
       
    }
}
 
