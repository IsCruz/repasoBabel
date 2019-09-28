export const number = 20;
const letter = 'b';

const reverse = (string) => {
    return string.split('').reverse().join('');
}
const demo = (string) => {
    return reverse(string);
}
/*
export {
    number,
    letter
};

export default {important: letter}; */
export default demo;
