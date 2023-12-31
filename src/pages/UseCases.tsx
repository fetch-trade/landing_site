import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { FeaturesImages } from '../components/FeaturesImages';

export default function UseCases() {
  return (
    <MantineProvider>
      <FeaturesImages />
    </MantineProvider>
  );
}
