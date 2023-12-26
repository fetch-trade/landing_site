import { Avatar, Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import classes from '../styles/UserInfoIcons.module.css';

export function UserInfoIcons({ imageUrl, role, name, email, phone }: { imageUrl: string; role: string; name: string; email: string; phone: string }) {
  return (
    <div className={classes.container}>
      <Group wrap="nowrap">
        <Avatar
          src={imageUrl}         
          size={92}
          radius="md"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {role}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {name} 
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email} 
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
