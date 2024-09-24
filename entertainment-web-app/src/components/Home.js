import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import HomeLogo from "../assets/icon-nav-home.svg";
import MovieLogo from "../assets/icon-nav-movies.svg";
import TvLogo from "../assets/icon-nav-tv-series.svg";
import BookmarkLogo from "../assets/icon-nav-bookmark.svg";
import AvatarLogo from "../assets/image-avatar.png"
import searchIcon from "../assets/icon-search.svg";
import Trending from "./HomeComponents/Trending";
import Recommmended from "./HomeComponents/Recommended";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div id="navBar">
                <img width={30} height={30} src={Logo} style={{marginTop: "4vh", position: "absolute"}} />
                <img width={22} height={22} src={HomeLogo} style={{marginTop: "16vh", position: "absolute"}} />
                <img onClick={() => navigate('/movies')} width={22} height={22} src={MovieLogo} style={{marginTop: "24vh", position: "absolute"}} />
                <img onClick={() => navigate('/tvseries')} width={20} height={20} src={TvLogo} style={{marginTop: "32vh", position: "absolute"}} />
                <img onClick={() => navigate('/bookmarked')} width={20} height={20} src={BookmarkLogo} style={{marginTop: "40vh", position: "absolute"}} />
                <img id="avatarImg" width={40} height={40} src={AvatarLogo} />
            </div>

            <div id="searchCanvas">
                <img id="searchLogo" src={searchIcon} />
                <input id="searchInput" type="text" placeholder="Search for movies or TV series" />
            </div>

            <h1 id="trendTitle">Trending</h1>
            <Trending />
            <Recommmended />
        </>
    );
}
