import {Link} from 'react-router-dom';
import {styled} from 'styled-system/jsx';

export function Navbar() {
	return (
		<styled.header px={5} py={3} borderBottomWidth="1px">
			<Link to="/">Home</Link>
		</styled.header>
	);
}
