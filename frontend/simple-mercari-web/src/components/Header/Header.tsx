import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from '../../logo.png';

/* font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const Header: React.FC = () => {
  const [cookies, _, removeCookie] = useCookies(["userID", "token"]);
  const navigate = useNavigate();

  const onLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    removeCookie("userID");
    removeCookie("token");
  };

  return (
    <>
      <header>
        <div className="headerWrapper">
          <div className="LogoContainer" onClick={() => navigate("/")}>
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <div className="searchContainer">
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
            {/* adding search icon  */}
            <input type="text" id="MerTextInput" className="SearchBar"  placeholder={`何をお探しですか ${<FontAwesomeIcon icon={faMagnifyingGlass} />}`}/>
          </div>
          <div className="navContainer">
            <span className="navButton" onClick={() => navigate("/")}>Home</span>
            <span className="navButton" onClick={() => navigate("/sell")}>Listing</span>
            <span className="navButton" onClick={() => navigate(`/user/${cookies.userID}`)}>MyPage</span>
          </div>
          <div className="LogoutButtonContainer">
            <button onClick={onLogout} id="MerButton">
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
