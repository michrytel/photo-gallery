import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import Images from "./components/Images";
import Modal from "./components/Modal";

function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
    <div className="App">
      <Title/>
      <UploadForm/>
        <Images setSelectedImg={setSelectedImg} />
        { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </div>
  );
}

export default App;
