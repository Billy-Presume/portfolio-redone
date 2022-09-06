import styled from "styled-components";
import {
  fontSizes,
  fontWeights,
  spacings,
  borderRadius,
} from "../design/infrastructure";

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BasicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpecialContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  overflow-x: wrap;
  overflow-y: auto;
  gap: 35px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #7d141d;
  margin-top: ${spacings.large};
  transition: ease 0.5s;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-size: ${fontSizes.small};
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 6.7px 0 0 6.7px;
  background-color: ${({ theme }) => theme.ui.button.primary};

  &:hover {
  }

  &:selected {
  }

  &:active {
  }
`;

export const BigText = styled.h1`
  font-size: ${fontSizes.bigText};
  color: ${({ theme }) => theme.ui.text.primary};
`;

export const Title = styled.h2`
  font-size: ${fontSizes.title};
  color: ${({ theme }) => theme.ui.text.secondary};
`;

export const BodyText = styled.h3`
  font-size: ${fontSizes.body};
  color: ${({ theme }) => theme.ui.text.tertiary};
`;

export const CaptionText = styled.h4`
  font-size: ${fontSizes.caption};
  color: ${({ theme }) => theme.ui.text.quaternary};
`;

export const SubCaptionText = styled.h5`
  font-size: ${fontSizes.subCaption};
  color: ${({ theme }) => theme.ui.text.quinary};
`;

export const ButtonText = styled.h6`
  font-size: ${fontSizes.button};
  color: ${({ theme }) => theme.ui.text.senary};
`;
