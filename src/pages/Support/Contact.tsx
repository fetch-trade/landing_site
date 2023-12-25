import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { ContactUs } from '../../components/ContactUs.tsx'; 

export default function Contact() {
  return (
    <MantineProvider>
      <ContactUs />
    </MantineProvider>
  );
}
