import { createProblem } from "../../helpers/calculation";

const initialState = {
    level: 0,
    problem: null,
    currentTask: 0,
};

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PROBLEM":
            return {
                ...state,
                problem: createProblem(action.data.multiplication),
            };
        case "UPDATE_CURRENT_TASK":
            return {
                ...state,
                currentTask: state.currentTask + 1,
            };
        case "RESET_STORE":
            return {
                ...state,
                problem: null,
                currentTask: 0,
            };
        default:
            return state;
    }
};
