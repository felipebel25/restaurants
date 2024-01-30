export const styles = {
    main: {
        height: { xs: "38rem", md: "29.13rem" },
        width: "100%",
        backgroundImage: { xs: "url(/images/home/stop-wasting/02-background_stop_wasting_mobile.png)", md: "url(/images/home/stop-wasting/01-background_stop_wasting.png)" },
        backgroundSize: { xs: "100%", md: "80%" },
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem",
    },
    container: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "space-between", md: "flex-end" },
        alignContent: "flex-end",
        alignItems: "center",
        height: { xs: "100%", md: "100%" }
    },
    textSection: {
        width: { xs: "100%", md: "35%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-end", md: "center" },
        textAlign: { xs: "center", md: "left" },

    },
    title: {
        mb: "1.2rem",
        fontSize: { xs: "1.5rem", md: "2.125rem" },
        fontWeight: { xs: 600, md: 400 },
    },
    button: {
        width: { xs: "auto", md: "fit-content" },
        boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
        m: { xs: "0 auto", md: "1.5rem 0" },
        height: "3rem",
        mt: { xs: "2rem", md: "1.2rem" }
    }
}