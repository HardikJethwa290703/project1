import logo from './logo.svg';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'; 
import Props from './props/Props.jsx';
import UseState from './state/UseState.jsx';
import Conditions from './conditionalRendering/Conditions.jsx';
import FormHandling from './formHandling/FormHandling.jsx';
import UseStates from './hooks/UseStates.jsx';
import UseArray from './hooks/UseArray.jsx';
import UseEffect1 from './hooks/UseEffect1.jsx';
import UseEffect2 from './hooks/UseEffect2.jsx';
import { useState } from 'react';
import SinglePost from './hooks/SinglePost.jsx';
import MultiPost from './hooks/MultiPost.jsx';
import UseReducer from './hooks/UseReducer.jsx';
import FetchRandomData from './hooks/FetchRandomData.jsx';

// Routing
const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    errorElement : <Error/>,
    children : [
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>}
    ]
  }
]);

function App() {
  const [value,setValue] = useState(true);
  return (
      <div>        
        {/* Routing */}
        <RouterProvider router={router}/>
        <FetchRandomData/>
        {/* Props */}
        <Props name={'kaushik'} age={21}/>
        {/* State */}
        <UseState/>
        {/* Conditional rendering */}
        <Conditions isLoggedIn={true}/>
        {/* Form Handling */}
        <FormHandling/>
        {/* UseState using object */} 
        <UseStates/>    
        {/* UseState using array */}
        <UseArray/>
        {/* UseEffect1 */}
        {value ? <UseEffect1/> : <></>}
        <button onClick={()=>setValue(!value)}>Show</button>
        {/* UseEffect2 */}
        <UseEffect2/>
        {/* SinglePost using axios */}
        <SinglePost/>
        {/* MultiPost using axios */}
        <MultiPost/>
        {/* UseReducer */}
        <UseReducer/>
        {/* Fetching data using fetch() method */}                
      </div>
  );
}

export default App;
