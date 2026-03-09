import { useParams } from "react-router-dom";
import "./Trailer.css";

const Trailer = () => {

  const { ytTrailerId } = useParams();

  console.log("Trailer ID:", ytTrailerId);

  return (
    <div className="react-player-container">
      {ytTrailerId && (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${ytTrailerId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Trailer;