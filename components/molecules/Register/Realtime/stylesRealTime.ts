export const styles = {
    main: {
        width: "100%",
        maxWidth: "lg",
        m: {xs:"5rem auto",md:"3rem auto"},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
    },
    sideImage: {
        '& > img': {
            width: { xs: "100%", md: "589px" },
            height: { xs: "auto", md: "426px" }
        }
    },
    sideText: {
        width: { xs: "94%", md: "42%" },
        display: "flex",
        m: { xs: "0 auto", md: "0" },
        flexDirection: "column",
        pt: { xs: "1rem", md: "5rem" },
        gap: "1rem",
        textAlign: { xs: "center", md: "left" },



    }
}