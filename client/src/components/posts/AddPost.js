import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const AddPost = () => {
  const [addPost, setAddPost] = useState({
    text: "",
    user_id: ""
  });

  const handleChange = e => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value });
    console.log("handleChange firing");
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/posts", addPost)
      .then(res => {
        console.log("add success", res);
        setAddPost({
          ...addPost,
          text: "",
          user_id: ""
        });
        window.location.reload(false);
      })
      .catch(err => console.log("Could not add post", err));
  };

  return (
    <div className="add-post-form" data-testid="add-post-form">
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="text"
          value={addPost.text}
          placeholder="add text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="user_id"
          value={addPost.user_id}
          placeholder="add user id #"
          onChange={handleChange}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};
export default AddPost;
