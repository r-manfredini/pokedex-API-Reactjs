import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="background-pokemon">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="logo"></img>
          </a>
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default App
