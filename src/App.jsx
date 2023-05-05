import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TodoList from './features/Todos/TodoList';
import Kicks from './Pages/Kicks/Kicks';
import Users from './Pages/Users/Users';
import UserDetails from './Pages/Users/UserDetails';
import EditUsers from './Pages/Users/EditUsers';

const App = () => {
  return (
    <div className='App h-[100dvh]'>
      <Header />
      <Routes>
        <Route path='/' element={<Kicks />} />
        <Route path='/todos' element={<TodoList />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/users/edit/:id' element={<EditUsers />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;