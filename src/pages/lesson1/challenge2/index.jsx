import {
  SandpackProvider,
  SandpackLayout,
  SandpackTests,
  SandpackCodeEditor,
  SandpackConsole,
} from "@codesandbox/sandpack-react";

import code from "./files/index.js?raw";
import test from "./files/index.test.js?raw";

const files = {
  "/index.js": {
    code: code,
  },
  "/index.test.js": {
    code: test,
  },
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
        <SandpackTests />
        <SandpackConsole resetOnPreviewRestart="true" />
      </SandpackLayout>
    </SandpackProvider>
  );
}
