import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <main className="page">
      <section className="card">
        <h1>About</h1>
        <p>Este proyecto usa React Router para manejar navegación entre Login, Home y About.</p>
        <p>Home y About están protegidas: solo se pueden abrir después de iniciar sesión.</p>

        <nav className="nav-buttons">
          <Link to="/home">Volver a Home</Link>
          <button onClick={logout}>Cerrar sesión</button>
        </nav>
      </section>
    </main>
  );
}

export default About;
