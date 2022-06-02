import styled from "styled-components";
import { Typography, ButtonBase, Box } from "@mui/material";

export const Container = styled(Box)`
  && {
    background-color: #000;
    width: 100vw;
    height: 100vh;
  }
`;

export const Logo = styled(Typography)`
  && {
    font-family: "Pacifico";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    color: ${(props) => props.custom || "#FFFFFF"};
  }
`;

export const HeaderLink = styled(Typography)`
  && {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Title = styled(Typography)`
  && {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const Quote = styled(Typography)`
  && {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #a9a9a9;
  }
`;

export const WaitlistButton = styled(ButtonBase)`
  && {
    width: 138px;
    height: 44px;
    background: #0a88ff;
    border-radius: 6px;

    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
`;
