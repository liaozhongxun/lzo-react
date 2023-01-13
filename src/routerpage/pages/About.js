import React, { PureComponent } from 'react'

export class About extends PureComponent {
  render() {
    console.log(this.params)
    return (
      <div>About</div>
    )
  }
}

export default About