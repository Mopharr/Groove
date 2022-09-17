import { Board, Main, Top, Bottom } from "../style/board.style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <Board>
      <nav>
        <div className="arrow">
          <IoIosArrowBack className="icon" />
          <IoIosArrowForward className="icon" />
        </div>

        <div className="input">
          <BsSearch className="icon" />
          <input type="text" placeholder="search" />
        </div>
      </nav>

      <Main>
        <Top>
          <img src="/Text.png" alt="text" className="pic1" />

          <img src="/OmahLay.png" alt="omah" className="pic2" />
        </Top>
        <h1>Welcome Back!</h1>

        <Bottom>
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

        <Bottom>
          <h1>Cheers to the Weekend </h1>

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
      </Main>
    </Board>
  );
}

export default App;
