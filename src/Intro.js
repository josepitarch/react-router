import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/courses">Cursos</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={ <h1>Inicio</h1> }/>
          <Route path="/courses/" element={ <h1>Cursos</h1> }/>
          <Route path="/about" element={ <h1>Sobre Nosotros</h1> }/>
        </Routes>
      </section>
    </div>
  );
}

export default App;