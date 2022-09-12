import clsx from 'clsx'
import logo from "../../../image/birun7.png"

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div
     className={clsx("mx-auto flex justify-center w-48 lg:w-56", className)}>
      <img src={logo} alt="avatar"></img>
    </div>
  )
}

export default Avatar
