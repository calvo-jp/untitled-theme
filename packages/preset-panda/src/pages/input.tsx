import {Button} from '@/components/button';
import {Input} from '@/components/input';
import {Box} from 'styled-system/jsx';

export default function InputPage() {
	return (
		<Box maxW="22rem">
			<Input w="full" size="lg" placeholder="Username" data-invalid />
			<Input w="full" size="lg" mt={5} placeholder="Password" value="Password" />
			<Button w="full" size="lg" mt={8}>
				Submit
			</Button>
		</Box>
	);
}
