import { AppShell } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Technologies } from "./components/Technologies/Technologies";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (

    <AppShell >
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Home />
        <Technologies />
        <Contact />
      </AppShell.Main>

    </AppShell>

  );
}

export default App;