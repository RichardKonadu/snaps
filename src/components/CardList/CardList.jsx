import Card from "../Card/Card";
import "./CardList.scss";
import photoData from "../../data/photos.json";

export default function CardList() {
  return (
    <div className="cardlist">
      {photoData.map((photo) => {
        return <Card key={photo.id} photo={photo} />;
      })}
    </div>
  );
}
