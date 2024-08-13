const newman = require("newman")

newman.run({
    collection: "json-collection/rizki.postman_collection.json",
    environment: "json-env/rizki-env.json",
    reporters: ["cli", "htmlextra"]
})
