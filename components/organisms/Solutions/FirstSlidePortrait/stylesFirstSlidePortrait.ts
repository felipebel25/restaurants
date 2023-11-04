export const styles = {
    main: {
        display: "flex",
        width: "100%",
        height: "500px"
    },
    sectionSlides: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    sectionVideos: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    slide: {
        width: "80%",
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
        width: "80%",
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
    }
}