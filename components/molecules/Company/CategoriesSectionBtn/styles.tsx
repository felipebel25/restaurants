const STYLE = {
  container: {
    width: "max-content",
    display: "flex",
    margin: "auto",
    gap: "5rem"
  },

  container_reverse: {
    width: "max-content",
    display: "flex",
    flexDirection: "row-reverse",
    margin: "auto",
    gap: "5rem"
  },

  container_title: {
    display: "flex",
    maxWidth: '50ch',
    flexDirection: "column",
    justifyContent: "left",

    gap: "1.5rem",
  },

  image: {
    margin: "auto",
  },

  title: {
    color: "#111827",
    minWidth: "450px",
    maxWidth: "450px",
    fontSize: "3rem",
    fontWeight: 700,
    fontStyle: "normal"
  },

  btn: {
    width: "14rem",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: 500,
  },

  container_list: {
    display: "flex",
    fontSize: "14px",
    flexDirection: "column",
    textAlign: "left",
    gap: ".5rem",
    color: "#6B7280",
  },

  container_buttons: {

    display: "flex",
    flexWrap: "wrap",
    flexShrink: 0,
    gap: "1rem",
    justifyContent: 'center',
    alignItems: 'center',
  },


  btn_category: {
    display: "flex",
    flexShrink: 0,
    flexDirection: "column",
    gap: "0.5rem",
    fontSize: ".8rem",
    fontWeight: 700,
    boxShadow: "0px 11px 17px 7px #F3F4F6",
    textTransform: "none",

  },


  icon: {
    fontSize: "2rem",
  },



}

export default STYLE