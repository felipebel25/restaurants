import CardUser from "@components/atoms/Cards/CardUser/CardUser";
import { HomeSectionProps } from "@components/templates/Home/Home";
import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";


const ClientOpinions: FunctionComponent<HomeSectionProps> = () => {
    return (
        <Stack spacing={'4rem'} paddingBottom={'5.375rem '} alignItems={'center'}>

            <Typography variant="h3">Our clients think</Typography>
            <Stack
                gap={'2.41rem'}
                width={'100%'}
                direction={'row'}
                flexWrap={'wrap'}
                justifyContent={'space-around'}
            >
                <CardUser />
                <CardUser />
            </Stack>

        </Stack>);
}

export default ClientOpinions;