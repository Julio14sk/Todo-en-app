import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {
    // Lógica de restablecimiento de contraseña aquí
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <input
        type="password"
        placeholder="Nueva Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Restablecer Contraseña</button>
    </div>
  );
};

export default ResetPassword;