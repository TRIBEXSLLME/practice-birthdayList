import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
    const[people,setPeople] = useState(data)
 return <main>
    <div className="container">
        <h3> {people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=> setPeople([])}>
            clear all
        </button>
    </div>
 </main>
}

export default App
