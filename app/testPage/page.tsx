import TestComponent from '@/components/test'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Test</h1>

      <div className="flexTest">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      <TestComponent name="Leo" age={23} role="SWDev" ></TestComponent>
    </div>
  )
}

/*
REACT: system for MANAGING CHANGING UI! (i.e. a counter)
- "use client" === This component needs to participate in browser-side interactivity
- Reacts efficiency; NOT "no more DOM updates", but instead "which updates are NECESSARY"

Static/data = server
interactive = client
  BOTH can run complex things though
*/
