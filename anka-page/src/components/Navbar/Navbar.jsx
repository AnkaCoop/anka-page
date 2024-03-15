import { Group, Burger, Text, Drawer, Menu, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { useTranslation } from "react-i18next";



export const Navbar = () => {
  const { t } = useTranslation('common');

  const links = [
    { link: '/home', label: (t("nav.home")) },
    { link: '/about', label: (t("nav.about")) },
    { link: '/services', label: (t("nav.services")) },
    { link: '/contact', label: (t("nav.contact")) },
    {
        link: '#1',
        label: 'Language',
        links: [
          { link: '/docs', label: 'Español' },
          { link: '/resources', label: 'English' },
          { link: '/community', label: 'Türkçe' },
        ],
      },
];
    const [burger, burgerAction] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const handleBurgerClick = () => {
        if (burger) burgerAction.close();
        else burgerAction.open();
    }

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
          ));
      
          if (menuItems) {
            return (
              <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                <Menu.Target>
                  <a
                    href={link.link}
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                  >
                    <Center>
                      <span className={classes.linkLabel}>{link.label}</span>
                      <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                  </a>
                </Menu.Target>
                <Menu.Dropdown>{menuItems}</Menu.Dropdown>
              </Menu>
            );
          }
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
    )});

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Text className={classes.logo}>ANKA</Text> 
                <div className={classes.navItems}> 
                    <Group gap={30} visibleFrom="xs">
                        {items}
                    </Group>
                    <Burger opened={burger} onClick={handleBurgerClick} hiddenFrom="xs" size="sm" />
                    <Drawer opened={burger} onClose={handleBurgerClick}>
                        {items}
                    </Drawer>
                </div>
            </div>
        </header>
    );
}
