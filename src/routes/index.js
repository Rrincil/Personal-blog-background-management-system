import {lazy} from 'react'
import { Navigate } from 'react-router-dom'
// const 
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  // {
  //   path:'/home',
  //   element:<homepage/>
  // }
]
export default routes