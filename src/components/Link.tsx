import React, { FC } from 'react'

const Link:FC<{ href: string, className?: string }> = ({ href, children, className='' }) => {
	return <a href={href} className={`${className || 'text-blue-500 hover:text-blue-400'}`} target={!href.startsWith('mailto:') ? '_blank' : undefined} rel='noreferrer'>
		{children}
	</a>
}

export default Link