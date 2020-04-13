let abc = [
    'a',  'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 
    'z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8',
    '9', '\'', '"', '/', '\\',
    '`', '~', '!', '@', '#', 
    '%', '^', '&', '?', '*',
    '(', ')', '-', '_', '+', 
    '=', '<', '>', '.', ',', 
    '|', '{', '}', '[', ']'
]
function getIndexes(word) {
    let indexes = [];
    let brackets = '';
    word = word.replace(":", "");
    for (let i = 0; i <= word.length-1; i++) {
        let index = abc.findIndex(idx => idx == word[i]);
        (index != '-1') ? indexes.push(index) : null;
    }
    for (let i = 0; i <= indexes.length-1; i++) {
        brackets += `[${indexes[i]}]`;
    }
    return brackets;
}

let brackets = document.getElementById('brackets');
let bracketsReg = document.getElementById('bracketsReg');

document.getElementById('search').addEventListener('input', function(e) {
    this.value = e.target.value.replace(":","");
    brackets.value = getIndexes(e.target.value.toLowerCase())
})
document.getElementById('login').addEventListener('input', function(e) {
    this.value = e.target.value.replace(":","");
    bracketsReg.value = getIndexes(e.target.value.toLowerCase())
})
document.getElementById('pass').addEventListener('input', function(e) {
    this.value = e.target.value.replace(":","");
})

