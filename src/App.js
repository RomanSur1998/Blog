import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import AddBlog from './components/AddBlog'
import Contact from './components/Contact'
import Favorites from './components/Favorites'
import Details from './components/Details'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';




  

const App = () => {

  let user = [
    {
      "title": "1ыварпврпаыфвпиатвпкр",
      "price": "2",
      "image": "https://images.unsplash.com/photo-1682343712222-82ad3bc47ac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 1
    },
    {
      "title": "112345678",
      "price": "2",
      "image": "https://images.unsplash.com/photo-1682343712222-82ad3bc47ac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 3
    },
    {
      "title": "234567sadfghfds",
      "price": "34567",
      "image": "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 4
    },
    {
      "title": "Переписаноsdgfhdgjn",
      "price": "23456sdgsv",
      "image": "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 5
    },
    {
      "title": "dfg",
      "price": "sdfgsdfgh",
      "image": "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 6
    },
    {
      "title": "3456",
      "price": "q23456",
      "image": "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 7
    },
    {
      "title": "123456",
      "price": "23456",
      "image": "https://images.unsplash.com/photo-1682282462523-996afa93708b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "id": 8
    }
  ]
  const[cards,setCards]=useState(user)
function AddCards (newOBJCard) {
  const arr = [...cards]
  arr.push(newOBJCard)
  setCards(arr)
  
}
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main cards={cards}/>}/>
        <Route path='/add' element={<AddBlog  AddCards={ AddCards}/>}/>
        <Route path='/cont' element={<Contact/>}/>
        <Route path='/det' element={<Details/>}/>
        <Route path='/fav' element={<Favorites/>}/>
        <Route path='/about' element={<AboutUs/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App