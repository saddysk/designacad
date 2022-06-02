import React from "react";
import { Box, Stack } from "@mui/material";
import {
  Container,
  HeaderLink,
  Logo,
  Quote,
  Title,
  WaitlistButton,
} from "./hero.components";

const links = [
  {
    text: "Twitter",
    url: "https://twitter.com/designacadhq",
  },
  {
    text: "Newsletter",
    url: "https://www.getrevue.co/profile/designacadhq",
  },
  {
    text: "Donate",
    url: "https://www.buymeacoffee.com/designacad",
  },
];

function WaitList() {
  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pl={{ xs: 3.25, sm: 6.25, md: 12 }}
        pr={{ sm: 7.5, md: 13 }}
      >
        <Stack direction="row" pt={3}>
          <Logo>design</Logo>
          <Logo custom="#0a88ff">acad.</Logo>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
          pt={3}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          {links.map((data) => {
            return (
              <HeaderLink component="a" href={data.url} target="_blank">
                {data.text}
              </HeaderLink>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3.5}
        sx={{ width: "100%", height: "85%" }}
      >
        <Title
          sx={{
            width: { xs: 308, sm: "initial" },
            fontSize: { xs: "40px", sm: "64px" },
            lineHeight: { xs: "40px", sm: "64px" },
          }}
        >
          We will be live soon...
        </Title>
        <Quote sx={{ width: { xs: 221, sm: "initial" } }}>
          Be the first one to be reminded when we go live
        </Quote>
        <WaitlistButton
          component="a"
          href="https://www.getrevue.co/profile/designacadhq"
          target="_blank"
        >
          Join Waitlist
        </WaitlistButton>
      </Stack>
    </Container>
  );
}

export default WaitList;
