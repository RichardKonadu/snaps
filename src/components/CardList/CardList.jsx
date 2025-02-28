import Card from "../Card/Card";
import "./CardList.scss";

export default function CardList({ photosData, selectedTag }) {
  const filteredPhotos = photosData.filter((photo) => {
    if (!selectedTag) {
      return true;
    } else {
      return photo.tags.includes(selectedTag);
    }
  });

  return (
    <div className="cardlist">
      {filteredPhotos.map((photo, id) => {
        return <Card key={id} photo={photo} />;
      })}
    </div>
  );
}
