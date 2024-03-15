import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './components/Root/Root';
import Contacts from './components/contacts/Contacts';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Article from './components/portfolio/article/Article';


const router = createBrowserRouter([
  {path: '/', 
  element: <Root/>,
  children: [{path: "contacts/",
      element: <Contacts/>},
     {path: "",
      element: <AboutMe/>},
    {path: "portfolio/",
      element: <Portfolio/>,
        // children: [{path:  ':id/', 
        // element : <Article/>}] 
      },
    {
      path: "portfolio/:id/",
      element:<Article/>
    }
  ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
