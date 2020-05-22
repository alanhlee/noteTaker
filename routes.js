const router = require("express").Router();
const { join } = require("path");
const { readFile, writeFile } = require('fs').promises


router.get("/notes", (req, res) => {
  res.sendFile(join(__dirname, "public/notes.html"));
});

router.get("/api/notes", async (req, res) => {
  // let items = await list.getItems();
  res.json(JSON.parse(await readFile("./db/db.json")));
});

// POST an item (giving something to the server)
router.post("/api/notes", async (req, res) => {
  let item = req.body
  let items = JSON.parse(await readFile("./db/db.json"));
  item.id = items.length + 1;
  items.push(item);
  writeFile("./db/db.json", JSON.stringify(items));
  // await list.addItem(req.body);
  res.sendStatus(200);
});

// DELETE an item (to delete something/data from the server)
router.delete("/api/notes/:id", async (req, res) => {
  let items = JSON.parse(await readFile("./db/db.json"));
  items = items.filter((item) => {
    if (item.id === parseInt(req.params.id)) {
      return false;
    } else {
      return true;
    }
  });
  // console.log(items, id)
  writeFile("./db/db.json", JSON.stringify(items));

  // list.deleteItem(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
