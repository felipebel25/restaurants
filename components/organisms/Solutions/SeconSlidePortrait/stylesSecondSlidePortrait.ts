export const styles = {
    main: {
        height: "700px",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },

    },
    slidesSide: {
        width: { xs: "100%", md: "45%" },
        height: "100%",
        flexDirection: "column",
        overflowY: "auto",
        pt: { md: "6rem" },
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
        '::-webkit-scrollbar': {
            display: 'none'
        }

    },
    videosSide: {
        width: { xs: "100%", md: "55%" },
        height: { xs: "auto", md: "100%" },
        display: "flex",
        justifyContent: "center",
        padding: "3rem",
        '& > img': {
            width: { xs: "100%", md: "auto" },
            height: { xs: "100%", md: "auto" },
        }

    },
    slide: {
        height: "250px",
        margin: "2rem 0",
        display: "flex",
        cursor: "pointer",
        '&:hover': {
            opacity: 0.8
        }

    },
    slideUnabled: {
        opacity: 0.2,
        height: "250px",
        margin: "2rem 0",
        display: "flex",
        cursor: "pointer",
        '&:hover': {
            opacity: 0.65
        }

    },
    slideIcon: {
        width: "55px",
        height: "55px",
        m: { md: "0 2rem" }


    },
    slideText: {
        width: "80%"
    },


}