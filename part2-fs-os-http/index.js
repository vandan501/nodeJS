//12-06-2023

/***********READ FILE FROM BLOCKING AND NONBLOCKING WAY****************************************** */
const fs = require("fs");
const { buffer } = require("stream/consumers");
console.log("Read Start------");

//************************************** */ Asynchronous way to read file***************************
// fs.readFile('part2-fs/input.txt', function (err, data) {
// if (err) {
// console.log("error:", err);
// return err;
// }
// console.log("Data:", data.toString());
// console.log("Read End------");
// return data;
// });

// console.log("other stuff");

//*******************************Synchronous way tonread file******************************
// var data=fs.readFileSync('part2-fs/input.txt');
// console.log("Data:",data.toString());
// console.log("other End")
// console.log("other stuff")

///************COMMON USE FOR FILE SYSTEM MODELE************************** */
/*
 * Read files
 * write files
 * append files
 * close files
 * delete files
 */

//**************************Open and read file************************************************* */
// const buf = new Buffer(1024);
/*
fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    console.log("error in opening file");
  }
  console.log("file open successfully!");

  fs.read(fd, buf, 0, buf.length, 0, function (er, bytes) {
    if (er) {
      console.log("error in reading file");
    }
    console.log("data:", bytes);
    console.log("Data:", buf.slice(0, bytes).toString());
    fs.close(fd,function( err){
    if (err) {
      console.log("Error in closing file");
    } else {
      console.log("File closed successfully");
    }
  });
  });
});

// file open successfully!
// data: 41
// Data: hello from good evening
// --VANDAN RAVAL

//*******************write file************************ */
//** */
// fs.writeFile('input.txt','Jai shree ram',function(err)
// {
//   if(err)
//   {
//     console.log("Eror")
//   }
//   else{
//     console.log("Success in writing file")
//   }
// })

//*********************Append file**************************************** */
// fs.appendFile('input.txt','-- jai hanuman','utf8',function(err)
// {
//   if(err)
//   {
//     console.log("Try again please")
//   }
//   else{
//     console.log("Successfully appending file!")
//   }
// })


//****************************Deleting file********************************************* */
fs.unlink('del.txt',function(err)
{
  if(err)
  {
    console.log("Error in deleting file")
  }
  else{
    console.log("File deleted successfully")
  }
})