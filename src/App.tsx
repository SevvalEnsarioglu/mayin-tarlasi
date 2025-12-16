import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <h1>Mayın Tarlası Oyunu</h1>
            <p>Mayın tarlasına hoş geldiniz! Amacınız mayınlara basmadan tüm güvenli kareleri açmaktır.</p>
        </div>
    </>
  )
}

export default App
