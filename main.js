#!/usr/bin/env node
let inputArr=process.argv.slice(2);
const { Console } = require('console');
let fs=require('fs');
let path=require('path');
let treeFn=require("./commands/tree");
let helpFn=require("./commands/help");
let organizeFn=require("./commands/organize");
types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

 
console.log(inputArr);

//node main.js tree "directorypath"
//node main.js organize "directoryPath"
//node main.js help

let command=inputArr[0];
switch(command){
    case "tree":
        treeFn.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeFn.organizeKey(inputArr[1]);
        break;
    case "help":
        helpFn.helpKey();
        break;
    default:
        console.log("Please input right command");
        break;
}

