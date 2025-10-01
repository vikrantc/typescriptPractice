function camelCase(inputString: String) {
    let inputStringArray = inputString.split('');
    let outputStringArray = [];

    for (let i = 0; i < inputStringArray.length; i++) {
        if (i === 0) {
            outputStringArray.push(inputStringArray[i].toUpperCase());
        } else if (inputStringArray[i] === ' ') {
            outputStringArray.push(inputStringArray[i]);
            outputStringArray.push(inputStringArray[i + 1].toUpperCase());
            i++;
            continue;
        } else {
            outputStringArray.push(inputStringArray[i]);
        }
    }
    return outputStringArray.join('');
}

console.log(camelCase('This uses the configuration file we created'));
