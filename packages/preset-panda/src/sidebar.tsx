import {NavLink} from 'react-router-dom';
import {css} from 'styled-system/css';
import {styled} from 'styled-system/jsx';

export function Sidebar() {
	return (
		<styled.div p={5} w="14rem">
			<styled.nav>
				<styled.ul>
					<styled.li>
						<NavLink
							to="/button"
							className={css({
								_currentPage: {
									color: 'red',
								},
							})}
						>
							Button
						</NavLink>
					</styled.li>
				</styled.ul>
			</styled.nav>
		</styled.div>
	);
}
