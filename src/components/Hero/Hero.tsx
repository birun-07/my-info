import clsx from "clsx";
import Avatar from "./Avatar/Avatar";
import Title from "./Title/Title";
import Type from "./Type/Type";

export interface Props {
  className?: string;
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className, "pt-7")}>
      <Avatar />
      <Title />
      <Type />

      
    </div>
  );
};

export default Hero;
