import clsx from "clsx";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
export interface Props {
  className?: string;
}
const Header = ({ className }: Props) => {
  return (
    <div className={clsx(
      className, 
      "w-10/12 m-auto p-4 bg-#EAE3D2-900",
      "flex justify-between"
      )}>
      <ThemeSwitch/>
      <LanguageSwitch/>
    </div>
  );
};
export default Header;
