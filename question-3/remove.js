//remove.js

const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(process.cwd(), "Logs");
//checks if the Logs directory exists - reads all the files inside
if (fs.existsSync(logsDirectory)){
    const files = fs.readdirSync(logsDirectory);
    //loops through each file and then deletes it
    files.forEach(file => {
        const filepath = path.join(logsDirectory, file);
        fs.unlinkSync(filepath);
        console.log(`deleted files...${file}`);
    });
    //removes the Logs directory
    fs.rmdirSync(logsDirectory);
}else {
    //logs nothing was found if no Logs directory exists
    console.log("No logs found.");
}