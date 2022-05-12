const reverse = (str) => {
    if (str.split('').reverse().join('') === str) {
        return true;
    } else {
        return false;
    }
};
console.log(reverse('rotor'));
console.log(reverse('Racecar'));
console.log(reverse('racecar'));