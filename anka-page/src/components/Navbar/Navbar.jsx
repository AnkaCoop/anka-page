import { Group, Burger, Text, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelection } from "./LanguageSelection";

export const Navbar = () => {
  const { t } = useTranslation("translations");

  const links = [
    { link: "/home", label: t("nav.home") },
    { link: "/services", label: t("nav.services") },
    { link: "/contact", label: t("nav.contact") },
  ];
  const [burger, burgerAction] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const handleBurgerClick = () => {
    if (burger) burgerAction.close();
    else burgerAction.open();
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
        <Text className={classes.logo}>ANKA</Text>
        <div className={classes.navItems}>
          <Group gap={30} visibleFrom="xs">
            {items}
            <LanguageSelection />
          </Group>
          <Burger
            opened={burger}
            onClick={handleBurgerClick}
            hiddenFrom="xs"
            size="sm"
          />
          <Drawer opened={burger} onClose={handleBurgerClick}>
            {items}
          </Drawer>
        </div>
      </div>
    </header>
  );
};
