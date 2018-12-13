import React from 'react';
import Styles from './UserLayout.less';

export default class UserLayout extends React.PureComponent {
  render() {
    return (
      <div>
        WELCOME
        <div>{this.props.children}</div>
      </div>
    );
  }
}
