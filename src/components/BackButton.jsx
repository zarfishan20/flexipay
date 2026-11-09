import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "./Icons";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="back-btn" onClick={() => navigate(-1)}>
      <ArrowLeft width={16} height={16} /> Back
    </button>
  );
}
export default BackButton;
