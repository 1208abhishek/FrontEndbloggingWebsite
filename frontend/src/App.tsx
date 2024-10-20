
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { Blog } from './pages/blog'
function App() {


  return (
    <>
    <BrowserRouter> 
        <Routes> 
            <Route path="/signup" element={<Signup></Signup>}> </Route>
            <Route path="/signin" element={<Signin></Signin>}> </Route>
            <Route path="/blog:id" element={<Blog></Blog>}> </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
