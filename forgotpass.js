import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Lógica de olvidó la contraseña aquí
  };

  return (
    <div>
      <h2>Olvidé mi Contraseña</h2>
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Enviar Correo de Restablecimiento</button>
    </div>
  );
};

export default ForgotPassword;