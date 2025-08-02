import Header from './Header'

const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/demos' element={<Demos />} />
				<Route path='/about' element={<About />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/pages' element={<Pages />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	)
}

export default App
