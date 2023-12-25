import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { FeaturesGrid } from '../components/FeaturesGrid';

export default function Features() {
  return (
    <MantineProvider>
      <FeaturesGrid />
    </MantineProvider>
  );
}
