import {Icon} from '@/components/icon';
import {Box} from '@/styled-system/jsx';
import {Settings01Icon} from '@unofficial-untitled-ui/icons-react';

export default function Landing() {
	return (
		<Box p="5">
			<Icon w={5} h={5} color="brand.800">
				<Settings01Icon />
			</Icon>
		</Box>
	);
}
