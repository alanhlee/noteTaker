const router = require("express").Router();
const List = require("./List.js");

let list = new List();

router.get("/api/notes", async (req, res) => {
  let items = await list.getItems();
  res.json(items);
});

// POST an item (giving something to the server)
router.post("/api/notes", (req, res) => {
  list.addItem(req.body);
  res.sendStatus(200);
});

// PUT an item (to update a pre existing thing/data server)
router.put("/api/notes/:text", (req, res) => {
  list.updateItem(req.params.text);
  res.sendStatus(200);
});

// DELETE an item (to delete something/data from the server)
router.delete("/api/notes/:text", (req, res) => {
  list.deleteItem(req.params.text);
  res.sendStatus(200);
});

module.exports = router