import React from 'react';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import Images from "./components/Images";

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Images/>
    </div>
  );
}

export default App;
