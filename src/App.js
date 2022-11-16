import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  state ={
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() { 
    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
      {console.log(this.apiKey)}
        <Routes>
          <Route path="/" element={<News key="general" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='general'/>} />
          <Route path="/business" element={<News key="business" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='business'/>} />
          <Route path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='entertainment'/>} />
          <Route path="health" element={<News key="health" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='health'/>} />
          <Route path="/science" element={<News key="science" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='science'/>} />
          <Route path="/sports" element={<News key="sports" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='sports'/>} />
          <Route path="/technology" element={<News key="technology" apiKey={this.apiKey} setProgress={this.setProgress} country="in" category='technology'/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
 
export default App;