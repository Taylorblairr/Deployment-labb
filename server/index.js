const express = require("express");
const cors = require("cors");

const app = express();

let namesArr = ["Jeff", "Jim", "Node" ]

app.use(cors());

app.use(express.json());