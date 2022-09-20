import styled from "styled-components";
import { FaGithub } from 'react-icons/fa';


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  background-color: #24292e;


  input {
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    font-weight: 500;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.13);
    border: none;
    text-align: center;
  }

  button {
    background-color: #238636;
    padding: 6px 12px;
    margin: 0 16px;
    border-radius: 8px;
    font-size: 12px;

    &:hover {
      background-color: #2ea043;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: #fff;
  width: 40px;
  height: 40px;
  margin: 0 16px;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;