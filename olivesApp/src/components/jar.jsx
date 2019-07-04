import React, { Component } from 'react'

const singleJar = function (props) {
    const { _id, color, quality, amount } = props.data
    return (
        
        <li key = {_id} className='d-lg-inline-block d-md-inline-block m-2'>
        
        <div className="card text-center mx-auto " style={{width:300,height:400}}>
            <div className="card-body">
            <img className="card-img-top" src='/images/olive-jar.png' alt="olive" style={{width:150,height:150}} />

                <h5 className="card-title">Olive jar</h5>
                <p className="card-text">Color: {color}</p>
                <p className="card-text">Quality: {quality}</p>
                <p className="card-text">Amount: {amount} grams</p>
                <a href={`/edit/${_id}`} className="btn btn-light">edit</a>
            </div>
        </div>
        </li>
        
    )
}
export default singleJar