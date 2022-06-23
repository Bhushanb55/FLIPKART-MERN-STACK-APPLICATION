import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material'

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailView from './components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import Cart from './components/cart/Cart';


function App() {
  return (
  <TemplateProvider>
    <DataProvider>
      <BrowserRouter>
      <Header />
        <Box style={{marginTop: 54}}>
          <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes> 
        </Box>
      </BrowserRouter>
    </DataProvider>
  </TemplateProvider>
  );
}

export default App;
