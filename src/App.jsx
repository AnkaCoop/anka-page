import { AppShell } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Technologies } from "./components/Technologies/Technologies";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (

    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>
      <AppShell.Main>
        <Home id="home"/>
        <Technologies id="technologies"/>
        <Contact id="contact"/>
      </AppShell.Main>

    </AppShell>

  );
}

export default App;