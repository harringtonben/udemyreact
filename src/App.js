import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('root');

class Counter extends React.Component {
    constructor(props) {
        super();
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          count: 0
        };
    }
    handleAddOne () {
        this.setState((prevState) => {
           return {
             count: prevState.count + 1
           };
        });
    }
    handleMinusOne () {
        this.setState((prevState) => {
           return {
               count: prevState.count - 1
           }
        });
    }
    handleReset () {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


// class IndecisionApp extends React.Component {
//     render() {
//         const title = "Indecision";
//         const subTitle = "Put your life in the hands of a computer";
//         const options = ["Thing1", "Thing2", "Thing4"];
//         return (
//             <div>
//                 <Header title={title} subTitle={subTitle}/>
//                 <Action />
//                 <Options options={options}/>
//                 <AddOption />
//             </div>
//         );
//     }
// }
//
// class Header extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }
//
// class Action extends React.Component {
//     handlePick() {
//         alert("Handle pick");
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handlePick}>What should I do?</button>
//             </div>
//         );
//     }
// }
//
// class Options extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     }
//     handleRemoveAll() {
//         console.log(this.props.options);
//         //alert("Handle remove all");
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleRemoveAll}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//             </div>
//         );
//     }
// }
//
// class AddOption extends React.Component {
//     onFormSubmit(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//
//         if (option) {
//             alert(option);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onFormSubmit}>
//                     <input type="text" name="option"/>
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// class Option extends React.Component {
//     render() {
//         return (
//           <div>
//               Option: {this.props.optionText}
//           </div>
//         );
//     }
// }

ReactDOM.render(<Counter />, appRoot);



//export default template;
