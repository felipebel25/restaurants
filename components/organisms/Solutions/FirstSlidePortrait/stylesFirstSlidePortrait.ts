export const styles = {
    main: {
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "100%",
        height: { xs: "auto", md: "500px" },
        mt: "5rem"
    },
    sectionSlides: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    sectionVideos: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        mb: { xs: "3rem", md: "0" }
    },
    slide: {
        width: { xs: "100%", md: "80%" },
        height: "40%",
        borderRadius: "2rem",
        backgroundColor: "#27272A",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        cursor: "pointer"
    },
    slideInactive: {
        width: { xs: "100%", md: "80%" },
        height: "40%",
        borderRadius: "2rem",
        backgroundColor: "#27272A",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        cursor: "pointer",
        opacity: 0.3
    },
    titleSlide: {
        fontSize: "2.2rem"
    },
    button: {
        mt: "2rem"
    }
}