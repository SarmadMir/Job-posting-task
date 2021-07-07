import * as actions from './types';

export const readNotifications = () => dispatch => {
    dispatch({
        type: actions.READ_NOTIFICATIONS,
        payload: []
    })
};

export const generateNotification = data => dispatch => {
    dispatch({
        type: actions.GENERATE_NOTIFICATION,
        payload: data
    })
};
