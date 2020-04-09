import { combineReducers } from 'redux';
import counter from './counter';

export const rootReducer = combineReducers({ counter: counter });
export type RootState = ReturnType<typeof rootReducer>
