const express = require('express');
const axios = require("axios");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post("/events", (req , res) => {
  console.log("Event Received : " , req.body)
  const {type, data} = req.body;
  if(type === "PostCreated"){
    posts[data.id] = {
      ...data,
      comments : []
    }
  }
  if(type === "CommentCreated"){
    const post = posts[data.postId];
    post.comments.push({id: data.id , content: data.content})
  }
})

app.listen(4003, () => {
  console.log('Listening on 4003');
});
