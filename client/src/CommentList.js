import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ commentsProp }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
  };

  useEffect(() => {
    setComments(commentsProp)
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
