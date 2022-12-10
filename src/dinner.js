import React from 'react';

function Dinner(props){
    return(
        <div> <h1>Today we are serving {props.dishname} and in Sweet {props.sweet}</h1>
        </div>
    )
}

export default Dinner;