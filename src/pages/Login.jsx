import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === 'admin@gmail.com' && password === '1234') {
      localStorage.setItem('token', 'usuario-logueado');
      localStorage.setItem('user', email);
      navigate('/home');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <main className="page login-page">
      <section className="card">
        <h1>Login</h1>
        <p>Ingresa para acceder a las rutas protegidas.</p>

        <form onSubmit={handleSubmit}>
          <label>Correo</label>
          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Iniciar sesión</button>
        </form>

        <div className="hint">
          <strong>Usuario:</strong> admin@gmail.com<br />
          <strong>Contraseña:</strong> 1234
        </div>
      </section>
    </main>
  );
}

export default Login;
