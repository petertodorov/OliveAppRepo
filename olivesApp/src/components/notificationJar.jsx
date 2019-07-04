import React, { Component } from 'react'
import axios from 'axios'

export default class NotificationJar extends Component {
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            color: undefined,
            quality: undefined,
            amount: undefined,
            elementColor: 'bg-warning',
            elementQuality: 'bg-warning',
            elementAmount: 'bg-warning',
            colorMessage: undefined
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.removeButton = this.removeButton.bind(this);
    }

    removeButton(e) {
        let item = e.target;
        item.style.display = 'none'
    }

    onSubmit(e) {
        console.log('clicke');
        e.preventDefault();
        // if(document.getElementById('messageButton').style.display==='none'){
        //     document.getElementById('messageButton').style.display='show'
        //  }
        
        let jarInput = {
            color: this.state.color,
            quality: this.state.quality,
            amount: this.state.amount
        }
        axios
            .post('http://localhost:4000/jars/create', jarInput)
            .then(
                (result) => {
                    this.setState({
                        message: result.data.message,
                        colorMessage: 'bg-success'
                    });
                }).catch((error) => {
                    this.setState({
                        message: error.response.data,
                        colorMessage: 'bg-danger'
                    })
                })
        this.setState({
            color: undefined,
            quality: undefined,
            amount: undefined
        })
    }
    componentDidMount() {
        this.setState({
            color: undefined,
            quality: undefined,
            amount: undefined,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            if (this.props.data.color !== '') {
                this.setState({
                    elementColor: '',
                    color: this.props.data.color,
                })
            } else {
                this.setState({
                    color: undefined,
                    elementColor: 'bg-warning'
                })
            }
            if (this.props.data.quality !== '') {
                this.setState({
                    elementQuality: '',
                    quality: this.props.data.quality,
                })
            } else {
                this.setState({
                    quality: undefined,
                    elementQuality: 'bg-warning'
                })
            }

            if (this.props.data.amount !== '') {
                this.setState({
                    elementAmount: '',
                    amount: this.props.data.amount
                })
            } else {
                this.setState({
                    amount: undefined,
                    elementAmount: 'bg-warning'
                })
            }
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <div className="jumbotron mx-auto text-center" style={{ width: 700 }}>
                    <h2 className="display-4">Your jar will contain</h2>
                    <hr className="my-4" />
                    <div className={this.state.elementColor}>Color: {this.state.color}</div>
                    <div className={this.state.elementQuality}>Quality: {this.state.quality}</div>
                    <div className={this.state.elementAmount}>Amount: {this.state.amount}</div>
                    <div>
                        <input type="submit" className="btn btn-dark mb-2" value='Make jar' />
                    </div>
                    <button id='messageButton' className={`btn mb-2 mx-auto text-center ${this.state.colorMessage} text-light`}
                        style={{ width: 200 }} onClick={this.removeButton}>{this.state.message}
                    </button>
                </div>
            </form>
        )
    }
}