import { Route, RouterProvider,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import RouterLayout from './layout/RouterLayout';
import Faq from './pages/help/Faq';
import Form from './pages/help/Form';
import ContactLayout from './layout/ContactLayout';
import NotFound from './pages/NotFound';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RouterLayout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route  path='contact' element={<ContactLayout />}>
         <Route path='faq' element={<Faq/>} />
       <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
     <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
