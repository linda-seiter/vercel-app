import {
  SandpackProvider,
  SandpackLayout,
  SandpackTests,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

export default function Hello() {
  return (
    <SandpackProvider>
      <SandpackLayout>
        <SandpackCodeEditor showLineNumbers showTabs />
        <SandpackConsole resetOnPreviewRestart="true" standalone="true" />
      </SandpackLayout>
    </SandpackProvider>
  );
}
