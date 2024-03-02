const fs = require('fs');

// File path
const filePath = 'C:\\Users\\shrut\\OneDrive\\Desktop\\example.txt';

// Content to append
const contentToAppend = 'This is new content to be appended.\n';

// Append content to the file
fs.appendFile(filePath, contentToAppend, (err) => {
    if (err) {
        console.error('Error appending content to file:', err);
        return;
    }
    console.log('Content appended successfully!');
});
