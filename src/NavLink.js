import { Routes, Route, NavLink, useParams } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
      <li>
        <NavLink
        exact to='proyecto-1/123'
        className={({ isActive }) =>
        isActive ? 'activo' : undefined }
        style={({ isActive }) =>
        isActive ? {fontSize: '30px'} : undefined }
        >
          Proyecto 1
        </NavLink>
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
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio">Portfolio</NavLink>
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