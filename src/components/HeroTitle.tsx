import { Container, Text, Button, Group, Input } from '@mantine/core';
import classes from '../styles/HeroTitle.module.css';

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          A{' '}
          <Text component="span" variant="gradient" gradient={{ from: '#da2c5a', to: '#ad3d5b', deg: 90 }} inherit>
            full-scale
          </Text>{' '}
          localized exchange platform without all the hassle 
        </h1>

        <Text className={classes.description} style={{ opacity: 0.6 }}>
          Optimized trading for your used items with ease -- Fetch helps you find what you want near you and ensures that
          local commerce proceeds smoothly
        </Text>

        <Group className={classes.controls}>
          <Input size='xl' placeholder='Your email address'/>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: '#e33f5e', to: '#ca3f5d' }}
          >
            Join the waitlist
          </Button>
        </Group>
      </Container>
    </div>
  );
}
