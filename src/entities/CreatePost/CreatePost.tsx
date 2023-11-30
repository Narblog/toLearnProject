import React, { useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { createPost } from "entities/firebase/blogSlice";
import styles from "./CreatePost.module.css"

import { Link } from "react-router-dom";
const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);


  const dispatch = useAppDispatch();

  const loding = useSelector((state: any) => {
    return state.blog.loading;
  });

  const error = useSelector((state: any) => {
    return state.blog.error;
  });


  const handleCreatePost = () => {
    dispatch(
      createPost({
        createAt: new Date().toISOString(),
        title,
        description,
        image,
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
<>
<img className={styles.imageBoard} src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png" alt="images" />
      <h2>Create new Post</h2>
      <div className={styles.boxcreate}>
       
        <div>
        <div> Board title:  <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Board title"
            value={title}
            className={styles.input}
          /></div>
        </div>
        <div>
        <div> Description:  
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Board description"
            value={description}
          ></textarea></div>
        </div>
        <div>
        <button onClick={handleCreatePost} className={styles.newBtn}>Create </button>
        </div>
      </div>
      <div>{error ? <p>{error}</p> : null}</div>
      
   </>
  );
};

export default CreatePostPage;
