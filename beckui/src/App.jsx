import { useState } from 'react'
import { AuthForm } from './pages/SSOPages'

function App() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
    } else {
      alert(`Sign In attempt:\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    }
  };

  return (
    <AuthForm
      type="signIn"
      title="Sign In"
      subtitle=""
      onSubmit={handleSubmit}
      email={formData.email}
      password={formData.password}
      onChange={handleChange}
      error={error}
    />
  )
}

export default App
