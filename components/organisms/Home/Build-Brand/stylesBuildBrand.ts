export const styles = {
    main: {
        width: "100%",
        height: "auto",
        padding: "0 !important",
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        padding: "0 !important",

    },
    button: {
        width: { xs: "70%", md: "fit-content" },
        boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
        margin: { xs: "1.5rem auto", md: "1.5rem 0" },
        height: "3rem",
    },
    sectionText: {
        width: { xs: "100%", md: "30%" },
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mr: "-4rem",
        textAlign: { xs: "center", md: "left" },

    },
    sectionImage: {
        width: "auto",
        display: { xs: "flex", md: "block" },
        justifyContent: "center",
    },
    title: {
        mb: "1.5rem",
        fontWeight: { xs: 600, md: 400 },
    }
}