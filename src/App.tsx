import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const App: FC = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language)
  }
  AOS.init()
  return (
    <>
        Vite
    </>
  )
}
