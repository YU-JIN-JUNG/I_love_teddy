import MainPage from './app/MainPage/MainPage.main.jsx'
import LoginPageComponent from './app/LoginPage/LoginPage.main.jsx'
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPageComponent />} />
    </Routes>
    </>
  )
}

export default App
