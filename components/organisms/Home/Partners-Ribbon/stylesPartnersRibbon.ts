export const styles = {
    container: {
        backgroundColor: "black.main",
        border: { xs: "none", md: "1px solid #EBEBEB" },
        borderRadius: "12px",
        display: "flex",
    },
    main: {
        overflow: { xs: "auto", lg: "hidden" },
        gap: { md: "1rem" },
        flexDirection: "row",
        justifyContent: { xs: "space-between", md: "space-between" },
        alignItems: "center",
        paddingY: { xs: "0.5rem", md: "0" },
        '& img': {
            cursor: "pointer",
            '&:hover': {
                filter: ' brightness(320%)'
            }
        }
    },

}