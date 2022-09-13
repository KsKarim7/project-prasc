import './App.css';
import Header from './Pages/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Box } from '@mui/system';


function App() {
  return (
    <>
      <Header></Header>
      <Box style={{ marginTop: 131 }}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Box>

    </>
  );
}

export default App;
