import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {addPost} from "./postsSlice"



const AddPostForm = () => {

    const dispatch = useDispatch()
    const [title,setTitle] = useState('')

    const [content, setContent] = useState('')

    const titleOnChange = (e) => setTitle(e.target.value)
    const contentOnChange = (e) => setContent(e.target.value)


    const handleSubmit =() => {
        
        if( title && content){
            dispatch(addPost({
                id : nanoid(),
                title,
                content,
            }))
            setTitle('');
        setContent('');
        }
       
    }

  return (
    <div className="text-center">

   
    <form >
    <label >Title:</label>
    <input  value={title} onChange={titleOnChange} type="text" id="title"  placeholder="Enter a title"/>
  
    <label >Content:</label>
    <textarea  value={content} onChange={contentOnChange} type='text' id="content"  placeholder="Enter the content"/>
  
    <button onClick={handleSubmit} type="button">Submit </button>
  </form>
  </div>
  
  )
}

export default AddPostForm