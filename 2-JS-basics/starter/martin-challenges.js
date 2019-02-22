function make_block(arrays) {

    // store our final answer
    var text = '';

    // code here
    for(let i = 0; i < arrays.length; i++ ) {
       for(let j = 0; j < arrays[i].length; j++) {
           text = text + arrays[i][j] + ' ' ;
       }
       text = text + '\n'
    }

    return text;
}

var james = make_block([
    ['hello,'],
    ['my', 'name', 'is', 'triggered', 'grizzly', 'bear.' ],
    ['good', 'day', 'to', 'you,', 'sir.' ],
    ['bye']
]); // return value should be 'hello,\nmy name is triggered grizzly bear.\ngood day to you, sir.\nbye'
console.log(james);