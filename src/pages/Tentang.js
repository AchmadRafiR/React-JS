import { useState } from "react";

function Tentang() {
  
  const [count, setCount] = useState(0)

  function tambah() {
    setCount(count+1)
  }

  function kurang() {
    if (count > 0) {
      setCount(count-1)
    }
  }


    return (
      <div className="App">
        <h1>Tentang SMK REVIT : {count}</h1>
        <p>Isi Tentang smk revit</p>
        <button type="button" onClick={tambah} className="btn btn-dark">Tambah</button>
        <button type="button" onClick={kurang} className="btn btn-danger">Kurang</button>
      </div>
    );
  }
  
  export default Tentang;