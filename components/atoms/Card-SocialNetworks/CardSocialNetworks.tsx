import { ReactElement } from "react";
import { SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system"

import { Share} from "@mui/icons-material";

import { styles } from "./stylesCardSocialNetworks";

interface Props {
    Icon: ReactElement;
    name: string;
}

export const CardSocialNetworks = ({ Icon, name = '' }: Props) => {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.cardInfo}>
                <SvgIcon sx={styles.icon}>
                    {Icon}
                </SvgIcon>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Box>
            <SvgIcon>
                <Share />
            </SvgIcon>
        </Box>
    )
}
