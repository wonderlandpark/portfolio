import React, { FC } from 'react'
import Container from './Container'

const About:FC = () => {
	return <Container id='about'>
		<h1 className='text-5xl font-bold'>안녕하세요 <span role='img' aria-label='wave'>👋</span></h1>
		<p className='pt-6 pb-2'>안녕하세요! 자바스크립트를 주로 사용하며, 백앤드, 프론트앤드, DB 등을 유연하게 다룰 수 있습니다.<br />주로 프론트앤드 개발을 즐겨하며, 디스코드 챗봇, Restful API 등을 개발합니다.</p>
		<p>머신러닝과 빅데이터에 관심이 많고, CTF에 참가하는 것도 즐깁니다.</p>
	</Container>
}

export default About