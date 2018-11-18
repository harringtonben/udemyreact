import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

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

const makeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNumber];
    alert(selectedOption);
};

const renderDom = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
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