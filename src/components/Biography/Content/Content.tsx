import clsx from 'clsx'

export interface Props {
  className?: string
}

const Content = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Content</span>
    </div>
  )
}

export default Content
