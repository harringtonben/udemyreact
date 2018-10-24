import React, { Component } from 'react';
import './App.css';
import * as ReactDOM from "react-dom";

//only render the subtitle and p tag around subtitle if subtitle exists -- logical &&
// render new p tag -- if options.length > 0 "here are your options" "no options" --ternary


let app = {
    title: 'Indecision App',
    subtitle: 'this is an app about indecision, so decide',
    options: ['One', 'Two']
};

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
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

const getLocation = (userLocation) => {
  return userLocation ? <p>Location: {userLocation}</p> : undefined;
};

let template2 = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, document.getElementById('root'));

//export default template;
