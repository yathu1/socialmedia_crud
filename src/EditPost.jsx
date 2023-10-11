import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext.jsx';

const EditPost = () => {
const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle} = useContext(DataContext);
  const {id} = useParams();
  const post = posts.find(post=> (post.id).toString()===id);

  useEffect(()=>{
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post,setEditTitle,setEditBody])

  return (
    <main className='NewPost'>
      {editTitle && <>
        <h1>EditPost</h1>
      <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input id="postTitle" type="text" required value={editTitle}
          onChange={(e)=>setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea id="postBody" required value={editBody}
          onChange={(e)=>setEditBody(e.target.value)}
        />
        <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
      </form>
      </>}
    </main>
  )
}

export default EditPost