import { ReactElement } from "react"
import { ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { styles } from "./stylesCardFAQ"
interface Props {
    title: ReactElement;
    description: string;
    subDescription?: boolean;
}


export const CardFAQ = ({ title, description, subDescription = true }: Props) => {
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
                    {subDescription && <Typography sx={styles.subTitle}>{description.slice(0, 35)}... </Typography>}
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
