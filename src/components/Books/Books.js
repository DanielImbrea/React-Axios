import React, { useState } from "react";
//import "./Books.scss";
import axios from "axios";
// import Searcharea from "../Searcharea/Searcharea";
// import BookList from "../BookList/BookList";
const Books = () => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
    axios
      .get("https://hn.algolia.com/api/v1/search", {
        params: {
          query: value,
        },
      })
      .then(res => {
        console.log(res);
        setPosts(res.data.hits);
      });
  };

  const postList = posts.length ? (
    posts.map(post => {
      return (
        <div className="post__card card">
          <div className="card__content">
            <span className="card__title" key={post}>
              {post.title}
            </span>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts yet</div>
  );

  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
      <div>{postList}</div>
    </div>
  );
};

export default Books;
