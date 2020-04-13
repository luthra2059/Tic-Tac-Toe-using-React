import React from 'react'


function Square(props){
    

    return (
        <button className="btn btn-outline-warning" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square; 