import clsx from 'clsx'

export interface Props {
  className?: string
}

const Address = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Address</span>
    </div>
  )
}

export default Address
