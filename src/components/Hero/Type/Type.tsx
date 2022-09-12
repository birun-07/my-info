import clsx from 'clsx'
import ReactTyped from "react-typed";

export interface Props {
  className?: string
}

const Type = ({ className }: Props) => {
  return (
    <div className={clsx(className,
      'flex justify-center',
        'font-bold text-3xl',
    )}>
      <ReactTyped 
      strings={['MERN Developer', 'Cricket Player','Content Writter','Hobby Photographer']}
      typeSpeed={107}
      backSpeed={100}
      loop
      />
    </div>
  )
}

export default Type
