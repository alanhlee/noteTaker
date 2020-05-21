const { readFile, writeFile } = require('fs').promises

class List {
  constructor () {
    
    this.getItems = async () => {
      return JSON.parse(await readFile('./db/db.json'))
    }
    this.addItem = item => {
      this.items.push(item)
    }
    this.updateItem = text => {
      this.items.forEach(item => {
        if (item.text === text) {
          item.isDone = !item.isDone
        }
      })
    }
    this.deleteItem = text => {
      this.items = this.items.filter(item => {
        if (item.text === text) {
          return false
        } else {
          return true
        }
      })
    }
  }
}

module.exports = List
