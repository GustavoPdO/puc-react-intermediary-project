import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDarkMode } from "../../contexts/DarkModeContext";

import "./Header.scss";

function Header() {
  const { colorMode, toggleMode } = useDarkMode();
  return (
    <div className={`primary-bg header_container __${colorMode}`}>
      <h1 className={`__${colorMode}`}>Seja bem vindo ao...</h1>
      <IconButton className={`header_button __${colorMode}`} onClick={toggleMode}>{colorMode === "dark" ? <DarkMode /> : <LightMode />}</IconButton>
    </div>
  );
}

export default Header;
