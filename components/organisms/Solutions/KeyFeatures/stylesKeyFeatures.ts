export const styles = {
    main: {
        backgroundColor: "#27272A",
        height: { xs: "auto", md: "550px" },
        width: { xs: "100%", md: "70%" },
        borderRadius: "2.125rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "1.5rem" }
    },
    textSide: {
        width: { xs: "100%", md: "47%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
    },
    textTitle: {

    },
    textDescription: {
        m: "1.3rem 0"
    },
    videoSide: {
        width: { xs: "100%", md: "45%" },
        height: "100%",
        '&  > video': {
            position: { xs: "initial !important", md: "relative" },
            right: { xs: "" }
        }
    },
    button: {
        width: { xs: "11rem", md: "fit-content" },
        boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
        borderRadius: "1rem",
        height: { xs: "3rem", md: "auto" },
        m: { xs: "0 auto", md: "0" },

    },
}