// import React, {useState, useEffect} from "react";
// import {Imag, ImageContainer, PostContainer} from './ImagesElements'

const Images = ({author, url}) => {


  return (

<div>
<h2>{author}</h2>
<img src = {url} alt = {`random grab from ${author}`}/> 
</div>

      );

};

export default Images
