import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

const appRoot = document.getElementById('root');

let detailsVisibility = false;

const changeDetailsVisibility = () => {
    detailsVisibility = !detailsVisibility;
    renderDom();
};

const renderDom = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeDetailsVisibility}>{detailsVisibility ? 'Hide details' : 'Show details'}</button>
            {detailsVisibility && (
                <p>This is the super secret stuff that not everyone is allowed to see!!</p>
            )}

        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderDom();
//export default template;
