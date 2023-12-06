const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is now working!");
});

//database connection : MongoDB
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin0102@cluster0.2hgb7a3.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //crate a database collection
    const dataCollections = client.db("Contents").collection("items");

    //insert a person info to the database: via post method
    app.post("/upload-info", async (req, res) => {
      const data = req.body;
      const result = await dataCollections.insertOne(data);
      res.send(result);
    });

    //update data info : via patch or update method
    app.patch("/item/:id", async (req, res) => {
      const id = req.params.id;
      const updateItemInfo = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateItemInfo,
        },
      };

      //update
      const result = await dataCollections.updateOne(
        filter,
        updateDoc,
        options,
      );
      res.send(result);
    });

    //get all contents from the database : via get method
    app.get("/all-content", async (req, res) => {
      const items = dataCollections.find();
      const result = await items.toArray();
      res.send(result);
    });

    //get one data from the database: via get method
    app.get("/item/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await dataCollections.findOne(filter);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: "Item Not Found!" });
      }
    });

    //delete an item info : delete method
    app.delete("/item/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await dataCollections.deleteOne(filter);
      res.send(result);
    });

    //send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
