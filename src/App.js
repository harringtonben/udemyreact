import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('root');

let detailsVisibility = false;

const changeDetailsVisibility = () => {
    (detailsVisibility === true) ? detailsVisibility = false : detailsVisibility = true;
    renderDom();
};

const renderDom = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button hidden={detailsVisibility === true} onClick={changeDetailsVisibility}>Show details</button>
            <button hidden={detailsVisibility === false} onClick={changeDetailsVisibility}>Hide details</button>
            <p hidden={detailsVisibility === false}>This is the super secret stuff that not everyone is allowed to see!!</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderDom();
//export default template;
