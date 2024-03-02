const fs = require('fs');

// File path
const filePath = 'C:\\Users\\shrut\\OneDrive\\Desktop\\example1.txt';

// Delete the file
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully!');
});
