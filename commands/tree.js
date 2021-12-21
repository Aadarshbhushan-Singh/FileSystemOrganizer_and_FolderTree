let fs=require('fs');
let path=require('path');
function treeHelper(dirPath, indent){
    //is file or folder
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName=path.basename(dirPath);
        console.log(indent+" |----"+fileName)
    }else{
        let dirName=path.basename(dirPath);
        console.log(indent+" |____"+ dirName);
        let childrens=fs.readdirSync(dirPath);
        for(let i=0; i<childrens.length; i++){
            let childPath=path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent+" \t");
        }
    }
}

function treeFn(dirPath){
    let destpath;
    if(dirPath==undefined){
       
        treeHelper(process.cwd(), "");

        return;
    }else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist){
           treeHelper(dirPath, "");
        }else{
            console.log("Please Enter the correct path");
        }
    }
}

module.exports={
    treeKey: treeFn
}
