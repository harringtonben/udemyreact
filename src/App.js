import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('root');

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = ["Thing1", "Thing2", "Thing4"];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
          <div>
              Option: {this.props.optionText}
          </div>
        );
    }
}

const renderDom = () => {
    ReactDOM.render(<IndecisionApp />, appRoot);
};

renderDom();
//export default template;
