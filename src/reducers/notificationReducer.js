import * as actions from '../actions/types';

const initialState = {
    notifications: [],
    notification: {}
};

export default function foo(state = initialState, action) {
    switch (action.type) {
        case actions.READ_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            };
        case actions.GENERATE_NOTIFICATION:
            return {
                ...state,
                notification: action.payload,
                notifications: [...state.notifications, action.payload]
            };
        default:
            return state;
    }
}
