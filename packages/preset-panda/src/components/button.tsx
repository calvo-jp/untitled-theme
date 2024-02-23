import {ark} from '@ark-ui/react';
import {styled} from 'styled-system/jsx';
import {button} from 'styled-system/recipes';

export const Button = styled(ark.button, button, {
	defaultProps: {
		type: 'button',
	},
});
