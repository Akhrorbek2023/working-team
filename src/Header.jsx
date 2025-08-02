const Header = () => {
	return (
		<>
			<header className='flex flex-row items-center justify-between'>
				<a href='/'>
					<img src='/logo.png' alt='logo' />
				</a>
				<nav>
					<ul className='flex flex-row items-center gap-4'>
						<li>
							<a href='/demos'>Demos</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
						<li>
							<a href='/blog'>Blog</a>
						</li>
						<li>
							<a href='/pages'>Pages</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header
