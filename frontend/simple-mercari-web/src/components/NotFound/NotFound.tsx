import { useNavigate } from "react-router-dom";
import notfoundlogo from '../../notfoundlogo.jpg';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Login">
          <img className="notfoundlogo" src={notfoundlogo} alt="Not found" />
          <p className="firstline">ページが見つかりませんでした</p>
          <p className="secondline">お探しのページはURLが間違っているか、削除された可能性があります。</p>
          <button onClick={() => navigate("/")} id="MerButton">
            Back to SignUp/Login page
          </button>
        </div>
    </div>
  );
};
