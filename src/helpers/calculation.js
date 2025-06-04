let lastProblem = null;

export const createProblem = (value, type = "multiplication") => {
    let a, b, equation, result;

    do {
        a = Math.floor(Math.random() * 9) + 1;
        b = value;

        if (type === "multiplication") {
            equation = `${a} × ${b}`;
            result = a * b;
        } else if (type === "division") {
            const answer = Math.floor(Math.random() * 9) + 1;
            result = answer * value;
            equation = `${result} ÷ ${value}`;
            result = answer;
        }
    } while (lastProblem && lastProblem.equation === equation);

    const problem = {
        type,
        equation,
        equal: result,
        value,
    };

    lastProblem = problem;

    return problem;
};


export const compareEqual = (correctAnswer, userAnswer) => {
    return Number(correctAnswer) === Number(userAnswer);
};