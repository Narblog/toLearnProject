import React, { useState } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { createPost } from "entities/redux/blogSlice";
import styles from "./CreatePost.module.css"

const CreatePostPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const dispatch = useAppDispatch();
  const error = useSelector((state: any) => {
    return state.blog.error;
  });

  const tasks= [
    {
      id: 1,
      taskState: "Done",
      tasks: [
        {
          id: 1,
          name: "planning",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John"
                   
                  },
                  text: "Lorem ipsum text",
                  date: new Date().toDateString(),
                },
                
              ],
            },
            {
              id: 2,
              author: {
                id: 25,
                name: "John",
                
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [
                {
                  id: 1,
                  author: {
                    id: 26,
                    name: "John",
                  
                  },
                  text: "No",
                  date: new Date().toDateString(),
                },
                
              ],
            },
          ],
        },
        {
          id: 2,
          name: "making",
          comments: [],
        },
      ],
    },
    {
      id: 2,
      taskState: "In Progress",
      tasks: [
        {
          id: 3,
          name: "John",
          comments: [
            {
              id: 1,
              author: {
                id: 23,
                name: "John ",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
        {
          id: 4,
          name: "using",
          comments: [],
        },
      ],
    },
    {
      id: 3,
      taskState: "End",
      tasks: [
        {
          id: 69,
          name: "John",
          comments: [
            {
              id: 1,
              author: {
                id: 34,
                name: "John ",
               
              },
              text: "Lorem ipsum text",
              date: new Date().toDateString(),
              replies: [],
            },
          ],
        },
        {
          id: 28,
          name: "Jack",
          comments: [],
        },
      ],
    },
  ]
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
