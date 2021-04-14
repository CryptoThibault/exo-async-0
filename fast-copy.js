const axios = require('axios')
const fsPromises = require('fs/promises')

if (process.argv.length !== 4) {
  console.log('Usage: node fast-copy.js textfile newfile')
  process.exit(1)
}

const main = async () => {
  try {
    const fileList = await fsPromises.readdir(process.argv[2])
    let text = ''
    for (let i = 0; i < fileList.length; i++) {
      text += await fsPromises.readFile(`${process.argv[2]}/${fileList[i]}`) + ' '
    }
    console.log(text)
    await fsPromises.writeFile(process.argv[3], text)
  } catch (e) {
    console.log(e.message)
  }
}
main()
