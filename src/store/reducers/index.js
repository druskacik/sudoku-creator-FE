import { combineReducers } from 'redux';

const sudokus = (state=[], action) => {
    if (action.type === 'LOAD_SUDOKUS') {
        return action.data ? action.data.sudokus : [];
    }
    return state;
}

export default combineReducers({
    sudokus,
})