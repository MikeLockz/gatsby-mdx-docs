import React from "react";
import { Layout, Link } from "$components";
import { Backpack } from "react-kawaii";
import { useRef, useState, useEffect } from "react";
import { color } from "../components/color";
import { Navigation } from "../components/navigation";
import { Button, Link as RimbleUILink } from "rimble-ui";

// Import from old landing page
import styled from "styled-components";
import RimbleLink from "../components/landing/RimbleLink";
import ThemeProvider from "../components/landing/ThemeProvider";
import Typography from "../components/landing/typography";
import Container from "../components/landing/Container";
import CodeBlock from "../components/landing/CodeBlock";
import Heading from "../components/landing/Heading";
import Text from "../components/landing/Text";
import Hr from "../components/landing/Hr";
import { Flex, Box } from "../components/landing/Box";
import Head from "../components/landing/head";
import Nav from "../components/landing/nav";
import Header from "../components/landing/header";
import Footer from "../components/landing/footer";
import ReactSVG from "react-svg";
import { borderRadius, boxShadow, backgroundImage } from "styled-system";

// Import for page content
import WhatIsGatsby from "../homepage-sections/what-is-gatsby.mdx";
import WhatIsMDX from "../homepage-sections/what-is-mdx.mdx";
import WhatCanIDo from "../homepage-sections/what-can-i-do.mdx";

const Masthead = styled(Flex)`
  position: relative;
  min-height: calc(100vmax / 7 * 2.5);
  width: 100%;
  margin-top: 64px;
  padding: 2rem 0;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background: #f2f4f7;
  overflow: hidden;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  background-image: url("/static/svg/fig-bg.svg") ${backgroundImage};
`;

const exampleCode = `
import React, { Component } from 'react'

import { Button } from 'rimble-ui'

class Example extends Component {
  render () {
    return (
      <Button size={'medium'}>
        Click me!
      </Button>
    )
  }
}
`;

const HomePage = () => (
  <ThemeProvider>
    <React.Fragment>
      <Typography />

      <Nav />
      <main role="main">
        <Masthead
          backgroundImage={["none", "none", 'url("/static/svg/fig-bg.svg")']}
        >
          <Container>
            <Header />
          </Container>
        </Masthead>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[3, 4]}>Why Rimble?</Heading.h1>
              <Hr />
              <Text.p fontSize={[1, 2]}>
                Decentralized applications (dApps) require users to learn new
                patterns and they present new hurdles for designers and
                front-end developers. Rimble is here to make life easier for
                everyone. As an open source project, Rimble aims to create
                common dApp UX patterns, validated through user research, and
                built for developers.
              </Text.p>

              <Flex mt={4} width={1} flexDirection={["column", "row"]}>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-1.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]} fontWeight={1}>
                    Flexible
                  </Heading.h2>
                  <Text.p>
                    Your tech stack and workflow are yours to decide. We impose
                    as few constraints as possible.{" "}
                  </Text.p>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]} mr={5}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-2.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]} fontWeight={1}>
                    Research-driven
                  </Heading.h2>
                  <Text.p>
                    We are constantly talking to dApp designers, developers, and
                    users to understand common challenges and effective UI
                    patterns.{" "}
                  </Text.p>
                </Box>
                <Box flex={"1 1 auto"} width={[1, 1 / 3]}>
                  <Flex my={3}>
                    <ReactSVG src="/static/svg/fig-3.svg" />
                  </Flex>
                  <Heading.h2 fontSize={[2, 3]} fontWeight={1}>
                    Human
                  </Heading.h2>
                  <Text.p>
                    Blockchain is confusing. We are a dedicated team, invested
                    in being understandable and approachable.
                  </Text.p>
                </Box>
              </Flex>
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              {/* body section */}
              <Heading.h1 id="getting-started" fontSize={[3, 4]}>
                Getting Started
              </Heading.h1>
              <Hr />
              <Heading.h2 fontSize={2} fontWeight={1}>
                Installation
              </Heading.h2>
              <CodeBlock
                code={"$ npm install --save rimble-ui styled-components"}
              />
              <Heading.h2 fontSize={2} fontWeight={1}>
                Usage
              </Heading.h2>
              <CodeBlock code={exampleCode} />
            </Box>
          </Container>
        </section>
        <section>
          <Container>
            <Box my={5}>
              <Heading.h1 fontSize={[3, 4]}>
                Made by ConsenSys Design
              </Heading.h1>
              <Hr />
              <Text.p>
                Rimble is created by{" "}
                <RimbleLink
                  href="//consensys.design/"
                  target="_blank"
                  rel="noopener"
                >
                  ConsenSys Design.
                </RimbleLink>{" "}
                Want to help us define the roadmap? Submit feedback or feature
                requests on the{" "}
                <RimbleLink
                  href="//github.com/ConsenSys/rimble-ui"
                  target="_blank"
                  rel="noopener"
                >
                  Rimble
                </RimbleLink>{" "}
                GitHub page.
              </Text.p>
            </Box>
          </Container>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

const GetStarted = () => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem"
      }}
    >
      <div css={{}}>
        <Button as={Link} href="/getting-started">
          Get Started
        </Button>
      </div>
    </div>
  );
};

const HomePage2 = () => {
  return (
    <div
      css={{
        color: color.dark
      }}
    >
      <Navigation />
      <div
        css={{
          padding: "20rem 4rem",
          textAlign: "center"
        }}
      >
        <h1>RIMBLE</h1>
        <h2>dApp UX Resources</h2>
        <GetStarted />
      </div>
      <Section bgColor={color.white} color={color.dark}>
        <div css={{ flex: 1, padding: "0 1rem" }}>
          {/* <WhatIsGatsby location={{ pathname: "/" }} /> */}
          <h3>Design Guidelines</h3>
        </div>
        <div css={{ flex: 1, padding: "0 1rem" }}>
          {/* <WhatIsMDX location={{ pathname: "/" }} /> */}
          <h3>React Components</h3>
        </div>
      </Section>
      <Section bgColor={color.dark} color={color.white}>
        {/* <WhatCanIDo location={{ pathname: "/" }} /> */}
        <div>
          <h3>Recent Updates</h3>
          <h4>0.6</h4>- Tables - Bug fixes
          <h4>0.5</h4>- Better form validation - uPort connect button - Upgraded
          to Storybook 5 - Bug fixes
        </div>
      </Section>
    </div>
  );
};

const Section = ({ children, bgColor, color }) => (
  <div
    css={{
      background: bgColor,
      color,
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }}
  >
    <div
      css={{
        maxWidth: "960px",
        display: "flex",
        margin: "auto",
        lineHeight: "1.5",
        "& li": { marginTop: ".5rem" }
      }}
    >
      {children}
    </div>
  </div>
);

export default HomePage;
