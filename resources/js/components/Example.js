import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Example extends Component {

    constructor() {
      super();
      this.state=
      {
        blogs: []
      }
    }

    componentWillMount()
    {
        axios.get('/data').then(response => {
            const keys = Object.keys(response.data).map(x => response.data[x].value);
            console.log(keys);
           this.setState({
            blogs: keys,
           })
        }).catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Test</div>
                            <ul>
                                {this.state.blogs.map((x,key) => <li key={key}>{x}</li>)}
                            </ul>

                            <div className="card-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
