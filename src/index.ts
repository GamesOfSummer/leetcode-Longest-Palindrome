import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function longestPalindrome(s: string): number {
    let map = new Set();

    if (s.length === 1) {
        return 1;
    } else if (s.length === 0) {
        return 0;
    }

    let count = 0;
    let array = s.split('');
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            count++;
            count++;
            map.delete(array[i]);
        } else {
            map.add(array[i]);
        }
    }

    if (map.size === 0) {
        return s.length;
    } else if (map.size === s.length) {
        return map.size - 1;
    }

    return s.length > map.size ? count + 1 : count;
}

consoleStart();
validateFxn(longestPalindrome('AB'), 1);
validateFxn(longestPalindrome('bb'), 2);
validateFxn(longestPalindrome('adam'), 3);
validateFxn(longestPalindrome('abccccdd'), 7);
validateFxn(longestPalindrome('ccc'), 3);

validateFxn(longestPalindrome('a'), 1);

consoleEnd();

export {};
