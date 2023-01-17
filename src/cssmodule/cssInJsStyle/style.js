import styled from "styled-components"
// vscode 安装 vscode-styled-components 插件高亮

export const AppWrapper = styled.div` 
	.other{
		color:#f00;
		font-size:28px;
	}
	.cssInJsClass{
		font-size:${props => props.size}px;
        color:#f0f
	}
`