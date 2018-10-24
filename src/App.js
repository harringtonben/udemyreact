import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

let app = {
    title: 'Indecision App',
    subtitle: 'this is an app about indecision, so decide'
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
        </ol>
    </div>
);

let user = {
    name: 'Ben Harrington',
    age: 28,
    location: 'Nashville,TN'
};

let template2 = (
    <div>
      <h1>{user.name}</h1>
      <p>age: {user.age}</p>
      <p>location: {user.location}</p>
    </div>
);

ReactDOM.render(template, document.getElementById('root'));

//export default template;
