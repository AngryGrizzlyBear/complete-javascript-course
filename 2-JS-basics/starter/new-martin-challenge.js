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