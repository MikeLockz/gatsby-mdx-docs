import React from "react";
import { Backpack } from "react-kawaii";
import { useRef, useState, useEffect } from "react";
import { color } from "../components/color";
import { Navigation } from "../components/navigation";
import { Button, Link } from "rimble-ui";

import WhatIsGatsby from "../homepage-sections/what-is-gatsby.mdx";
import WhatIsMDX from "../homepage-sections/what-is-mdx.mdx";
import WhatCanIDo from "../homepage-sections/what-can-i-do.mdx";

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

const GetStarted = () => {
  const [hoverRef, isHovered] = useHover();

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

const HomePage = () => {
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
