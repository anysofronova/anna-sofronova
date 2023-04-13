import { FC } from 'react'
import cn from 'classnames'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faMapPin } from '@fortawesome/free-solid-svg-icons'

import { Courses } from './Courses'
import styles from './Education.module.scss'
import { LANG, LINKS } from '../../data/constants'

export const Education: FC = () => {
  const { t } = useTranslation()
  const currentLocale = Cookies.get('i18next') || LANG.EN

  return (
    <section id={'education'} className={styles.education}>
      <div className={cn('container', styles.container)}>
        <div>
          <h3 className={'text-light'}>{t('common_title')}</h3>
          <h2>{t('education_title')}</h2>
        </div>
        <div className={styles.main} data-aos="fade-up">
          <div className={styles.university}>
            <div className={styles.item}>
              <div className={styles.degree}>
                {t('education_bachelor_name')}
                <div className={styles.topic}>{t('education_bachelor_topic')}</div>
                <div className={styles.gpa}>{t('education_bachelor_gpa')}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <a
                    href={
                      currentLocale === LANG.RU
                        ? LINKS.UNIVERSITY_RU
                        : currentLocale === LANG.FR
                        ? LINKS.UNIVERSITY_FR
                        : LINKS.UNIVERSITY_EN
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {t('education_university_name')}
                  </a>
                </div>
                <div className={styles.about}>
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>2015 – 2019</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapPin} />
                    <span>{t('education_university_place')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.degree}>
                {t('education_magistracy_name')}
                <div className={styles.topic}>{t('education_magistracy_topic')}</div>
                <div className={styles.gpa}>{t('education_magistracy_gpa')}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.name}>
                  <a
                    href={
                      currentLocale === LANG.RU
                        ? LINKS.UNIVERSITY_RU
                        : currentLocale === LANG.FR
                        ? LINKS.UNIVERSITY_FR
                        : LINKS.UNIVERSITY_EN
                    }
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    {t('education_university_name')}
                  </a>
                </div>
                <div className={styles.about}>
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <span>2019 – 2021</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapPin} />
                    <span>{t('education_university_place')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.courses} data-aos="fade-up">
          <Courses />
        </div>
      </div>
    </section>
  )
}
