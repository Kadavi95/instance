import React, {Component} from 'react';


export class VisibilityControl extends Component {
    render () {
        return (
            <>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" checked={this.props.isChecked} onChange={(e) => this.props.callback(e.target.checked)}/>
                <label className="form-check-label">
                    Pokaż {this.props.description}
                </label>
            </div>
            </>
        )
    }
}
