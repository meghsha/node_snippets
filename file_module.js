const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

// let first = readFileSync("./content/first.txt", 'utf8')
// let second = readFileSync("./content/second.txt", 'utf8')

// console.log(first, second);
// writeFileSync("./content/result-text.txt", `Here is the result: ${first}, ${second}`, {flag: 'a'})

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    } else{
        console.log(result)
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if(err){
                console.log(err)
                return
            } else{
                console.log(result)
                const second = result;
                writeFile("./content/result-async.txt", `Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
                    if(err){
                        return
                    } else{
                        console.log(result)
                    }
                })
            }
        })
    }
})