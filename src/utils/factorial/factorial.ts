export const factorial = (arg: number): number => {
    if (arg < 0) {
        return -1;
    }

    return arg <= 1 ? arg : arg * factorial(arg - 1);
};
