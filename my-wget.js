const axios = require('axios')
const fsPromises = require('fs/promises')

const myWget = async () => {
  try {
    const getStat = async () => { 
      console.log((await fsPromises.stat('axios.html')).size)
    }
    const response = await axios.get('https://app.netlify.com/sites/shopping-list-thibault/overview')
    fsPromises.writeFile('axios.html', response.data)
    setTimeout(getStat, 1000)
  } catch (e) {
    console.log(e.message)
  }
}

myWget()