const os = require('os')

// let user = os.userInfo();
// console.log(user);

// console.log(` the sustem uptime is: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    freeMemory: os.freemem(),
    totalMem: os.totalmem(),
    release: os.release()
}
console.log(currentOS)