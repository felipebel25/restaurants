import { PropsWithChildren, createContext, useState } from "react";

export const ModalContext = createContext({} as { isOpenModal: boolean, onClose: () => void, onOpen: () => void });

export default function ModalProvider({ children }: PropsWithChildren) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const onClose = () => setIsOpenModal(false)
    const onOpen = () => setIsOpenModal(true)


    return (
        <ModalContext.Provider value={{ isOpenModal, onClose, onOpen }}>
            {children}
        </ModalContext.Provider>
    );
}
