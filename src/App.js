import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen bg-base-100">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
              <div className='bg-purple-500'>
                <h1 className='text-xl'>Hello</h1>
                <button className='btn'>Click Me</button>
              </div>
      </div>
    </Router>
    
  );
}

export default App;


//flex and flex-col: Aling remaining space in between elements (in this case Navbar, MainContent and Footer)
//h-screen: Takes the entire high of the screen