import React, { memo } from "react";
import { createUseStyles } from "react-jss";
import Button from "../Button";
import { useTranslation } from "react-i18next";
import { primary } from "../../style/colors";

const useStyles = createUseStyles({
  langChangeBtn: {
    position: "fixed",
    right: 10,
    top: 10,
    fontSize: 25,
    color: primary,
    background: "transparent",
    transition: "background 0.75s",
    textTransform: "uppercase",
    "&:hover": {
      background: `${primary}1f`,
    },
  },
});

export interface LangChangeBtnProps {
  change: () => void;
}

interface StylesOptions {}

const LangChangeBtn = memo(({}: LangChangeBtnProps) => {
  const { i18n } = useTranslation();
  const stylesOptions: StylesOptions = {};
  const classes = useStyles(stylesOptions);

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "cs" ? "en" : "cs");
  };

  return (
    <Button
      className={classes.langChangeBtn}
      onClick={() => {
        handleLanguageChange();
      }}
    >
      {i18n.language === "cs" ? "en" : "cs"}
    </Button>
  );
});

export default LangChangeBtn;
