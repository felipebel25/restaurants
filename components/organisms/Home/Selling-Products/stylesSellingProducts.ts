export const styles = {
    main: {
        height: { xs: "26rem", md: "39.18rem" },
        width: "100%",
        backgroundImage: "url(/images/home/selling-products/01-background-selling-products.png)",
        backgroundSize: { xs: "100%", md: "47%" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "top", md: "center" },
    },
    container: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "0"
    },
    textSection: {
        width: { xs: "100%", md: "37.5rem" },
        textAlign: "center",
    },
    title: {
        textAlign: "center",
        mb: "1rem",
        fontWeight: { xs: 600, md: 400 },
        '& br': {
            display: { xs: "none", md: "block" }
        }
    }
}