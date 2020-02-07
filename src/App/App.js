import React from 'react';
import styles from './App.module.css';
import Input from './../components/UI/input/Input';

export default function App() {
  return (
    <div className={styles.App}>
      <Input type='textarea' title='hello'/>
    </div>
  );
}

