import Header from "./Header.jsx"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import NewPost from "./NewPost.jsx"
import PostPage from "./PostPage.jsx"
import Home from "./Home.jsx"
import About from './About.jsx'
import Missing from './Missing.jsx'
import { Routes ,Route} from "react-router-dom"

import EditPost from "./EditPost.jsx"

import {DataProvider} from "./context/DataContext.jsx"

function App() {


  return (
    <div className="App">
        <DataProvider>
          
            <Header title="YTR Social Media" />
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="post"> 
               <Route index element={ <NewPost />}/>
                <Route path=":id" element={<PostPage />}/>
             </Route>
        
             <Route path="about" element ={ <About/>}/>
             <Route path="*" element ={ <Missing/>}/>
            <Route path="/edit/:id" element={<EditPost />}/>
            </Routes>
            <Footer/>
        </DataProvider>
    </div>
  )
}

export default App
