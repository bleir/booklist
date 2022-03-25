import { FC } from 'react';

import styles from './style.module.css';

const Header : FC<{}> = () => {
  return <div className={styles.header}>Header</div>
}

export {
  Header,
};