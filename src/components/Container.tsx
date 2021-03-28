import React, { FC } from 'react'

const Container:FC<{ className?: string, id?: string }> = ({ children, className='', id }) => {
	return <div id={id} data-anchor={id} className={`${className} container mx-auto px-4 py-12`}>
		{children}
	</div>
}

export default Container