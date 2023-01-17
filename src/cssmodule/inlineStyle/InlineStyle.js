import React, { PureComponent } from 'react'

export class InlineStyle extends PureComponent {
    constructor(){
        super()
        this.state ={
            titleSize: 16
        }
    }
    render() {
        const { titleSize } = this.state;
        return (
            <div style={{ color: "red", fontSize: `${titleSize}px` }}>InlineStyle</div>
        )
    }
}

export default InlineStyle