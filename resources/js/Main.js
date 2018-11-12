import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import Second from './components/Second';
import Homepage from './components/Homepage/Homepage';
import axios from 'axios';

const Main = 
<div>
    <Homepage/>
</div>

if (document.getElementById('example')) {
    ReactDOM.render(Main, document.getElementById('example'));
}
