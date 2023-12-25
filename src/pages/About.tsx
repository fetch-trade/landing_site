import '@mantine/core/styles.css';

import { Card, Timeline, Text } from '@mantine/core';
import { UserInfoIcons } from '../components/UserInfoIcons';

const DeveloperData = {
  imageUrl: 'https://hmp.me/ebra',
  role: 'Lead software developer',
  name: 'Enkang Yuan',
  email: 'enkangtheyuan@gmail.com',
  phone: '+1 (832) 530 6878'
};

const DesignerData = {
  imageUrl: '',
  role: 'Lead designer + Business end',
  name: 'Ethan Moloney',
  email: 'ethanjmoloney12@gmail.com',
  phone: '+1 (346) 640 4145'
}

export default function About() {
  return (
    <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
      <Card 
        shadow="sm" 
        style={{ 
          flex: 1, 
          minWidth: 0, 
          maxWidth: '40%', 
          minHeight: 0, 
          height: '500px', 
          marginLeft: '160px', 
          padding: '20px', 
          marginBottom: '120px' 
        }}
      >
        <h2>Timeline</h2>
        <Timeline color='#da2c5a' active={0} bulletSize={24} lineWidth={4}>
          <Timeline.Item title="Product Market Fit">
            <Text c="dimmed" size="sm">
              Attempting to establish the customer and optimize           
            </Text>
            <Text c="dimmed" size="sm">
               our product towards their needs
            </Text>
            <Text size="xs" mt={4}>
              Currently active
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Execution">
            <Text c="dimmed" size="sm">
              Implementation of software and necessary tooling
            </Text>
            <Text size="xs" mt={4}>
              Coming soon
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Product Launch">
            <Text c="dimmed" size="sm">
              Release of what our team has been working on to the public
            </Text>
            <Text size="xs" mt={4}>
              
              
            </Text>
          </Timeline.Item>
          <Timeline.Item title="To be announced...">
            <Text c="dimmed" size="sm">
              Further iterations and updates
            </Text>
            <Text size="xs" mt={4}>
            
              
            </Text>
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card 
        shadow="sm" 
        style={{ 
          flex: 1, 
          minWidth: 0,
          maxWidth: '30%', 
          minHeight: 0, 
          height: '400px', 
          margin: '20px', 
          padding: '24px', 
          marginBottom: '160px' 
        }}
      >
        <h2>Masthead</h2>
        <UserInfoIcons {...DeveloperData} />
        <UserInfoIcons {...DesignerData} />
      </Card>
      <div style={{ clear: 'both' }}></div>
    </div>  
  );
}
