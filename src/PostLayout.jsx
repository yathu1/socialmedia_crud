import { Link, Outlet } from "react-router-dom"


const PostLayout = () => {
  return (
    <div>
          <li><Link to="/postpage/1">Post Page 1</Link></li>
      <li><Link to="/postpage/2">Post Page 2</Link></li>
      <li><Link to="/postpage/3">Post Page 3</Link></li>
      <li><Link to="/postpage/newpost">New post</Link></li>
      <Outlet/>
    </div>
  )
}

export default PostLayout