export const styles = {
    main: {
        width: { xs: "93%", md: "100%" },
        maxWidth: "lg",
        m: "0 auto",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "space-around",
        backgroundColor: "black.light",
        padding: { xs: "1.5rem", md: "4.5rem" },
        borderRadius: "2rem",
    },
    sideText: {
        width: { xs: "100%", md: "42%" },
        textAlign: { xs: "center", md: "left" },
    },
    text: {
        mt: { xs: "1rem", md: "0" }
    },
    sideImage: {
        width: "auto",
        '& > img': {
            width: { xs: "100%", md: "540px" },
            height: { xs: "auto", md: "338px" }
        }

    },
    list: {
    },
    listItem: {
        display: 'list-item',
        '&::before': {
            content: '"•"',
            color: 'primary.main',
            fonWeight: 800,
            display: 'inline-block',
            width: '1rem',
            marginLeft: '-1em'
        }
    }

}