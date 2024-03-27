import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
// import image from 'public\logo_color.svg';
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <Container size="md" id="home">
      <div className={classes.inner}>
        <div className={classes.content}>
        <Title className={classes.title}>
            At <span className={classes.highlight}>ANKA</span>, we believe in the power of collaboration to
            create a better world. 
          </Title>
          <Text c="dimmed" mt="md">
            Our software cooperative is founded on the principles of openness,
            inclusivity, and shared success.
          </Text>
        </div>
        <Image src="../../../public/logo_color.svg" className={classes.image} />
      </div>
    </Container>
  );
};
