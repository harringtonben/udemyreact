import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

//JSX - Javascript XML
var template = (
    <div>
        <h1>This is jsx from app.js</h1>
        <p>this is some info</p>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
        </ol>
    </div>
);

var template2 = (
    <div>
      <h1>Ben Harrington</h1>
      <p>age: 28</p>
      <p>location: Nashville</p>
    </div>
);

// Create a template 2 variable JSX expression
// div
//  h1 -> Ben Harrington
//  p -> age: 28
//  p -> location: Nashville
//  Render template 2 instead of template

ReactDOM.render(template2, document.getElementById('root'));

//export default template;
