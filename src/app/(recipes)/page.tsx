import {Button} from '@/components/button';
import {Flex} from '@/styled-system/jsx';

export default function Recipes() {
  return (
    <Flex p={4} gap={2}>
      <Button size="sm" variant="outline" disabled>
        Click me
      </Button>
    </Flex>
  );
}
