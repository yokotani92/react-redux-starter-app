import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './../redux/actions';
import { RootState } from './../redux/reducers/index';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'center',
        },
        button: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const Counter: React.FC = () => {
    const count = useSelector<RootState, number>(state => state.counter.count);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>{count}</h1>
            <div className={classes.button}>
                <Button variant="outlined" color="primary" onClick={() => dispatch(increment())} >INCREMENT</Button>
                <Button variant="outlined" color="secondary" onClick={() => dispatch(decrement())} >DECREMENT</Button>
            </div>
        </div>
    );
};

export default Counter;