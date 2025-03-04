import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = "4eca160b-03d9-48da-9c9b-80ca921f8809";

export default function PhotoPage() {
  const [singlePhoto, setSinglePhoto] = useState(null);
  const { photoId } = useParams();
  console.log(photoId);
  const fetchPhoto = async () => {
    try {
      const { data } = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}?api_key=${API_KEY}`
      );
      console.log(data);
      setSinglePhoto(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  if (!singlePhoto) {
    return <p>Loading...</p>;
  }

  return <img src={singlePhoto.photo} alt="" />;
}
