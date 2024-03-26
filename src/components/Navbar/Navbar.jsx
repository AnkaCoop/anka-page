import { Group, Burger, Text, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelection } from "./LanguageSelection";

export const Navbar = () => {
  const { t } = useTranslation("translations");

  const links = [
    { link: "./", label: t("nav.home") },
    { link: "/technologies", label: t("nav.technologies") },
    { link: "/contact", label: t("nav.contact") },
  ];

  const [active, setActive] = useState(links[0].link);

  const { burger, burgerAction } = useDisclosure(false);

  const handleBurgerClick = () => {
    burger ? burgerAction.close() : burgerAction.open();
  };

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <a href="#home">
          <img
            src="/logotype.svg"
            style={{
              height: "3rem",
              marginRight: "10px",
              padding: 4,
              cursor: "pointer",
            }}
            alt="logo"
          />
        </a>
        <div className={classes.navItems}>
          <Group gap={30} visibleFrom="xs">
            <a
              href="#home"
              className={classes.link}
              onClick={handleBurgerClick}
            >
              Home
            </a>
            <a
              href="#technologies"
              className={classes.link}
              onClick={handleBurgerClick}
            >
              Technologies
            </a>
            <a
              href="#contact"
              className={classes.link}
              onClick={handleBurgerClick}
            >
              Contact
            </a>
            <LanguageSelection />
          </Group>
          <Burger
            opened={burger}
            onClick={handleBurgerClick}
            hiddenFrom="xs"
            size="sm"
          />
          <Drawer opened={burger} onClose={handleBurgerClick}>
            <Group direction="column" gap={15}>
              <a
                href="#home"
                className={classes.link}
                onClick={handleBurgerClick}
              >
                Home
              </a>
              <a
                href="#technologies"
                className={classes.link}
                onClick={handleBurgerClick}
              >
                Technologies
              </a>
              <a
                href="#contact"
                className={classes.link}
                onClick={handleBurgerClick}
              >
                Contact
              </a>
            </Group>
            <LanguageSelection />
          </Drawer>
        </div>
      </div>
    </header>
  );
};
