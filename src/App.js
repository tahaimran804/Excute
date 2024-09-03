import Home from './Main_Home_Page'
import Main_Home_Page from './Main_Home_Page'
import { BrowserRouter } from 'react-router-dom'
import Section from "./GoTOTop";
import Error_Page from './Error_Page';
import { Routes, Route, NavLink } from "react-router-dom"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Main_Home_Page />
      </BrowserRouter>
    </>
  )
}

export default App
