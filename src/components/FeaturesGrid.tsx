import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconUser, IconScale, Icon24Hours, IconLock } from '@tabler/icons-react';
import classes from '../styles/FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extremely easy',
    description:
      "Just go on the app, look for what you need, and we'll handle the rest"
  },
  {
    icon: IconUser,
    title: 'User focused',
    description:
      "We're dedicated to making sure you're always satisfied with what you get",
  },
  {
    icon: IconScale,
    title: 'Fair valuations',
    description:
      "Every item is valued based on market sentiments, conditions, and many other factors to ensure fair trading",
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      "Transactions are verified before being conducted so you'll always have a peace of mind",
  },
  {
    icon: Icon24Hours,
    title: '24/7 Support',
    description:
      "Let us know if something goes wrong during an exchange. We'll always be there to rectify it",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40} color='#da2c5a'>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Trade effortlessly anywhere, anytime</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you might be a bit short on cash for something you 
          need. It might be easier to leverage your surroundings and see what 
          you can exchange for it.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
