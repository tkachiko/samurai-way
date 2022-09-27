import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon"/>
        <a href={'https://github.com/tkachiko'} target={'_blank'} rel={'noreferrer'}> tkachiko </a>2022
      </div>
    </div>
  );
};

export default Footer;