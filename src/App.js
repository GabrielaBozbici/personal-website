import React, {Component} from 'react';

import TopBar from './components/TopBar';
import TopSide from './components/TopSide'
import About from './components/About';
import Contact from './components/Contact';
import PhotosDear from './components/PhotosDear';
import Resume from './components/Resume';

//styles
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <TopSide/>
        <About />
        <Resume />
        <PhotosDear/>
        <Contact/>
      </div>
    )
  }
}

export default App;
