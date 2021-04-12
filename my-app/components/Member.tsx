import React from 'react'
import styles from './Member.module.scss'

const Member: React.FC = ({ image, name, belong, role }) => {
  return(
    <dl className={styles.member}>
      <dt>{name}</dt>
      <dd>
        <img src={image} alt=""/>
      </dd>
      <dd>{belong}</dd>
      <dd>
        <ul className={styles.member__role}>
        {role.map( roleItem => <li>{roleItem}</li> )}
        </ul>
      </dd>
    </dl>
  )
}


export default Member;