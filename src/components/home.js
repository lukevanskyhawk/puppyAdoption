import React, { Component } from 'react';
import OpenClose from './collapse';
import PuppyGroup from './puppyGroups';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <PuppyGroup />
      </div>
    );
  }
}
