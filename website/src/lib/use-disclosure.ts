import {useState} from 'react';

export function useDisclosure(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
