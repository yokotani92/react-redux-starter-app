import { INCREMENT, DECREMENT, CounterActionTypes } from './../actionTypes';

const initialState = {
    count: 0,
}

export default function (state = initialState, action: CounterActionTypes) {
    switch (action.type) {
        case INCREMENT: {
            return {
                count: ++state.count,
            };
        }
        case DECREMENT: {
            return {
                count: --state.count,
            };
        }
        default:
            return state;
    }
}