import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import IMAGES from './Images.ts';
import classes from '../styles/FeaturesImages.module.css';

const data = [
  {
    image: 'students',
    title: 'Students',
    description: 'A little help towards their educational pursuits',
  },
  {
    image: 'collectors',
    title: 'Collectors',
    description: 'Obsessive over just about anything',
  },
  {
    image: 'upcyclists',
    title: 'Upcyclists',
    description: 'They bougie up their creative work with what they find',
  },
  {
    image: 'business_owners',
    title: 'Small Businesses',
    description: 'Sometimes even businesses need to catch a break',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Use cases</Text>

      <Title className={classes.title} order={2}>
        Fetch is <span className={classes.highlight}>not</span> just for your average Joe 
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Ditch the platforms like AfterPay and Klarna. Get the stuff you want without having
          to worry about long-term payments and not having enough money. Find someone on Fetch who's 
          willing to make an exchange, and it's a win-win for both parties.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
