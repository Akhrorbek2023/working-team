const Header = () => {
	return (
		<>
			<header>
				<h1>Welcome to Our Application</h1>
				<nav>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
				</nav>
				<div className='user-info'>
					<p>
						Logged in as: <strong>User123</strong>
					</p>
					<button>Logout</button>
				</div>
			</header>
		</>
	)
}

export default Header
