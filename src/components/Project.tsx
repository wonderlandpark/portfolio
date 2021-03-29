import React, { FC } from 'react'
import Container from './Container'

const Project:FC = () => {
	return <Container id='project'>
		<h1 className='text-5xl font-bold'><span role='img' aria-label='books'>📚</span> 프로젝트</h1>
		<div className='grid gap-4 grid-cols-1 lg:grid-cols-3 pt-6'>
			<div className='px-8 py-6 lg:col-span-3 bg-gradient-to-br from-sea-blue to-blue-600 rounded-2xl transition duration-300 ease-in'>
				<h1 className='text-xl lg:text-3xl font-bold'>한국 디스코드봇 리스트</h1>
				<p className='text-gray-300 text-sm lg:text-md'>국내 디스코드 봇을 한 곳에서 찾아볼 수 있는 플랫폼입니다.</p>
				<img className='w-full py-3 rounded-2xl' src='/assets/koreanbots-2.png' alt='Koreanbots First' />
				<img className='w-full rounded-2xl' src='/assets/koreanbots-3.png' alt='Koreanbots Second' />
			</div>
			<div className='px-8 py-6 lg:col-span-3 bg-gradient-to-br from-red-500 to-red-400 rounded-2xl transition duration-300 ease-in'>
				<h1 className='text-xl lg:text-3xl font-bold'>원더봇</h1>
				<p className='text-gray-300 text-sm lg:text-md'>관리, 도박, 미니게임, 정보 등 다양한 다기능 봇입니다.</p>
				<img className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-money.png' alt='Wonderbot Money' />
				<img className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-moderation.png' alt='Wonderbot Moderation' />
				<img className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-corona.png' alt='Wonderbot Corona' />
			</div>
		</div>
	</Container>
}

export default Project