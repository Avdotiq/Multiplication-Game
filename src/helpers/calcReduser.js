export const compareEqual = (equal, result) => {
    if (equal === result) {
        return true;
    } else {
        return false;
    }
};

export const createProblem = (multiplication) => {
    let number = Math.floor(Math.random() * (10 - 1)) + 1;
    return {
        multiplication: multiplication,
        equation: `${number} * ${multiplication}`,
        equal: number * multiplication,
    };
};

export const checkStatus = (result, currentTask, tasks) => {
    const checkedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (i === currentTask) {
            checkedTasks.push({ result: result });
        } else if (i > currentTask) {
            checkedTasks.push({ result: null });
        } else {
            checkedTasks.push({ result: true });
        }
    }

    return checkedTasks;
};
