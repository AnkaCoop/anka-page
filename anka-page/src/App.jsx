import { AppShell } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (

    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main />

    </AppShell>

  );
}

export default App;