import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  //setProgress(progress);

    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route path="/" element={<News key="general" apiKey={apiKey} setProgress={setProgress} country="in" category='general'/>} />
          <Route path="/business" element={<News key="business" apiKey={apiKey} setProgress={setProgress} country="in" category='business'/>} />
          <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} country="in" category='entertainment'/>} />
          <Route path="health" element={<News key="health" apiKey={apiKey} setProgress={setProgress} country="in" category='health'/>} />
          <Route path="/science" element={<News key="science" apiKey={apiKey} setProgress={setProgress} country="in" category='science'/>} />
          <Route path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={setProgress} country="in" category='sports'/>} />
          <Route path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={setProgress} country="in" category='technology'/>} />
        </Routes>
      </BrowserRouter>
    );
}
 
export default App;