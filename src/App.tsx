import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeaderMenu } from './components/HeaderMenu';
import { FooterLinks } from './components/FooterLinks';
import AppRouter from './AppRouter';

export default function App() {
  console.log(window.location)
  return (
    <MantineProvider>
      <HeaderMenu/>
      <AppRouter />
      <FooterLinks />
    </MantineProvider>
  );
}
