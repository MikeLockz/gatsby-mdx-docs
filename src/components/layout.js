import React from "react";
import { css } from "@emotion/core";

import ThemeProvider from "../components/landing/ThemeProvider";
import { Navigation } from "../components/navigation";
import Nav from "../components/landing/nav";
import GatsbySidebar from "./gatsby-sidebar";
import { Box } from "rimble-ui";

const Layout = ({ children, location, itemList }) => (
  <ThemeProvider>
    <React.Fragment>
      <Box height={4} padding={2} />
      <Nav />
      <div
        css={css`
          display: flex;
          justify-content: space-between;

          @media only screen and (max-width: 50rem) {
            display: block;
          }
        `}
      >
        <GatsbySidebar location={location} itemList={itemList} />
        <main
          css={css`
            display: flex;
            flex-grow: 1;
            justify-content: center;
            margin: 0;
            padding-left: 20rem;
            width: 100%;

            @media only screen and (max-width: 50rem) {
              padding-left: 0;
            }
          `}
        >
          <div
            css={css`
              max-width: 100%;
              width: 50rem;
              padding: 0 2rem;
              margin-top: 50px;

              @media only screen and (max-width: 50rem) {
                width: 100%;
                position: relative;
              }
            `}
          >
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
