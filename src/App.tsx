import React from 'react';
import { Entrance } from './entrance';
import axios from 'axios';
function App() {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files 
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      await axios
        .post("https://my-json-server.typicode.com/dkbrownn/demo/posts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
        axios.get("https://my-json-server.typicode.com/dkbrownn/demo/posts");
    }
  }
  return (
    <>
      <Entrance />
      {/* <div>
        <form action="" method='post' encType="multipart/form-data" >
        <input type='file' name='myFile'/>
        <button type='submit'>Submit</button>
        </form>
      </div> */}
      <div style={{
        marginTop: "100px",
        marginLeft: "100px"
      }}>
        <input type='file' onChange={handleChange}/>
      </div>
    </>
  );
  
}

export default App;
