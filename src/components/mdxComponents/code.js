import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import codeTheme from "prism-react-renderer/themes/duotoneLight";
import { withTheme } from "emotion-theming";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Button, Flash } from "rimble-ui";
import ConnectionBanner from "@rimble/connection-banner";

const localScope = { Button, Flash, ConnectionBanner };

const prismMap = {
  sh: "bash",
  shell: "bash"
};
export default withTheme(({ theme, is, children, lang = "markdown" }) => {
  // if no `is` default to inline code
  if (!is) {
    console.log("!is", is);
    return (
      <Highlight
        {...defaultProps}
        theme={theme.code || codeTheme}
        code={children.trim()}
        language={lang}
      >
        {({ className, style, tokens, /*getLineProps,*/ getTokenProps }) => (
          <code className={className} style={{ ...style, display: "inline" }}>
            {tokens.map(line =>
              line.map((token, key) => (
                <span key="fake-key" {...getTokenProps({ token, key })} />
              ))
            )}
          </code>
        )}
      </Highlight>
    );
  }

  // live component rendering
  if (is === "react-live") {
    console.log("scope", localScope);
    return (
      <LiveProvider code={children} scope={localScope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  console.log("default render", is === "react-live");
  // otherwise, use prism to render a code block
  return (
    <Highlight
      {...defaultProps}
      theme={theme.code || codeTheme}
      code={children.trim()}
      language={prismMap[lang] || lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={style}
          css={{ overflow: "auto", padding: "1rem", marginTop: "1.5rem" }}
        >
          {tokens.map((line, i) => (
            <div key="fake-key" {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key="fake-key" {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
});
