import React, { FC } from 'react'
import Container from './Container'

const History:FC = () => {
	return <Container id='history'>
		<h1 className='text-5xl font-bold'><span role='img' aria-label='trophy'>🏆</span> 수상/이력</h1>
		<ul className='list-disc mt-10'>
			<li>21.01.29 제4회 선린인터넷고등학교 LOGCON 금상(1위)</li>
			<li>20.11.14 제6회 한세사이버보안고 중학생 정보보안 콘테스트 1위</li>
			<li>19.11.29 서울특별시 강남서초교육지원청 영재교육원 융합정보분야 수료</li>
		</ul>
	</Container>
}

export default History