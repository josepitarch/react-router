import { Routes, Route, Link, Outlet } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
      <li>
        <Link to='proyecto-1'>Proyecto 1</Link>
      </li>
      <li>
        <Link to='proyecto-2'>Proyecto 2</Link>
      </li>
      </ul>
      <Outlet />
      <div>
        <Routes>
          <Route path='proyecto-1' element={ <h2>Proyecto 1</h2> }/>
          <Route path='proyecto-2' element={ <h2>Proyecto 2</h2> }/>
        </Routes>
      </div>
    </div>
  )
}


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={ <h1>Inicio</h1> }/>
          <Route path="/portfolio/*" element={ <Portfolio /> }/>
        </Routes>
      </section>
    </div>
  );
}

export default App;