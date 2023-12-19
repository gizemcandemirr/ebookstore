import React from 'react'
import LightButton from '../common/button'
import styles from '../../styles/Core.module.css'
const ButtonList = () => {
  return (
    <div className={styles.buttonList}>
      <LightButton text="Popular"/>
      <LightButton text="Top Selling"/>
      <LightButton text="Following"/>
      <LightButton text="New"/>
    </div>
  )
}

export default ButtonList
