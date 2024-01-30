export const styles = {
    main: {
        maxWidth: "lg",
        m: {xs:"5rem auto",md:"3rem auto"},
        width: "100%",
        display: "flex",
        flexDirection: {xs:"column-reverse",md:"column"},
        gap: "2.5rem"
    },
    sideText: {
        textAlign: "center",
        maxWidth: "800px",
        m: "0 auto",

    },
    text: {
        mt: "2rem"
    },
    sideImage: {
        m: "0 auto",
        display:"flex",
        justifyContent: {xs:"center"},
        '& > img': {
            width: { xs: "92%", md: "662px" },
            height: { xs: "auto", md: "692px" }
        }
    }
}