import React from "react";
import * as S from "./styled";
import Profile from "../profile";
import Repositories from "../repositories";

const NoSearch = () => {
  return (
    <S.Wrapper>
        <Profile />
        <Repositories />
    </S.Wrapper>
  );
};

export default NoSearch;