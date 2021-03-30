import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Content from './Components/Content'
import data from './Components/data'
import News from './Components/News'
import NotFound404 from './Components/NotFound404'
import Login from './Components/Login'
import Register from './Components/Register'
import SecretData from './Components/SecretData'

function App() {

  const [tokenValue, setTokenValue] = useState('');
  const [nowLogin, setNowLogin] = useState(false);

  const content = () => 
  <Content title={data[0].title} date={data[0].date}
    desc={data[0].desc} story={data[0].story} />;

  const home = () => <Home link1={data[0].link} />
  const news = () => <News />
  const notfound = () => <NotFound404/>
  const login = () => <Login setTokenValue={setTokenValue} 
                             setNowLogin={setNowLogin} />

  return (
    <Router>
      <div className="App">
        <Navbar nowLogin={nowLogin}
                setNowLogin={setNowLogin} />
        <div style={{paddingTop: "175px"}}></div>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path = {data[0].link} component={content} />

          <Route path = '/news' component={news}/>
          <Route path = '/login' component={login} />
          <Route path = '/register'><Register/></Route>
          <Route path = '/privateData'><SecretData 
                                        tokenValue={tokenValue}
                                        /></Route>
          <Route path = '*' component={notfound}/>
        </Switch>  
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
