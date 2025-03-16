import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardList.scss";
import axios from "axios";
import { ClipLoader } from "react-spinners";

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
    return <ClipLoader />;
  }

  const filteredPhotos = photosList.filter((photo) => {
    if (!selectedTag) {
      return true;
    } else {
      return photo.tags.includes(selectedTag);
    }
  });

  return (
    <div className="card-list">
      {filteredPhotos.map((photo) => {
        return (
          <Card
            key={photo.id}
            photo={photo}
            tagsDrawerVisible={tagsDrawerVisible}
          />
        );
      })}
    </div>
  );
}
