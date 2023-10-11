import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import DataContext from "./context/DataContext.jsx";


const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext)
  const {id} =useParams();
  const post = posts.find(post => (post.id).toString()===id);
  return (
    <main className="PostPage">
        <article className="post">
          {post && 
          <>
             <h2 >{post.title}</h2> 
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">{
            (post.body).length <=25 ? post.body :`${(post.body).slice(0,25)}...`
            }</p>
            <button className="deleteButton" onClick={()=> handleDelete(post.id)}>Delete Post</button>
         <Link to={`/edit/${post.id}`}> <button className="editButton" >Edit Post</button> </Link>
          </>
          }

          {!post && <>
              <h1>Post Not Found</h1>
            </>}
        </article>
      
    </main>
  )
}

export default PostPage