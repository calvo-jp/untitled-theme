import {styled} from '@/styled-system/jsx';
import {button} from '@/styled-system/recipes';
import {ark} from '@ark-ui/react/factory';

export const Button = styled(ark.button, button, {
	defaultProps: {
		type: 'button',
	},
});
