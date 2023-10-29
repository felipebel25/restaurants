export const styles = {
    menu: {
        display: { xs: "flex", lg: "none" },
        top: "4rem",
        ul: {
            width: "15rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#232323",
            borderRadius: "0px 2rem 2rem 2rem"
        },
    },
    container:{
    },
    toolBar: {
        flexDirection: { xs: "row-reverse", md: "row" },
        justifyContent: { lg: "flex-start", xs: "space-between" },
        gap: "4.375rem",
    },
    menuItem: {
        '& a': {
            color: "#757575",
            textDecoration: "none"

        }
    },
    menuItemActive: {
        backgroundColor: "primary.main",
        padding: "1rem",
        margin: "0.5rem",
        borderRadius: "1rem",
        '& a': {
            color: "white.main",
            textDecoration: "none",
            fontWeight: "600"

        }
    },
    button: {
        height: "2.75rem",
        backgroundColor: "white.main",
        color: "primary.main",
        margin: "1rem auto"
    },



}