import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { LINKS } from '../../data/constants'

const footer = {
  width: ' 100%',
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingBottom: '6rem',
  paddingTop: '1rem',
}

export const Footer: FC = () => (
  <footer style={footer}>
    <a href={LINKS.GITHUB} target={'_blank'} rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} /> @anysofronova
    </a>
    <p>{new Date().getFullYear()}</p>
  </footer>
)
