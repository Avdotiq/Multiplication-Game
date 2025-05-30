import { createProblem } from '../../helpers/calculation';

export const updateProblem = (dispatch, value, type = "multiplication") => {
    dispatch({
        type: "UPDATE_PROBLEM",
        data: {
            value,
            type,
        },
    });
};

export const updateCurrentTask = (dispatch) => {
    dispatch({
        type: "UPDATE_CURRENT_TASK",
    });
};

export const resetStore = (dispatch) => {
    dispatch({
        type: "RESET_STORE",
    });
};
