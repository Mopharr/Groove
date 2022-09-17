import styled from "styled-components";

export const Side = styled.div`
  width: 295px;
  height: 100%;
  color: #fff;
  padding: 1em 0;
  overflow-y: scroll;
  position: fixed;
  left: 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    margin: auto;

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

  ::-webkit-scrollbar {
    width: 3px;
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
