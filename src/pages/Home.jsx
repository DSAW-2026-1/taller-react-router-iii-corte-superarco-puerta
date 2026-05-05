import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Home</h1>
        <p>Bienvenido, {user}. Esta es una ruta protegida.</p>
        <p>Si recargas la página, seguirás logueado porque el token está guardado en localStorage.</p>

        <nav className="nav-buttons">
          <Link to="/about">Ir a About</Link>
          <button onClick={logout}>Cerrar sesión</button>
        </nav>
      </section>
    </main>
  );
}

export default Home;
