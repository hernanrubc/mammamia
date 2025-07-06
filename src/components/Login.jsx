import { useState } from 'react';
import '../styles/Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setMessage('¡Inicio de sesión exitoso!');
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="info-text">La contraseña debe tener al menos 6 caracteres.</p>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-primary">🔒 Iniciar sesión</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
