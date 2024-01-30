export const styles = {
    main: {
        background: 'linear-gradient(111.04deg, rgba(19, 27, 53, 0.47) 0.03%, rgba(32, 37, 63, 0.47) 97.1%)',
        backgroundBlendMode: 'lighten',
        height: { xs: "auto", md: "500px" },
        width: { xs: "100%", md: "75%" },
        borderRadius: "2.125rem",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        padding: { xs: "2rem", md: "0" }
    },
    sideText: {
        width: { xs: "100%", md: "58%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        p: { xs: "0", md: "2rem" },
        pt: { xs: "2rem", md: "2rem" },
        textAlign: { xs: "center", md: "left" },

    },
    sideImage: {
        width: { xs: "100%", md: "42%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    description: {
        width: "100%",
        m: { xs: "1rem 0", md: "0" }
    },
    button: {
        width: { xs: "11rem", md: "fit-content" },
        boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
        borderRadius: "1rem",
        height: { xs: "3rem", md: "auto" },
        m: { xs: "1rem auto", md: "0" },
    },
    textTry: {
        color: "primary.main",
        textDecoration: "underline"
    }

}