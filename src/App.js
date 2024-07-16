import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App =() =>(
  <ThemeProvider>
    <CssBaseline/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  </ThemeProvider>
)

export default App;
