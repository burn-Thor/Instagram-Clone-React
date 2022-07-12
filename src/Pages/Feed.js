import {useState, useEffect} from "react";
import {fetchPhotos} from "../utils"
import Images from "../components/Images"

const Feed = ({user}) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos(setPhotos);
    }, []);

    return(
        <>
        <h1>{user}</h1>
        {photos.map((item, i) => {
            return <Images key={i} author={item.author} url={item.download_url} />;
        })}
        </>
    );
};

export default Feed;