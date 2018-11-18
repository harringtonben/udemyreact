import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

//only render the subtitle and p tag around subtitle if subtitle exists -- logical &&
// render new p tag -- if options.length > 0 "here are your options" "no options" --ternary

const app = {
    title: 'Indecision App',
    subtitle: 'this is an app about indecision, so decide',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderDom();
    }
};

const removeAllOptions = () => {
  app.options = [];
  renderDom();
};

const appRoot = document.getElementById('root');

const numbers = [55, 101, 1000];

const renderDom = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderDom();
//export default template;
