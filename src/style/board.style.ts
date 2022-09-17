import styled from "styled-components";

export const Board = styled.div`
  position: relative;
  left: 295px;
  width: calc(100% - 295px);
  //   padding 1em;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: #0f0f0f;
    z-index: 11;
    top: 0;
    padding-top: 1em;
    .profile {
      display: none;
      height: 49px;
      width: 49px;
    }

    .arrowCap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .arrow {
      margin-right: 2em;

      .icon {
        color: #d9d9d9;
        width: 48px;
        font-size: 40px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .icon:hover {
        color: #fbba12;
        transition: all 0.3s ease;
      }
    }
    .input {
      width: 471px;
      height: 56px;
      border: 1px solid #0f0f0f;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 0.3s ease;
      cursor: pointer;

      .icon {
        color: #d9d9d9;
        font-size: 20px;
        width: 60px;
      }

      input {
        background: transparent;
        height: 100%;
        width: calc(100% - 60px);
        border: none;
        outline: none;
        color: #d9d9d9;
      }
      .input[placeholder] {
        font-size: 19px;
        color: #d9d9d9;
      }
    }
    .input:hover {
      border: 1px solid #d9d9d9;
    }

    @media (max-width: 768px) {
      .profile {
        display: block;
        margin-left: 1em;
      }
      .arrowCap {
        display: none;
      }
    }
  }
  .hamburger {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    left: 0;
    width: 100%;

    .hamburger {
      display: block;
      font-size: 30px;
      color: #fff;
      margin-right: 1em;
    }
  }
`;

export const Main = styled.div`
  margin-top: 6em;
  width: 100%;

  h1 {
    font-family: "Bw Modelica";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin: 1em 0 2em 0.5em;
  }
`;

export const Top = styled.div`
  background: url(/back.png);
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  position: relative;

  .pic1 {
    position: absolute;
    top: 5%;
    left: 2%;
    width: 143px;
    height: 38px;
  }
  .pic2 {
    position: absolute;
    bottom: 5%;
    right: 2%;
    width: 387px;
    height: 112px;
  }
`;

export const Bottom = styled.div`
  margin: 1em;

  &.bot {
    margin-bottom: 4em;
  }

  // h1 {
  //   font-family: "Bw Modelica";
  //   font-style: normal;
  //   font-weight: 700;
  //   font-size: 28px;
  //   line-height: 34px;
  //   letter-spacing: 0.04em;
  //   color: #ffffff;
  //   margin: 1em 0 1em ;
  // }

  .playlist {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .daily {
    width: 226.38px;
    height: 285.01px;
    border: 1px solid #707070;
    padding: 1em 0;
    position: relative;
    cursor: pointer;

    .left {
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%);
    }
    .right {
      position: absolute;
      bottom: 5%;
      right: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%);
    }
    .playlistCon {
      position: absolute;
      bottom: 5%;
      z-index: 1;
      width: 100%;
      height: 74.92px;
      background: linear-gradient(89.79deg, #ab491c -19.39%, #ddae45 123.38%);

      h3 {
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.04em;
        color: #ffffff;
        margin: 0.3em 1em 0 0.3em;
      }
      p {
        width: 90%;
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.9);
        margin-left: 1em;
      }
    }

    .center {
      position: absolute;
      width: 185.66px;
      height: 255.7px;
      background: #000;
      z-index: 1;
      border: 1px solid #707070;
      padding: 0.3em 0.5em;
      left: 50%;
      transform: translateX(-50%);
    }
    img {
      width: 100%;
    }
  }

  .daily1 {
    width: 226.38px;
    height: 285.01px;
    border: 1px solid #707070;
    padding: 1em 0;
    position: relative;
    cursor: pointer;

    .left {
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #c61522 -19.39%, #030304 123.38%);
    }
    .right {
      position: absolute;
      bottom: 5%;
      right: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #c61522 -19.39%, #030304 123.38%);
    }
    .playlistCon {
      position: absolute;
      bottom: 5%;
      z-index: 1;
      width: 100%;
      height: 74.92px;
      background: linear-gradient(89.79deg, #c61522 -19.39%, #030304 123.38%);

      h3 {
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.04em;
        color: #ffffff;
        margin: 0.3em 1em 0 0.3em;
      }
      p {
        width: 90%;
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.9);
        margin-left: 1em;
      }
    }

    .center {
      position: absolute;
      width: 185.66px;
      height: 255.7px;
      background: #000;
      z-index: 1;
      border: 1px solid #707070;
      padding: 0.3em 0.5em;
      left: 50%;
      transform: translateX(-50%);
    }
    img {
      width: 100%;
    }
  }
  .daily2 {
    width: 226.38px;
    height: 285.01px;
    border: 1px solid #707070;
    padding: 1em 0;
    position: relative;
    cursor: pointer;

    .left {
      position: absolute;
      bottom: 5%;
      left: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #3d66a8 -19.39%, #91aac7 123.38%);
    }
    .right {
      position: absolute;
      bottom: 5%;
      right: 0;
      width: 20.36px;
      height: 236.15px;
      background: linear-gradient(89.79deg, #3d66a8 -19.39%, #91aac7 123.38%);
    }
    .playlistCon {
      position: absolute;
      bottom: 5%;
      z-index: 1;
      width: 100%;
      height: 74.92px;
      background: linear-gradient(89.79deg, #3d66a8 -19.39%, #91aac7 123.38%);

      h3 {
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.04em;
        color: #ffffff;
        margin: 0.3em 1em 0 0.3em;
      }
      p {
        width: 90%;
        font-family: "Bw Modelica";
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.04em;
        color: rgba(255, 255, 255, 0.9);
        margin-left: 1em;
      }
    }

    .center {
      position: absolute;
      width: 185.66px;
      height: 255.7px;
      background: #000;
      z-index: 1;
      border: 1px solid #707070;
      padding: 0.3em 0.5em;
      left: 50%;
      transform: translateX(-50%);
    }
    img {
      width: 100%;
    }
  }

  //   Media Query

  @media (max-width: 1400px) {
    ::-webkit-scrollbar {
      width: 200px;
    }
    overflow-x: scroll;

    .playlist {
      width: 1440px;
    }
  }
`;

export const Footer = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    height: 78px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    background: #000;
    z-index: 111;
    bottom: 0;
    justify-content: space-around;
    color: #fff;

    .icon {
      font-size: 30px;
      transform: translate all 0.4s ease;
      cursor: pointer;
    }
    .icon:hover {
      color: #fbba12;
      transform: translate all 0.4s ease;
    }
  }
`;
