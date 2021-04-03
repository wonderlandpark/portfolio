import React, { FC } from 'react'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import Container from './Container'

const Hero:FC = () => {
	return <Container className='flex items-center justify-center' id='hero' ignorePadding>
		<div className='text-center'>
			<h1 className='text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sea-blue via-hot-pink to-chick-yellow'>박준서</h1>
			<p className='text-lg font-medium mt-2'>평범한 학생 풀스택 개발자입니다.</p>
			<div className='flex justify-center text-xl mt-2'>
				<a className='hover:text-hot-pink px-1' href='mailto:me@wonder.im'>
					<FaEnvelope />
				</a>
				<a className='hover:text-chick-yellow px-1' href='https://github.com/wonderlandpark' target='_blank' rel='noreferrer'>
					<FaGithub />
				</a>
			</div>
		</div>
	</Container>
}

export default Hero