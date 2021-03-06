import React, { FC } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import Container from './Container'
import Link from './Link'

const Project:FC = () => {
	return <Container id='project'>
		<h1 className='text-5xl font-bold'><span role='img' aria-label='books'>π</span> νλ‘μ νΈ</h1>
		<div className='grid gap-4 grid-cols-1 lg:grid-cols-3 pt-6'>
			<div className='px-8 py-6 lg:col-span-3 bg-gradient-to-br from-sea-blue to-blue-600 rounded-2xl transition duration-300 ease-in'>
				<span className='text-sm text-gray-300'>REACT.JS TYPESCRIPT TAILWINDCSS</span>
				<h1 className='text-xl lg:text-3xl font-bold'>νκ΅­ λμ€μ½λλ΄ λ¦¬μ€νΈ</h1>
				<p className='text-gray-300 text-sm lg:text-md py-1'>κ΅­λ΄ λμ€μ½λ λ΄μ ν κ³³μμ μ°Ύμλ³Ό μ μλ νλ«νΌμλλ€.</p>
				<div className='flex'>
					<Link href='https://github.com/koreanbots/koreanbots' className='pr-1 hover:opacity-80'>
						<FaGithub />
					</Link>
					<Link href='https://koreanbots.dev' className='pr-1 hover:opacity-80'>
						<FaGlobe />
					</Link>
				</div>
				<img loading='lazy' className='w-full py-3 rounded-2xl' src='/assets/koreanbots-2.png' alt='Koreanbots First' />
				<img loading='lazy' className='w-full rounded-2xl' src='/assets/koreanbots-3.png' alt='Koreanbots Second' />
			</div>
			<div className='px-8 py-6 lg:col-span-3 bg-gradient-to-br from-red-500 to-red-400 rounded-2xl transition duration-300 ease-in'>
				<span className='text-sm text-gray-300'>NODE.JS</span>
				<h1 className='text-xl lg:text-3xl font-bold'>μλλ΄</h1>
				<p className='text-gray-300 text-sm lg:text-md py-1'>κ΄λ¦¬, λλ°, λ―Έλκ²μ, μ λ³΄ λ± λ€μν λ€κΈ°λ₯ λ΄μλλ€.</p>
				<div className='flex'>
					<Link href='https://github.com/wonderlandpark/wonderbot' className='pr-1 hover:opacity-80'>
						<FaGithub />
					</Link>
					<Link href='https://wonderbot.xyz' className='pr-1 hover:opacity-80'>
						<FaGlobe />
					</Link>
				</div>
				<img loading='lazy' className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-money.png' alt='Wonderbot Money' />
				<img loading='lazy' className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-moderation.png' alt='Wonderbot Moderation' />
				<img loading='lazy' className='w-full py-1.5 rounded-2xl' src='/assets/wonderbot-corona.png' alt='Wonderbot Corona' />
			</div>
		</div>
		<div className='text-center'>
			<a href='https://github.com/wonderlandpark' target='_blank' rel='noreferrer'>
				<button className='mt-10 text-center bg-github-dark px-6 py-2 rounded-xl'>Githubμμ λλ³΄κΈ°</button>
			</a>
		</div>
	</Container>
}

export default Project