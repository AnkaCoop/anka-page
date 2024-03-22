import { useEffect, useState } from "react";
import { UnstyledButton, Menu, Group, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./LanguageSelection.module.css";
import { useTranslation } from "react-i18next";

export const LanguageSelection = () => {
  const { i18n } = useTranslation("translations");
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState({ label: "", languageCode: "" });

  const data = [
    { label: "Español", languageCode: "es" },
    { label: "English", languageCode: "en" },
    { label: "Türkçe", languageCode: "tr" },
  ];

  useEffect(() => {
    const currentLanguageCode = i18n.language;
    const selectedLanguage = data.find(
      (item) => item.languageCode === currentLanguageCode
    );
    setSelected(selectedLanguage || data[0]);
  }, [i18n.language]);

  const handleLanguageChange = (languageCode) => {
    setSelected(data.find((item) => item.languageCode === languageCode));
    i18n.changeLanguage(languageCode);
  };
  const items = data.map((item) => (
    <Menu.Item
      onClick={(event) => {
        event.preventDefault,
          handleLanguageChange(item.languageCode),
          setSelected(item);
      }}
      key={item.label}
      styles={{
        item: {
          fontSize: "18px",
          fontWeight: 500,
          color: "var(--mantine-color-gray-7)",
        },
      }}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      width="target"
      withinPortal
    >
      <Menu.Target>
        {/* <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <span className={classes.label}>{selected.label}</span>
            <IconChevronDown size="1rem" />
          </Group>
        </UnstyledButton> */}
        <Button
          rightSection={<IconChevronDown size="1rem" />}
          variant="outline"
          classNames={{
            root: classes.root,
            // input: classes.input,
            label: classes.label,
          }}
          styles={{
            root: {
                
            }
          }}
        >
          {selected.label}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};
