
import { useState } from 'react';

export function useModal(initialIsOpen = false) {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const [isClosing, setIsClosing] = useState(false);

    const open = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const close = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300); // match modal closeTimeoutMS
    };

    return {
        isOpen,
        isClosing,
        open,
        close,
    };
}
