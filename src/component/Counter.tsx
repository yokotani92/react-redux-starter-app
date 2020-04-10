import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './../redux/actions';
import { RootState } from './../redux/reducers/index';

const Counter: React.FC = () => {
    const count = useSelector<RootState, number>(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispatch(increment())} > INCREMENT</button>
                <button onClick={() => dispatch(decrement())} >DECREMENT</button>
            </div>
        </div>
    );
};

export default Counter;