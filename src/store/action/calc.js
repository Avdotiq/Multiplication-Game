export const updateProblem = (dispatch, multiplication, equation, equal) => {
    dispatch({
        type: "UPDATE_PROBLEM",
        data: {
            multiplication,
            equation,
            equal,
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
