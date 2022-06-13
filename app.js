import React from "react";
import "./App.css";
import C from "./Components/C";
import { useState } from "react";
import InputForm from "./Components/InputForm";
import QRCode from "qrcode.react";
import { useEffect } from "react";
function App() {
  //get svg element.
  // var svg = document.getElementById("123456");

  const [data, setData] = useState({});

  const QrData = JSON.stringify(data);

  return (
    <div className="App">
      <div>
        <InputForm setData={setData} />

        
      </div>
      <div className="QRCode">
      <QRCode
          value={QrData}
          renderAs="svg"
          level="H"
          fgColor="#333"
          bgColor="#fff"
          id="123456"
        />
        <br></br>
        <a
          href={`https://api.qrserver.com/v1/create-qr-code/?size=300x350&data=${QrData}`}
          download
        >
          Download QR
        </a>
      </div>

      {/* <div><h2>here</h2>
        <img src=`https://api.qrserver.com/v1/create-qr-code/?size=300x350&data=${QrData} ` height={200} width={200}/>
         </div> */}
    </div>
  );
}

export default App;
