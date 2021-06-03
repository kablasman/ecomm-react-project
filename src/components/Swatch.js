import React from 'react'

const Swatch = ({red, green, blue}) => {
    
    const cssStyle = {
		backgroundColor: `rgba(${red},${green},${blue})`
	}
    
    return (
		<li className="swatch" style={cssStyle}>
			<Channel value={red} />  {/* Channel({value:255}) */}
			<Channel value={green} />
			<Channel value={blue} />
		</li>
	)
}

export default Swatch