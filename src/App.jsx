import './App.css';
import PageFlipSlider from './components/PageFlipSlider/PageFlipSlider.jsx';
import Home from "./components/Home/Home.jsx"
import Services from './components/Services/Services.jsx';
import { RouterProvider, createBrowserRouter,createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import ServicePage from './components/ServicePage/ServicePage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
function App() {
  const routes = createHashRouter([
    {
      path:"",
      element: <Layout/> ,
      children:[
        {index:true, element: <Home/> },
        {path:"about", element:<AboutUs/>},
        {path:"services", element:<Services/>},
        {path:"servicePage", element:<ServicePage/>},
        {path:"portfolio", element:<Portfolio/>},
        {path:"contact", element:<ContactUs/>},
       
      ],
    },
  
  ])
  return (
    <div className="App bg-custom-green">
       <RouterProvider  router={routes}></RouterProvider>

    </div>
  );
}

export default App;
