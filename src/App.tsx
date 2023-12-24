import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenu';
import Home from './pages/Home';

export default function App() {
  return (
    <MantineProvider>
      <HeaderMenu/>
      <Home />
    </MantineProvider>
  );
}
