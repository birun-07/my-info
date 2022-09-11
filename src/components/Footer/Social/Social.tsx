import clsx from 'clsx'

export interface Props {
  className?: string
}

const Social = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Social</span>
    </div>
  )
}

export default Social
