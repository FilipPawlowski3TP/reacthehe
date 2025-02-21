import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import profiles from './assets/profile.json'
import contents from './assets/wiadomosci.json'

class Post{
    constructor(author, title, content) {
        this.id = 0;
        this.author = author;
        this.title = title;
        this.content = content;
        this.dateCreated = new Date();
    }
}

function App() {

  return (
    <>
        {profiles.map(p => <div key={p.id}>{p.nazwa}</div>)}
    </>
  )
}

export default App
