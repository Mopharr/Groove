import { Side, List } from "../style/side.style";
import { GiHut, GiLoveSong } from "react-icons/gi";
import { RiEye2Line, RiPlayListAddLine } from "react-icons/ri";
import { BsFillMusicPlayerFill, BsSearch } from "react-icons/bs";
import { MdOutlineAlbum } from "react-icons/md";
import { ImDrawer } from "react-icons/im";



function App() {
  return (
      <Side>
        <nav>
          <img src="/profile.png" alt="" />
          <span>Hey! Aleem</span>
        </nav>

        <List>
          <div className="listCon">
            <ul>
              <li>
                <GiHut className="icon" /> <span>Home</span>
              </li>
              <li>
                <RiEye2Line className="icon" /> <span>Discover</span>
              </li>
            </ul>
          </div>
          <div className="listCon">
            <ul>
              <li>
                <MdOutlineAlbum className="icon" /> <span>Your Library</span>
              </li>
              <li>
                <GiLoveSong className="icon" /> <span>Liked Songs</span>
              </li>
              <li>
                <BsFillMusicPlayerFill className="icon" />
                <span>Recent Played</span>
              </li>
              <li>
                <RiPlayListAddLine className="icon" />
                <span>Create Playlist</span>
              </li>
            </ul>
          </div>
          <div className="listCon">
            <ul>
              <li className="playlist">
                <div>
                  <ImDrawer className="icon" /> <span>My Playlists</span>
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
