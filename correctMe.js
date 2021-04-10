const fsPromises = require('fs/promises')

try {
  let txt1 = fsPromises.readFile('hello.txt', 'utf-8')
  console.log(txt1)
} catch (e) {
  console.log(e.message)
}