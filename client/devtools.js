import React, { Component } from 'react'
import { createDevTools } from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'


export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q' >
    <DiffMonitor theme='tomorrow' />
  </DockMonitor>
)
