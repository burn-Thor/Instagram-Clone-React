import React, {useState, useEffect} from 'react'
import './App.css';
import Images from "./components/Images";

const App = () => {
  return(
  <Images />

  )
  //   const [user, setUser] = useState("")
  //   const [photos, setPhotos] = useState([]);
  //   const fetchImages = async()=>{
  //     const response = await fetch("https://picsum.photos/v2/list");
  //     const data = await response.json();
  //     setPhotos(data);
  //   }
  
  //   useEffect(() => {
  //     fetchImages()
  //   }, [user])
      

  // return (
  //   <div className = "App">
  //     <h1>Instagram Clone</h1>
   
   
  //   {photos.map((item, index) => {
  //     return(
  //     <div>
  //     <h2>{item.author}</h2>
  //     <img src = {item.download_url} alt = "random from Lorem Picsum"></img>
  //     </div>
  //       );
  //     })}
  

  //   </div>
    
  // );
};

export default App;
