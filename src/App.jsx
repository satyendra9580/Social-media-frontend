// frontend/src/App.jsx
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdninDashboard';

const App = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button
        onClick={() => setShowDashboard(!showDashboard)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showDashboard ? 'Show Submission Form' : 'Show Admin Dashboard'}
      </button>
      {showDashboard ? <AdminDashboard /> : <UserForm />}
    </div>
  );
};

export default App;