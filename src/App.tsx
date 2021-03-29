import React, { useEffect } from 'react'
import Pageable from 'pageable'

import Hero from '@components/Hero'
import About from '@components/About'
import Stack from '@components/Stack'
import Project from '@components/Project'
import History from '@components/History'
import Contact from '@components/Contact'

const App = () => {
	useEffect(() => {
		new Pageable('#container', {
			animation: 500,
			swipeThreshold: 200
		})
	}, [])
	return <div id='container' className='w-full'>
		<div style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll'}}>
			<Hero />
			<About />
			<Stack />
			<Project />
			<History />
			<Contact />
		</div>
	</div>
}

export default App
