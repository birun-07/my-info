import clsx from 'clsx'

export interface Props {
  className?: string
}

const Type = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Type</span>
    </div>
  )
}

export default Type
