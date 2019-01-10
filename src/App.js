import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('root');

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToogleVisibility () {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToogleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <p>This is the super secret stuff that not everyone is allowed to see!!</p>
                )}

            </div>
        )
    }
}

//Visibility toggle - render, constructor, handleToggleVisibility
// visibility - false


ReactDOM.render(<Visibility />, appRoot);



//export default template;
