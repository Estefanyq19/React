import React from 'react';
import { AuthProvider } from './components/Auth';
import Menu from './rutas/Menu';

function App() {
  return (
    <AuthProvider>
      <Menu />
    </AuthProvider>
  );
}

export default App;