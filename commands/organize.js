let fs=require('fs');
let path=require('path');
function organizeFn(dirPath){
    // console.log("Organize command implemented for ", dirPath);
    // 1. input-> directory path given
    let destpath;
    if(dirPath==undefined){
        destPath=process.cwd();
        return;
    }else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist){
            // 2. create -> organized_files directory
            destpath=path.join(dirPath, "organized_files");
            if(fs.existsSync(destpath)==false){
                fs.mkdirSync(destpath);
            }


        }else{
            console.log("Please Enter the correct path");
        }
    }
    organizeHelper(dirPath, destpath);
}

function organizeHelper(src, dest){
    // 3. check all files-> identify extension 
    let childNames=fs.readdirSync(src);
    console.log(childNames);
    for(let i=0; i<childNames.length; i++){
        let childAddress=path.join(src, childNames[i]);
        let isFile=fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category=getCategory(childNames[i]);
            console.log(childNames[i], "belogs to ", category);
            sendFiles(childAddress, dest, category);
        }
    }

}

function sendFiles(srcFilePath, dest, category){
    let categoryPath=path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }

    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}

function getCategory(name){
    let ext=path.extname(name);
    ext=ext.slice(1);
    for(let type in types){
        let cTypeArray=types[type];
        for(let i=0; i<cTypeArray.length; i++){
            if(ext==cTypeArray[i]){
                return type;
            }
        }
    }

    return "others";

}

module.exports={
    organizeKey: organizeFn
}