const path=require("path");

// console.log(path.sep);
// console.log(process.env.path);

const filePath1="/public_html/home/index.html";
const currentFilePath= __filename;
console.log(currentFilePath);
// console.log(__dirname)

let result=path.basename(currentFilePath);
console.log('result >',result);

let basenameWithoutExt=path.basename(currentFilePath,'.js');
console.log('basenameWithoutExt >',basenameWithoutExt)

let dirname=path.dirname(currentFilePath);
console.log('dirname >',dirname);

console.log('ext1 >',path.extname(currentFilePath));
console.log('ext2 >',path.extname('index.md.js'));

let pathToFile=path.format(
    {
        dir:'/public_html/home',
        base:'index.html'
    }
);
console.log('pathToFile >',pathToFile)


console.log("Is absulute:?",path.isAbsolute(currentFilePath)); // true
console.log("Is absulute:?",path.isAbsolute('/index.js')); // true
console.log("Is absulute:?",path.isAbsolute('./index.js')); // false
console.log("Is absulute:?",path.isAbsolute('../index.js')); // false

let pathToDir=path.join('/home','js','dist','index.js');
console.log("parhToDir>",pathToDir);//parhToDir> \home\js\dist\index.js

console.log('parse>',path.parse(currentFilePath));
// parse> {
//     root: 'd:\\',
//     dir: 'd:\\pwskills\\lectures\\NODEJS\\path',  
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }
console.log("relative path",path.relative('/home/user/config','/home/user/js/'))
//op-->relative path ..\js

console.log('resolve>',path.resolve());
//op--->resolve> D:\pwskills\lectures\NODEJS

console.log('Normalize>',path.normalize('//home//user//js')); 
//Normalize> \\home\user\js
