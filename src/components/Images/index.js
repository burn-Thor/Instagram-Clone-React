import React, {useState, useEffect} from "react";
import {Image, ImageContainer} from './ImagesElements'

const Images = () => {
  const [user, setUser] = useState("")  
  const [photos, setPhotos] = useState([]);
    const fetchImages = async()=>{
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      setPhotos(data);
    }
  
    useEffect(() => {
      fetchImages()
    }, [user])

  return (
    
 <ImageContainer>
    <Image
    {...photos.map((item, index) => {
      return(
    <>
      <h2>{item.author}</h2>
      <img src = {item.download_url} alt = "random from Lorem Picsum"></img>
    </>  
        )
      })} >
    </Image>
  </ImageContainer>
    
 
  )
}

export default Images
