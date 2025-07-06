import { useState } from 'react';
import '../styles/Form.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
    } else if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
    } else {
      setMessage('¡Registro exitoso!');
    }
  };

  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form className="form-register" onSubmit={handleSubmit}>
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
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="btn-success">📝 Registrarse</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
