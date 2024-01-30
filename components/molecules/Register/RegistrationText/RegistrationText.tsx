import { List, ListItem, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { styles } from './stylesRegistrationText'
import { Bold } from '@components/atoms/Bold/Bold'

export const RegistrationText = () => {
    return (
        <Stack sx={styles.main}>
            <Typography variant="h2">
                Growing your restaurant was never this <Bold> Eatsy</Bold>
            </Typography>
            <Typography variant="h6">
                PDF menus are from the past. Run your restaurant and enhance
                your brand with the power of a 100% interactive online menu.{" "}
            </Typography>
            <List sx={styles.list}>
                <ListItem sx={styles.listItem}>
                    <Typography>CRM Administrative Panel</Typography>
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Typography>
                        Change of products and prices in real time
                    </Typography>
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Typography>
                        Online Menu Optimized for mobile devices
                    </Typography>
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Typography>Take orders easily</Typography>
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Typography>
                        Track the behavior of your customers in the menu{" "}
                    </Typography>
                </ListItem>
                <ListItem sx={styles.listItem}>
                    <Typography>
                        Obtain relevant information about your menu
                    </Typography>
                </ListItem>
            </List>
        </Stack>
    )
}
