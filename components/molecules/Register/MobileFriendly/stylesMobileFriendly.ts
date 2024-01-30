export const styles = {
    main: {
        maxWidth: "lg",
        m: {xs:"5rem auto",md:"3rem auto"},
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: { xs: "1rem", md: "2.5rem" }
    },
    sideText: {
        width: { xs: "90%", md: "100%" },
        maxWidth: "570px",
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
    },
    text: {
        mt: "2rem"
    },
    sideImage: {
        m: "0 auto",
        display:"flex",
        justifyContent: {xs:"center"},
        '& > img': {
            width: { xs: "90%", md: "434px" },
            height: { xs: "auto", md: "770px" }
        }
    }
}