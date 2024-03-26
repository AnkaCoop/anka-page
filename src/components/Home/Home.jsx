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
            We are a software cooperative We are collective construction,
            culture and minds in constant motion.{" "}
          </Title>
          <Text c="dimmed" mt="md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            sequi vitae animi minima nisi? Numquam aspernatur, reprehenderit id
            illum quasi sunt earum repellendus nisi! Aspernatur quidem dolorem
            iusto sapiente magnam.
          </Text>
        </div>
        <Image src="../../../public/logo_color.svg" className={classes.image} />
      </div>
    </Container>
  );
};
