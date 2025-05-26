import { useState } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './index.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
    <Header />
    <main className="page__content">
    <Main />
    </main>
    <Footer />
   </div>
  )
}

export default App
