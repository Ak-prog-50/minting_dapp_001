export const truncate = (input, len) => {
    return input.length > len ? `${input.substring(0, len)}...` : input;
};