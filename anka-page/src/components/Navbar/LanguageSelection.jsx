import { useEffect, useState } from "react";
import { Menu, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./LanguageSelection.module.css";
import { useTranslation } from "react-i18next";

export const LanguageSelection = () => {
  const { i18n } = useTranslation("translations");
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
      className={classes.menuItem}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      width="target"
      withinPortal
    >
      <Menu.Target>
        <Button
          rightSection={<IconChevronDown size="1rem" strokeWidth={3}/>}
          variant="outline"
          classNames={{
            root: classes.root,
            label: classes.label,
          }}
        >
          {selected.label}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};
