export const styles = {
    footer: {
        paddingTop: { xs: "2rem", md: "5rem" },
        paddingBottom: "3.25rem",
        backgroundColor: "#1B1B1B",
        borderRadius: { xs: "24px 24px 0px 0px", md: "0" }
    },
    container: {
        display: "flex",
        alignItems: { xs: "center", md: "flex-start" },
        flexDirection: { xs: "column", md: "column" },
        textAlign: { xs: "center", md: "left" },
        gap: { xs: "1.25rem", md: "2.5rem" }

    },
    content: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%"
    },
    contactSection: {
        order: {xs:2 , md:0}
    },
    emailSection: {
        width: { xs: "100%", md: "23rem" },
        ml: { xs: "0 !important", md: "2rem" },
        order: {xs:1 , md:0},
        mb: "2rem !important",

    },
    legalSection: {
        display: { xs: "none", md: "block" }
    },
    siteMapSection: {
        display: { xs: "none", md: "block" }
    },
    input: {
        color: "white",
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: "1px",
            borderColor: "white !important"
        },
        '&::placeholder': {
            color: "white !important"
        }
    },
    emailTitle: {
        fontSize: { xs: "1.5rem", md: "auto" },
    },
    emailDescription: {
        margin: { xs: "1.6rem 0 !important", md: "auto" },
    }
}