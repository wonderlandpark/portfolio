import React, { FC } from 'react'
import Container from './Container'

const Stack:FC = () => {
	return <Container id='stack'>
		<h1 className='text-5xl font-bold'> <span role='img' aria-label='tool'>🛠️</span> 기술 스택</h1>
		<h2 className='text-3xl font-bold mt-4'>Lang</h2>
		<ul className='list-disc list-inside'>
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>Python</li>
		</ul>
		<h2 className='text-3xl font-bold mt-4'>Web Framework</h2>
		<ul className='list-disc list-inside'>
			<li>React.js</li>
			<li>Vue.js</li>
			<li>Express.js</li>
			<li>Koa</li>
		</ul>
		<h2 className='text-3xl font-bold mt-4'>UI Library</h2>
		<ul className='list-disc list-inside'>
			<li>tailwindcss</li>
			<li>semantic-ui</li>
			<li>chakra-ui</li>
		</ul>
	</Container>
}

export default Stack