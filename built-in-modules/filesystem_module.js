const {readFileSync,writeFileSync, read, write, readFile, writeFile} = require('fs');

console.log('start') 
//sync method : Js reads the code line by line
const first=readFileSync('./file.txt','utf-8');
const second = readFileSync('./file2.txt','utf-8')

console.log(first,second)

//{flag:a) paramter appends the write content instead of overwriting it
writeFileSync('./result.txt',`Here is the result : ${first}, ${second}`,{flag : 'a'})
console.log('task completed');
console.log('starting the next one');


//async method :  better performance as we can start a task before finishing the first task
//call back method : fucntionality is set up within callback
console.log('start')
readFile('./file.txt','utf-8',(err,result)=>{ //(err,result)=>{} is the callback function
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./file2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;

        writeFile(
          './resutl-async.txt',
          `Here is the result : ${first}, ${second}`,
          (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
          }
        )
    })
})

console.log('starting the next task');

