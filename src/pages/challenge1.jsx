import {
  SandpackProvider,
  SandpackLayout,
  SandpackTests,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

import code from "./challenge1/index.js?raw";

const files = {
  "/index.js": {
    code: code,
  },
};

export default function Playground() {
  return (
    <SandpackProvider files={files}>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
        <SandpackConsole resetOnPreviewRestart="true" standalone="true" />
      </SandpackLayout>
    </SandpackProvider>
  );
}
