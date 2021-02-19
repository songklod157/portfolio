import React,{ Component } from 'react';
import './App.css';
import axios from 'axios';
import{Route} from 'react-router-dom';
import Send from './components/lib/Send';
import User from './components/User';
import Card from './components/Card';

class App extends Component{
  state = {
    name: 'Skooldio'
  };

  onNameChange = name =>{
    this.setState({ name: name });
  };

  render() {
    const {name} = this.state;

  return (
  <div>
    <div>
         Hello {name}
    </div>
    <Card />
    <Route path="/" component= {()=> (
      <Send url = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json">
        {data => <User data={data} />}
      </Send>
    )}
    />

  </div>
  );
}
}

export default App;
