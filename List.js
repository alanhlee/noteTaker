const { readFile, writeFile } = require('fs').promises

class List {
  constructor () {
    
    this.getItems = async () => {
      return JSON.parse(await readFile('./db/db.json'))
    }
    this.addItem = async (item) => {
     let items = await this.getItems();
     item.id = items.length + 1 
     items.push(item)
      writeFile('./db/db.json', JSON.stringify(items))
    }
    this.deleteItem = async id => {
      let items = await this.getItems();
      items = items.filter(item => {
        if (item.id === parseInt(id)) {
          return false
        } else {
          return true
        }
      })
      // console.log(items, id)
      writeFile("./db/db.json", JSON.stringify(items));
    }
  }
}

module.exports = List
