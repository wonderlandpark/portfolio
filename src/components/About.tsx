import React, { FC } from 'react'
import GitHubCalendar from 'react-github-calendar'
import Container from './Container'

const About:FC = () => {
	return <Container id='about'>
		<h1 className='text-5xl font-bold'>안녕하세요 <span role='img' aria-label='wave'>👋</span></h1>
		<p className='pt-6 pb-2'>안녕하세요! 자바스크립트를 주로 사용하며, 백앤드, 프론트앤드, DB 등을 유연하게 다룰 수 있습니다.<br />주로 프론트앤드 개발을 즐겨하며, 디스코드 챗봇, Restful API 등을 개발합니다.</p>
		<p>머신러닝과 빅데이터에 관심이 많고, CTF에 참가하는 것도 즐깁니다.</p>
		<p>최대한 <strong>1일 1커밋</strong>을 실천하도록 노력하고 있습니다.</p>
		<div className='py-10'>
			<h2 className='text-2xl font-semibold mb-2'>Github Contribution Graph</h2>
			<GitHubCalendar username='wonderlandpark' years={[2021]} theme={{background: 'transparent',
				text: '#fff',
				grade4: '#27d545',
				grade3: '#10983d',
				grade2: '#00602d',
				grade1: '#003820',
				grade0: '#2d333b'}} 
			/>
		</div>
	</Container>
}

export default About