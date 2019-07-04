import React, { Component, Fragment } from 'react'
import axios from 'axios'

export default class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldColor: '',
            oldQuality: '',
            oldAmount: undefined,
            color: '',
            quality: '',
            amount: undefined
        }
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeQuality = this.onChangeQuality.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        axios
            .get('http://localhost:4000/jars/edit/' + this.props.match.params.id)
            .then(
                (result) => {
                    this.setPrevState(result.data);
                }).catch((error) => {
                    console.log(error);
                })
    }

    setPrevState(input) {
        this.setState({
            oldColor: input.color,
            oldQuality: input.quality,
            oldAmount: input.amount,
            color:'Green',
            quality:'Fine',
            amount:undefined
        })
    }

    onChangeColor(e) {
        console.log(`from color :::${e.target.value}`);
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
                    <h1>Edit your jar</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="color">Edit color</label>
                            <select className="form-control" id="color" onChange={this.onChangeColor}>
                                <option>Green</option>
                                <option>Black</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="quality">Edit quality</label>
                            <select className="form-control" id="quality" onChange={this.onChangeQuality}>
                                <option>Fine</option>
                                <option>Extra fine</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amout">Edit Amount</label>
                            <input type='text' className="form-control" id="amount"                                onChange={this.onChangeAmount} />
                        </div>
                    </form>
                </div>
                <form >
                    <div className="jumbotron mx-auto text-center bg-light" style={{ width: 400 }}>
                        <h2 className="display-4">Your jar contained</h2>
                        <hr className="my-4" />
                        <div>Color: {this.state.oldColor}</div>
                        <div>Quality: {this.state.oldQuality}</div>
                        <div>Amount: {this.state.oldAmount}</div>
                    </div>
                </form>
                <form onSubmit={this.onSubmit}>
                    <div className="jumbotron mx-auto text-center bg-warning" style={{ width: 400 }}>
                        <h2 className="display-4">Your edited jar contains</h2>
                        <hr className="my-4" />
                        <div>Color: {this.state.color}</div>
                        <div>Quality: {this.state.quality}</div>
                        <div>Amount: {this.state.amount}</div>
                        <div>
                            <input type="submit" className="btn btn-dark mb-2" value='Edit jar' />
                        </div>
                        <div className='mx-auto text-center bg-warning text-light' style={{ width: 200 }}>{this.state.message}</div>
                    </div>
                </form>
            </Fragment>)
    }
}
