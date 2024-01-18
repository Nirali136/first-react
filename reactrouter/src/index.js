import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { githubInfoLodar } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//       path: '/',
//       element: <App/>,
//       children: [
//           {
//               path: "",
//               element: <Home/> 
//           },
//           {
//               path: "about",
//               element: <About/>
//           },
//           {
//             path: "contact",
//             element: <Contact/>
//           }
//       ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
       {/* for nesting we can use this formate <Route/> */}
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route
       loader={githubInfoLodar}
       path='github'
       element={<Github/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
