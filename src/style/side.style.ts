import styled from "styled-components";

export const Side = styled.div`
  width: 295px;
  height: 100%;
  color: #fff;
  padding: 1em 0;
  overflow-y: scroll;
  position: fixed;
  left: 0;
  transition: all 0.4s ease;
  background: #000;
  z-index: 1111;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;

    .profilePic {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .icon {
      font-size: 21px;
      display: none;
      cursor: pointer;
    }
    img {
      width: 62px;
      height: 62px;
    }
    span {
      font-family: "Bw Modelica";
      font-style: normal;
      font-weight: 600 !important;
      font-size: 16px;
      line-height: 19px;
      color: #d9d9d9;
      margin-left: 1em;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: yello;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  @media (max-width: 1000px) {
    margin-left: -295px;
    background: #000;

    &.active {
      margin-left: 0px !important;
      width: 100%;
      z-index: 1111;
      background: #000;
      transition: all 0.4s ease;
    }
    nav {
      .icon {
        display: block;
      }
    }
  }
`;

export const List = styled.div`
  width: 90%;

  margin: 2em auto 0;
  .listCon {
    margin-bottom: 2.5em;
  }
  .playlist {
    justify-content: space-between;
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    align-item: center;
    list-style: none;
    margin-bottom: 1em;
    color: #d9d9d9;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  li:hover {
    color: #fbba12;
    transition: all 0.3s ease;
  }
  .icon2 {
    display: none;
    font-size: 21px;
    margin-left: 0.6em;
  }
  li:hover > .icon2 {
    display: block;
  }
  span {
    font-family: "Bw Modelica";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }

  .icon {
    font-size: 21px;
    margin-right: 0.6em;
  }
  .iconn {
    font-size: 21px;
  }

  .listCon2 {
    li {
      font-family: "Bw Modelica";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #d9d9d9;
    }
    li:hover {
      color: #fbba12;
      transition: all 0.3s ease;
    }
  }
`;
