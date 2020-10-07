const path = require('path');
const fs = require('fs');

fs.writeFile(path.join(__dirname, '/test', 'temp.txt'), 'Hello World', (err) => {
    if(err) throw err;
    console.log('Created...');
});

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if(err) throw err;
//     console.log('Created...');
// });

