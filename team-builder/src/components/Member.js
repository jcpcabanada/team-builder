import React from 'react'

export default function Member(props) {
    const {details} = props

    if(!details) {
        return <h3>Working Hard on grabbing the deets on your member...</h3>
    }

    return (
        <div className='Member Container'>
            <h2>{details.fullname}</h2>
            <p>Email: {details.email}</p>
            <p>Position: {details.position}</p>
        </div>
    )





}