import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { styles } from "./stylesCardFAQ"
import { Bold } from "@components/atoms/Bold/Bold"
import { Box } from "@mui/system"
import { ReactElement } from "react"

interface Props {
    title: ReactElement;
    description: string;
}


export const CardFAQ = ({ title, description }: Props) => {
    return (
        <Accordion sx={styles.accordion}>
            <AccordionSummary
                sx={styles.accordionHeader}
                expandIcon={<ExpandMore color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box sx={styles.accordionHeaderTexts}>
                    <Typography
                        component="h6"
                        variant="h6"
                    >{title}</Typography>
                    <Typography sx={styles.subTitle}>{description.slice(0, 35)}... </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
