import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div className='inner-navbar'>
                <Link className='navbar-button' to="/">List Users</Link>
                <Link className='navbar-button' to="user/create">Create User</Link>
          </div>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
