import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className, 
    'text-3xl, font-bold, underline',
    'font-accent font-bold',
    'text-5xl md:text-6xl lg:text-7xl',
    '-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10')}>
      <span>U.Birunthan</span>
    </div>
  )
}

export default Title
