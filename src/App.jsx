import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './components/Header/Navigation'
import About from './components/page/About'
import Blog from './components/page/Blog'
import Hero from './components/Hero/Hero'
function App() {
  return (
    <div>
<BrowserRouter>
<Navigation />
<Hero />
<Routes>
    <Route path='/About' element={<About />}/>
    <Route path='/Blog' element={<Blog/>}/>
</Routes>
</BrowserRouter>
   
    </div>
  )
}

export default App