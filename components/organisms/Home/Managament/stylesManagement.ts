export const styles = {
    main: {
        width: "100%",
        height: "auto",
    },
    container: {
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
    },
    sectionImage: {
        width: { xs: "100%", md: "54%" },
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-end" },
        mr: { xs: "0", md: "4rem" }
    },
    sectionText: {
        width: { xs: "100%", md: "21rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" }
    },
    title: {
        mb: "1.5rem",
        fontWeight: { xs: 600, md: 400 },

    }
}