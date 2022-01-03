import { Routes, Route, Link, useParams } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
      <li>
        <Link to='proyecto-1/123'>Proyecto 1</Link>
      </li>
      </ul>
      <div>
        <Routes>
          <Route path='proyecto-1/:id' element={ <Item/>}/>
        </Routes>
      </div>
    </div>
  )
}

const Item = () => {
  const params = useParams()
  return (
    <h1>{ params.id }</h1>
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