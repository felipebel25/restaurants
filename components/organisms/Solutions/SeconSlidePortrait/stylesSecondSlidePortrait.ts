export const styles = {
    main: {
        height: "700px",
        width: "100%",
        display: "flex",
    },
    slidesSide: {
        width: "45%",
        height: "100%",
        flexDirection: "column",
        overflowY: "auto",
        pt: "6rem",
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
        '::-webkit-scrollbar': {
            display: 'none'
        }

    },
    videosSide: {
        width: "55%",
        height: "100%",
        display: "flex",
        justifyContent: "center",

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
        m: "0 2rem"


    },
    slideText: {
        width: "80%"
    },


}