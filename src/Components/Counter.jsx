import { useState } from "react";
import {PropTypes} from 'prop-types'


export default function Counter(){

    const [count, setCount] = useState(0)

    function incrementParentFunction(by){
        setCount(count+by)
    }

    function decrementParentFunction(by){
        setCount(count-by)
    }

    return (
        <>
            <span className="counter">{count}</span>
            <CounterButton by={1} increment={incrementParentFunction} decrement={decrementParentFunction}/>
            <CounterButton by={2} increment={incrementParentFunction} decrement={decrementParentFunction}/>
            <CounterButton by={5} increment={incrementParentFunction} decrement={decrementParentFunction}/>
        </>
    )
}

function CounterButton({by, increment, decrement}){

    const [count, setCount] = useState(0);

    function incrementFunction(){
        setCount(count+ by)
        increment(by)
    }
    function decrementFunction(){
        setCount(count - by)
        decrement(by)
    }

    return(
        <div>
            <span className="">{count}</span>
            <div className="">
                <button className="counterButton" onClick={incrementFunction}>+{by}</button>
                <button className="counterButton" onClick={decrementFunction}>-{by}</button>
            </div>
        </div>
    )

}

CounterButton.propTypes = {
    by:PropTypes.number
}

CounterButton.defaultProps = {
    by:1
}