import React, { FC } from 'react'
import Container from './Container'

const Hero:FC = () => {
	return <Container className='flex items-center justify-center' id='hero' ignorePadding>
		<div className='text-center'>
			<h1 className='text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sea-blue via-hot-pink to-chick-yellow'>박준서</h1>
			<p className='text-xl mt-2'>평범한 학생 풀스택 개발자입니다.</p>
		</div>
	</Container>
}

export default Hero