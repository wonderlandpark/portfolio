import React, { FC } from 'react'

const Link:FC<{ href: string }> = ({ href, children }) => {
	return <a href={href} className='text-blue-500 hover:text-blue-400' target={!href.startsWith('mailto:') ? '_blank' : undefined} rel='noreferrer'>
		{children}
	</a>
}

export default Link