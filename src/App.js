import React from 'react';
import { Button } from 'antd';
import './App.less';
import routes from './routes';
import {useRoutes} from 'react-router-dom'
function App(){
const element = useRoutes(routes)
return (
  <div className="App">
    {element}
    {/* <Button type="primary">Button</Button> */}
  </div>
)
};

export default App;