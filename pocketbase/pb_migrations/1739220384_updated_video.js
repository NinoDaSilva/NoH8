/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3078710471")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "parent",
      "jeune",
      "prof",
      "loi",
      "temoignage"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3078710471")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 5,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "parent",
      "jeune",
      "prof",
      "loi",
      "temoignage"
    ]
  }))

  return app.save(collection)
})
