const router = require("express").Router();
const { join } = require('path')
const List = require("./List.js");

let list = new List();

router.get('/notes', (req, res) => {
  res.sendFile(join(__dirname, 'public/notes.html'))
})

router.get("/api/notes", async (req, res) => {
  let items = await list.getItems();
  res.json(items);
});

// POST an item (giving something to the server)
router.post("/api/notes", async (req, res) => {
  await list.addItem(req.body);
  res.sendStatus(200);
});



// DELETE an item (to delete something/data from the server)
router.delete("/api/notes/:id", (req, res) => {
  list.deleteItem(req.params.id);
  res.sendStatus(200);
});

module.exports = router