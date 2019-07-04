import React, { Component, Fragment } from 'react'
import axios from 'axios'

import SingleJar from './jar'
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allJarsData: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/olives')
            .then(
                (result) => {
                    this.setState({ allJarsData: result.data })
                }).catch((error) => {
                    console.log(error);
                })

    }

    renderJars() {
        return (
                    <ul className="text-center">
                    <h2 className='mx-auto text-center'>My Olive jars</h2>

                        {this.state.allJarsData.map(jar => <SingleJar data={jar} />)}
                    </ul>
        )
    }
    render() {

        return (
            <Fragment>
                {this.renderJars()}
            </Fragment>
        )
    }
}
