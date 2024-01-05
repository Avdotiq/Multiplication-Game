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
