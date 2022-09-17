import { Side, List } from "../style/side.style";
import { GiHut, GiLoveSong, GiSpeaker } from "react-icons/gi";
import { RiEye2Line, RiPlayListAddLine } from "react-icons/ri";
import { BsFillMusicPlayerFill, BsSearch } from "react-icons/bs";
import { MdOutlineAlbum } from "react-icons/md";
import { ImDrawer } from "react-icons/im";
import { FaTimes } from 'react-icons/fa'



const App:React.FC<any> =({open, togle}) =>  {
  return (
    <Side className={open ? "active" : undefined}>
      <nav>
        <div className="profilePic">
          <img src="/profile.png" alt="" />
          <span>Hey! Aleem</span>
        </div>

        <FaTimes className="icon" onClick={togle} />
      </nav>

      <List>
        <div className="listCon">
          <ul>
            <li>
              <GiHut className="icon" /> <span>Home</span>
              <GiSpeaker className="icon2" />
            </li>
            <li>
              <RiEye2Line className="icon" /> <span>Discover</span>
              <GiSpeaker className="icon2" />
            </li>
          </ul>
        </div>
        <div className="listCon">
          <ul>
            <li>
              <MdOutlineAlbum className="icon" /> <span>Your Library</span>
              <GiSpeaker className="icon2" />
            </li>
            <li>
              <GiLoveSong className="icon" /> <span>Liked Songs</span>
              <GiSpeaker className="icon2" />
            </li>
            <li>
              <BsFillMusicPlayerFill className="icon" />
              <span>Recent Played</span>
              <GiSpeaker className="icon2" />
            </li>
            <li>
              <RiPlayListAddLine className="icon" />
              <span>Create Playlist</span>
              <GiSpeaker className="icon2" />
            </li>
          </ul>
        </div>
        <div className="listCon">
          <ul>
            <li className="playlist">
              <div>
                <ImDrawer className="icon" /> <span>My Playlists</span>
                <GiSpeaker className="icon2" />
              </div>
              <BsSearch className="iconn" />
            </li>
          </ul>
        </div>
        <div className="listCon2">
          <ul>
            <li className="">Riffs & Runs</li>
            <li>African Heat</li>
            <li> Gidi Nights</li>
            <li>Running out of Playlist na....</li>
            <li>Saturday was a Good Day</li>
            <li>Gidi Nights</li>
            <li>African Heat</li>
            <li>Riffs & Runs</li>
            <li>Saturday was a Good Day</li>
            <li>Gidi Nights</li>
            <li>Gidi Nights</li>
            <li>African Heat</li>
            <li>Running out of Playlist na....</li>

            <li>Running out of Playlist na....</li>
          </ul>
        </div>
      </List>
    </Side>
  );
}

export default App;
