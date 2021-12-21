let fs=require('fs');
let path=require('path');
function helpFn(){
    console.log(`
        List of all commands:
        node main.js tree "directorypath"
        node main.js organize "directoryPath"   
        node main.js help
    `);
}

module.exports={
    helpKey: helpFn
}