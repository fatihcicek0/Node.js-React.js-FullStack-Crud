import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import ContentDetail from './pages/ContentDetail';
import EditContent from './pages/EditContent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ height: 50 }} id='navi'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/addcontent'>Add Content</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/content/:id/detail' element={<ContentDetail />}></Route>
          <Route path='/addcontent' element={<AddContent />}></Route>
          <Route path='/content/:id/edit' element={<EditContent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
