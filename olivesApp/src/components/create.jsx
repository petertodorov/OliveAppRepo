import React, { Component, Fragment } from 'react'
import axios from 'axios'
import NotificationJar from './notificationJar'

export default class Create extends Component {
    constructor(props) {
        super(props)
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeQuality = this.onChangeQuality.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.state = {
            color: '',
            quality: '',
            amount: '',
            message: '',
            error: ''
        }
    }
    onChangeColor(e) {
        this.setState({ color: e.target.value })
    }

    onChangeQuality(e) {
        this.setState({ quality: e.target.value })
    }

    onChangeAmount(e) {
        this.setState({ amount: e.target.value })
    }

    render() {
        return (
            <Fragment>
                <div style={{ width: 300 }} className='mx-auto text-center'>
                    <h1>Make olive jar</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="color">Choose color</label>
                            <select className="form-control" id="color" onChange={this.onChangeColor}>
                                <option></option>
                                <option>Green</option>
                                <option>Black</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quality">Choose quality</label>
                            <select className="form-control" id="quality" onChange={this.onChangeQuality}>
                               <option></option>
                                <option>Fine</option>
                                <option>Extra fine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amout">Amount</label>
                            <input type='text' className="form-control" id="amount" value={this.state.amount}
                                onChange={this.onChangeAmount} />
                        </div>
                    </form>
                </div>
                <NotificationJar data={this.state} />
            </Fragment>
        )
    }
}
