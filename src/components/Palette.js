import React from 'react'

const Palette = () => {
	return (
		<ul className="palette">
			<Swatch red={255} green={0} blue={0} />  {/* Swatch({red:255, green:0, blue:0}) */}
			<Swatch red={0} green={255} blue={0} />
			<Swatch red={0} green={0} blue={255} />
		</ul>
	)
}

export default Palette