export const styles = {
    slide: {
        width: { xs: "100%", md: "80%" },
        height: { xs: "auto", md: "422px" },
        margin: "0 auto",
        backgroundColor: "#131B3578",
        borderRadius: "1.5rem",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
    },
    slideTextSection: {
        width: { xs: "100%", md: "47.5%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: { xs: "0.7rem", md: "3rem" },
        pb: { xs: "2rem", md: "3rem" },
        textAlign: { xs: "center", md: "left" }
    },
    slideImageSection: {
        width: { xs: "100%", md: "52.5%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: "1rem", md: "0" },
        '& img': {
            top: { xs: "0 !important", md: "-2.7rem !important" }
        }
    },
    touchIcon: {
        border: "1px solid red",

    }
}