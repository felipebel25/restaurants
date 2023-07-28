import { Stack } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface CardDescriptionGroupProps {
    children?: ReactNode
    color?: string
}

const CardDescriptionGroup: FunctionComponent<CardDescriptionGroupProps> = ({ children, color }) => {
    return (

        <Stack
            direction={'row'}
            flexWrap={'wrap'}
            borderRadius={'4rem'}
            gap='2rem'
            justifyContent={'space-around'}
            width={'100%'}
            flex={1}
            p='3rem'
            sx={{ background: color }}
        >
            {children}

        </Stack>

    );
}

export default CardDescriptionGroup;