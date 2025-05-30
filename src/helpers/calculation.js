export const compareEqual = (equal, result) => {
    if (equal === result) {
        return true;
    } else {
        return false;
    }
};

let lastProblem = null;

export const createProblem = (multiplication) => {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * 9) + 1;
    } while (
        lastProblem &&
        lastProblem.multiplication === multiplication &&
        lastProblem.number === randomNumber
    );

    const newProblem = {
        multiplication,
        number: randomNumber,
        equation: `${randomNumber} × ${multiplication}`,
        equal: randomNumber * multiplication,
    };

    lastProblem = newProblem;

    return newProblem;
};

