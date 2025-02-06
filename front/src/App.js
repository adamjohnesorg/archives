import Router from './Router'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'

function App() {
    return (
      <>
        <div>
          <Navbar/>
          <div className='flex flex-col items-center'>
            <Router />
          </div>
          <Footer />
        </div>
      </>
    );
  }

export default App