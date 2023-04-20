import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import PostLists from './Pages/PostLists';
import Post from './Pages/Post';
import EditPost from './Pages/EditPost';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  return (
    <div className='App h-[100dvh]'>
      <Routes>
        <Route path='/' element={ <PostLists /> } />
        <Route path='/posts/:id' element={ <Post /> } />
        <Route path='/posts/:id/edit' element={ <EditPost /> } />
        <Route path='*' element={ <ErrorPage /> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;