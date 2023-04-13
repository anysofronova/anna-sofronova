import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Header} from "./components/Header";

export const App: FC = () => {
  const { i18n } = useTranslation()
  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language)
  }
  AOS.init()
  return (
    <>
        <Header handleChange={changeLanguage}/>
    </>
  )
}
