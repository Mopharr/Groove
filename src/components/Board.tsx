import { Board, Main, Top, Bottom, Footer } from "../style/board.style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiEye2Line } from "react-icons/ri";
import { MdOutlineAlbum } from "react-icons/md";
import { GiHamburgerMenu, GiHut, GiLoveSong } from "react-icons/gi";

const App: React.FC<any> = ({ togle }) => {
  return (
    <Board>
      <nav>
        <img src="/profile.png" alt="" className="profile" />
        <div className="arrowCap">
          <div className="arrow">
            <IoIosArrowBack className="icon" />
            <IoIosArrowForward className="icon" />
          </div>

          <div className="input">
            <BsSearch className="icon" />
            <input type="text" placeholder="search" />
          </div>
        </div>

        <GiHamburgerMenu className="hamburger" onClick={togle} />
      </nav>

      <Main>
        <Top>
          <img src="/Text.png" alt="text" className="pic1" />

          <img src="/OmahLay.png" alt="omah" className="pic2" />
        </Top>
        <h1>Welcome Back!</h1>

        <Bottom className="bottom">
          <div className="playlist">
            <div className="daily">
              <div className="left"></div>
              <div className="center">
                <img src="/daily3.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 1</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily1">
              <div className="left"></div>
              <div className="center">
                <img src="/daily2.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 2</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily2">
              <div className="left"></div>
              <div className="center">
                <img src="/daily1.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 3</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily">
              <div className="left"></div>
              <div className="center">
                <img src="/daily3.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 1</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily1">
              <div className="left"></div>
              <div className="center">
                <img src="/daily2.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 2</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily2">
              <div className="left"></div>
              <div className="center">
                <img src="/daily1.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 3</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
          </div>
        </Bottom>
        <h1>Cheers to the Weekend </h1>

        <Bottom className="bot">
          <div className="playlist">
            <div className="daily">
              <div className="left"></div>
              <div className="center">
                <img src="/daily3.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 1</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily1">
              <div className="left"></div>
              <div className="center">
                <img src="/daily2.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 2</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily2">
              <div className="left"></div>
              <div className="center">
                <img src="/daily1.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 3</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily">
              <div className="left"></div>
              <div className="center">
                <img src="/daily3.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 1</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily1">
              <div className="left"></div>
              <div className="center">
                <img src="/daily2.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 2</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
            <div className="daily2">
              <div className="left"></div>
              <div className="center">
                <img src="/daily1.png" alt="" />
              </div>
              <div className="right"></div>
              <div className="playlistCon">
                <h3>Daily Vibes 3</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage ....</p>
              </div>
            </div>
          </div>
        </Bottom>

        <Footer>
          <GiHut className="icon" />
          <RiEye2Line className="icon" />
          <MdOutlineAlbum className="icon" />
          <GiLoveSong className="icon" />
        </Footer>
      </Main>
    </Board>
  );
};

export default App;
