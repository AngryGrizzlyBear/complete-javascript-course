function translate_acids(str) {
    var acids = [];

    for (let i = 0; i < str.length; i++) {
        switch(str[i].toUpperCase()) {
            case 'G':
                acids.push("Guanine");
                break;
            case 'T':
                acids.push('Thymine');
                break;
            case "C":
                acids.push('Cytosine');
                break;
            case "A":
                acids.push('Adenine');
                break;
            default:
                acids.push("-");
                break
        }
    }
    return acids
}

let results = translate_acids('ZGTCTTACX'); // should return ['guanine', 'thymine',
// 'cytosine', 'thymine', 'thymine', 'adenine', 'cytosine']
console.log(results);

// const a = [ 1, 2, 3, 4, 5 ];
// console.log(a[2],a[4]);
const a = [ [ 0, 3 ], [ 'a', 'b', 'c' ], { hello: 'world', evan: 'grizzly' } ];
console.log(a[0][1], a[1][1], a[2].hello, a[2].evan);