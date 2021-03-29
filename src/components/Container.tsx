import React, { FC } from 'react'

const Container:FC<{ className?: string, id?: string, ignorePadding?: boolean }> = ({ children, className='', id, ignorePadding=false }) => {
	return <div id={id} data-anchor={id} className={`${className} container mx-auto px-8 ${!ignorePadding && 'pt-12'}`}>
		{children}
	</div>
}

export default Container