export const styles = {
    main: {
        maxWidth: "lg",
        m: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "column" },
        gap: "2.5rem",
        p: { xs: "4rem 1rem", md: "0" }
    },
    sideText: {
        textAlign: "center",
        maxWidth: "700px",
        m: "0 auto",
    },
    text: {
        textAlign: { xs: "center", md: "left" },
        mt: "1.3rem"
    },
    sideImage: {
        '& > img': {
            width: { xs: "100%", md: "1203px" },
            height: { xs: "auto", md: "591px" }
        }
    }
}