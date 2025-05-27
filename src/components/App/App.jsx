import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import '../../index.css';



function App() {
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


