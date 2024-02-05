import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../app/features/counter/counterSlice";
import { useCallback } from "react";

const Counter = () => {
    // Read the Data
    const counter = useSelector((state) => state.counter)

    const dispatch = useDispatch()
    const onIncreament = useCallback(() => dispatch(increment()), [dispatch])
    const onDecreament = useCallback(() => dispatch(decrement()), [dispatch])
    return (
        <main>
            <h1>{counter.value}</h1>
            <div>
                <button type="button" onClick={onIncreament}>+</button>
                <button type="button" onClick={onDecreament}>-</button>
            </div>
        </main>
    );
}

export default Counter;