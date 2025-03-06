import "./PhotoPage.scss";

import LargeCard from "../../components/LargeCard/LargeCard";
import CommentList from "../../components/CommentList/CommentList";

export default function PhotoPage() {
  return (
    <div className="photopage__content">
      <LargeCard />
      <CommentList />
    </div>
  );
}
