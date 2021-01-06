import React from 'react'

export default class TransitionStatus {
  selectedIndex: number;
  displayed: React.Component;
  componentList: React.Component[];

  constructor(components: React.Component[]) {
    this.selectedIndex = -1;
    this.displayed = components[0];
    this.componentList = components;
  }

  onViewUpdate(newIndex: number) {
    this.selectedIndex = newIndex;
    this.displayed = this.componentList[newIndex];
  }
}
