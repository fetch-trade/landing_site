import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { HeroTitle } from '../components/HeroTitle';

export default function Home() {
  return (
    <MantineProvider>
      <HeroTitle />
    </MantineProvider>
  );
}
