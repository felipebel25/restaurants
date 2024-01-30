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
    container: {
    },
    containerMobile: {
        display: "block",
        '@media (min-width:900px)': {
            display: "none"
        }
    },
    toolBar: {
        width: "100%",
        flexDirection: { xs: "row", md: "row" },
        justifyContent: { lg: "space-between", xs: "space-between" },
        gap: "4.375rem",
        padding: { xs: "0", md: "0.25rem" }
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
        fontSize: { xs: "0.85rem", md: "1.125rem" },
        height: { xs: "3.3rem", md: "2.75rem" },
        backgroundColor: "white.main",
        color: "primary.main",
        margin: "0.25rem auto"
    },



}