import React, { FC } from 'react'
import Container from './Container'

const History:FC = () => {
	return <Container id='history'>
		<h1 className='text-5xl font-bold'><span role='img' aria-label='trophy'>π</span> μμ/μ΄λ ₯</h1>
		<ul className='list-disc mt-10'>
			<li>21.01.29 μ 4ν μ λ¦°μΈν°λ·κ³ λ±νκ΅ LOGCON κΈμ(1μ)</li>
			<li>20.11.14 μ 6ν νμΈμ¬μ΄λ²λ³΄μκ³  μ€νμ μ λ³΄λ³΄μ μ½νμ€νΈ 1μ</li>
			<li>19.11.29 μμΈνΉλ³μ κ°λ¨μμ΄κ΅μ‘μ§μμ²­ μμ¬κ΅μ‘μ μ΅ν©μ λ³΄λΆμΌ μλ£</li>
		</ul>
	</Container>
}

export default History