import {lazy} from 'react'
import { Navigate } from 'react-router-dom'
const Home = lazy(import('../components/home'))
// const 
const routes = [
  {
    path:'/',
    element:<Navigate to="/home"/>
  },
  {
    path:'/home',
    element:<Home/>
  }
]
export default routes