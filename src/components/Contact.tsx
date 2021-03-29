import React, { FC } from 'react'
import Container from './Container'
import Link from './Link'

const Contact:FC = () => {
	return <Container id='contact'>
		<h1 className='text-5xl font-bold'><span role='img' aria-label='envelope'>✉️</span> 연락처</h1>
		<ul className='list-disc mt-10'>
			<li>Email: <Link href='mailto:me@wonder.im'>me@wonder.im</Link> <Link href='wonderlandpark@callisto.team'>wonderlandpark@callisto.team</Link></li>
			<li>Github: <Link href='https://github.com/wonderlandpark'>@wonderlandpark</Link></li>
			<li>Discord: @wonderlandpark#9999</li>
			<li>Twitter: <Link href='https://twitter.com/wonderlandpark0'>@wonderlandpark0</Link></li>
			<li>Clubhouse: @wonderlandpark</li>
		</ul>
		<h1 className='text-5xl font-bold pt-10'><span role='img' aria-label='globe'>🌐</span> 소셜</h1>
		<ul className='list-disc mt-10'>
			<li>Blog: <Link href='https://blog.wonder.im'>blog.wonder.im</Link></li>
			<li>CodersRank: <Link href='https://profile.codersrank.io/user/wonderlandpark'>CodersRank</Link></li>
		</ul>
	</Container>
}

export default Contact