import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  const { t } = useTranslation()

  return (
    <div
      className={clsx('flex container my-8 mx-auto p-4 max-w-lg', 'text-xl', className)}
    >
      <div className={clsx('border b-2 rounded p-4')}>
        <p className="pb-4">
          <span>{t('Biography.bio1')}</span>
          <span>{t('Biography.bio2')}</span>
          <strong>{t('Biography.bio3')}</strong>
          <span>{t('Biography.bio4')}</span>
          <span>{t('Biography.bio5')}</span>
          <span className="underline">{t('Biography.bio6')}</span>
          <span>{t('Biography.bio7')}</span>
          <span>{t('Biography.bio8')}</span>
          </p>


          <p className= "pt5"> 
          <span>{t('Biography.bio9')}</span>
          <a href="mailto:ubirunthan77@gmail.com">
            {t('Biography.email')}
          </a>
          <span>{t('Biography.bio10')}</span>
        </p>
      </div>
    </div>
  )
}

export default Biography