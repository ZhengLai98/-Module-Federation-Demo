/**
 * first step: get resoure filee
 * @param {*} file 
 */
 const fs = require('fs')
 const getModuleInfo = (file) => {
     const body = fs.readFileSync(file,'utf-8')
     console.log(body);
 }
 getModuleInfo("./src/index.js")