import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import First from './components/First';
import Second from './components/Second';
import axios from 'axios';

const Main = 
<div>
    <First/>
    <Second/>
</div>

if (document.getElementById('example')) {
    ReactDOM.render(Main, document.getElementById('example'));
}
