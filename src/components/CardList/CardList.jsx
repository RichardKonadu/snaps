import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardList.scss";
import axios from "axios";

export default function CardList({ selectedTag, tagsDrawerVisible }) {
  const [photosList, setPhotosList] = useState(null);

  const fetchPhotos = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/photos`
      );
      setPhotosList(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (!photosList) {
    return;
  }

  const filteredPhotos = photosList.filter((photo) => {
    if (!selectedTag) {
      return true;
    } else {
      return photo.tags.includes(selectedTag);
    }
  });

  return (
    <div className="cardlist">
      {filteredPhotos.map((photo, index) => {
        return (
          <Card
            key={index}
            photo={photo}
            tagsDrawerVisible={tagsDrawerVisible}
          />
        );
      })}
    </div>
  );
}
