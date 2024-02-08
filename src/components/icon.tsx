import {styled} from '@/styled-system/jsx';
import {icon} from '@/styled-system/recipes';
import {ark} from '@ark-ui/react/factory';

export const Icon = styled(ark.svg, icon, {
	defaultProps: {
		asChild: true,
		strokeWidth: 1.66667,
	},
	shouldForwardProp(key) {
		return ['strokeWidth'].includes(key);
	},
});
