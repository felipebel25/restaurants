export const styles = {
    main: {
        display: "flex",
        flexDirection: { xs: "column" },
        width: "100%",
        height: { xs: "auto" },
        backgroundColor: "#27272A",
        borderRadius: "26.11px",
        padding: "1rem"

    },
    sectionSlides: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center"
    },
    sectionVideos: {
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "1rem",
        '& > img': {
            width: "100%",
            height: "auto",
        }

    },
    slide: {
        width: { xs: "100%", md: "80%" },
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        cursor: "pointer"
    },
    slideInactive: {
        width: { xs: "100%", md: "80%" },
        height: "40%",
        borderRadius: "2rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        cursor: "pointer",
        opacity: 0.3
    },
    titleSlide: {
        fontSize: "1.9rem",
        mb: "1rem"
    },
    description: {
        m: "0.5rem 0"
    }
}