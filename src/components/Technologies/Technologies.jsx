import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import classes from './Technologies.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'JavaScript',
    description:
      'JavaScript is a programming language commonly used in web development. It allows developers to add interactive features to websites, create web applications, and build server-side applications.',
  },
  {
    icon: IconUser,
    title: 'React js',
    description:
      ' React.js is a JavaScript library for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and efficiently manage the state of an application. React.js is maintained by Facebook and a community of developers',
  },
  {
    icon: IconCookie,
    title: 'Laravel',
    description:
      'Laravel is a PHP framework for building web applications, known for its elegant syntax and developer-friendly features. It provides tools and libraries for tasks such as routing, authentication, and database management, allowing developers to build scalable and secure web applications quickly.',
  },
  {
    icon: IconLock,
    title: 'Node js',
    description:
      'Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It is built on the V8 JavaScript engine and provides a non-blocking, event-driven architecture that makes it well-suited for building fast and scalable network applications.',
  },
  {
    icon: IconMessage2,
    title: 'PostgreSQL',
    description:
      'PostgreSQL is an open-source relational database management system (RDBMS) known for its reliability, robust feature set, and adherence to SQL standards. It supports various advanced features such as multi-version concurrency control (MVCC), JSONB data type, and full-text search, making it suitable for a wide range of applications.',
  },
  {
    icon: IconMessage2,
    title: 'Mongo DB',
    description:
      'MongoDB is a popular open-source NoSQL database known for its flexibility, scalability, and ease of use. It stores data in flexible, JSON-like documents and supports dynamic schemas, making it well-suited for handling large volumes of unstructured or semi-structured data. MongoDB is commonly used in modern web applications, mobile apps, and IoT applications.',
  },
];

export function Feature({ icon: Icon, title, description }) {
  return (
    <div className={classes.feature}>
      {/* <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon> */}
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export const Technologies = () => {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <div className={classes.wrapper} id='technologies'>
      <Title className={classes.title}>Techonologies</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
        At ANKA we can help you by creating applications with technologies such as..
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
    </div>
  );
}
