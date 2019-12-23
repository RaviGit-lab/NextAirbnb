import houses from './houses.json'
import House from '../components/House'
import Link from 'next/link'

//...
import Layout from '../components/Layout'
import Header from '../components/Header'

const content = (

  <div>
	
	<h2>Places to stay</h2>
	{/*<Link href='/blog'>
	<a>Blog</a>
	</Link>*/}
		<div className='houses'>
		  {houses.map((house, index) => {
			return <House key={index} {...house} />
		  })}
		</div>

		<style jsx>{`
		  .houses {
			display: grid;
			grid-template-columns: 50% 50%;
			grid-template-rows: 300px 300px;
			grid-gap: 40px;
		  }
		`}</style>

    { /* all the rest of the JSX that we had in `pages/index.js` */}
  </div>
)

const Index = () => <Layout content={content} />

export default Index
