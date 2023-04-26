import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = ({ AddCards }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  console.log(title, image, price);
  const navigate = useNavigate();

  function handlerAdd() {
    if (!price || !image || !title) {
      alert("Заполните поля");
    } else {
      const newObj = {
        title: title,
        price: price,
        image: image,
        id: Date.now(),
      };
      console.log(newObj);
      AddCards(newObj);
      setImage("");
      setPrice("");
      setTitle("");
    }
    navigate("/");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Title "
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="url"
          placeholder="Image "
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Title "
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button onClick={handlerAdd}>Add Blog</button>
      </div>
    </div>
  );
};

export default AddBlog;
