import React from 'react';
import Styles from './Login.less';
import JPG1 from '@/assets/yay.jpg';

export default class Login extends React.Component {
  render() {
    return (
      <div className={Styles.background}>
        login
        <img src={JPG1} alt="" />
      </div>
    );
  }
}
