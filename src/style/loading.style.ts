import styled from "styled-components";

export const Load = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: black;
  color: #fff;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hide {
    overflow: hidden;
  }

  .d,
  .x {
    height: 30px;
    width: 30px;
    margin-right: 0.5em;
    transform: translateY(120%);
    display: inline-block;
  }
  .u {
    height: 20px;
    width: 30px;
    margin-right: 0.5em;
    transform: translateY(120%);
    display: inline-block;
  }
`;