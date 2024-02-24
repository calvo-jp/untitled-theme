import {Button} from '@/components/button';
import {HStack} from 'styled-system/jsx';

export default function ButtonPage() {
	return (
		<HStack gap={4}>
			<Button>Click me</Button>
			<Button variant="outline">Click me</Button>
			<Button variant="ghost">Click me</Button>
		</HStack>
	);
}
