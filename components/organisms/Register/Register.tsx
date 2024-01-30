import { useState } from "react";
import {
    Box,
    Container,
    Stack,
} from "@mui/material";

import EmailVerificationModal from "../EmailVerificationModal/EmailVerificationModal";
import RegistrationCard from "@components/molecules/Register/RegistrationCard/RegistrationCard";
import { styles } from "./stylesRegister";
import { RegistrationText } from "@components/molecules/Register/RegistrationText/RegistrationText";
import { Crm } from "../../molecules/Register/Crm/Crm";
import { Hierarchy } from "../../molecules/Register/Hierarchy/Hierarchy";
import { RealTime } from "../../molecules/Register/Realtime/RealTime";
import { OnePlace } from "../../molecules/Register/OnePlace/OnePlace";
import { Track } from "../../molecules/Register/Track/Track";
import { MobileFriendly } from "../../molecules/Register/MobileFriendly/MobileFriendly";

export const Register = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const OpenModal = () => setModalOpen(true);
    const CloseModal = () => setModalOpen(false);

    const OnFormSubmitted = (credentials: any) => {
        OpenModal();
    }; //CLoes OnFormSubmitted method

    return (
        <>
            <Box sx={styles.main} >
                <Container maxWidth={"lg"}>
                    <Stack sx={styles.container}>
                        {/* ---------------------Text Section-------------------------- */}
                        <RegistrationText />
                        {/* ---------------------Form------------------ */}
                        <RegistrationCard OnSubmit={OnFormSubmitted} />
                    </Stack>
                </Container>
            </Box>
            <Crm />
            <Hierarchy />
            <RealTime />
            <MobileFriendly />
            <OnePlace />
            <Track />   
            {/* ------------Modals--------------- */}
            <EmailVerificationModal
                Open={modalOpen}
                CloseCallback={CloseModal}
            />
        </>
    )
}
