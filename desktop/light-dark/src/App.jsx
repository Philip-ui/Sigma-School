import { useState } from 'react'
import './App.css';
import Form from './Form'

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <Form theme={theme} />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark mode
      </label>
    </>
  );
}
