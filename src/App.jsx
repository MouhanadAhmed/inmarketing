import './App.css';
import PageFlipSlider from './components/PageFlipSlider/PageFlipSlider.jsx';
import Home from "./components/Home/Home.jsx"
import Services from './components/Services/Services.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import ServicePage from './components/ServicePage/ServicePage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
function App() {
  const routes = createBrowserRouter([
    {
      path:"",
      element: <Layout/> ,
      children:[
        {index:true, element: <Home/> },
        {path:"about", element:<AboutUs/>},
        {path:"services", element:<Services/>},
        {path:"servicePage", element:<ServicePage/>},
        {path:"portfolio", element:<PageFlipSlider/>},
       
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
