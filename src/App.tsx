import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage'
import { SecondPage } from './pages/SecondPage';
import { NavandPages } from './components/NavandPages';

function App() {
  return (
    <>
      <NavandPages />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Second' element={<SecondPage/>} />
      </Routes>
    </>
  )
}

export default App;
