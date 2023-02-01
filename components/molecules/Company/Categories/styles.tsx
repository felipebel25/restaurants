const STYLE = {
  container: {
    width: "max-content",
    display: "flex",
    margin: "auto",
    gap: "10rem"
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
    minWidth: "400px",
    maxWidth: "400px",
    flexDirection: "column",
    justifyContent: "left",
    margin: "5rem auto auto auto",
    gap: "3rem",
  },

  image: {
    margin: "2rem auto auto auto",
  },

  title: {
    color: "#111827",
    minWidth: "350px",
    maxWidth: "350px",
    fontSize: "2rem",
    fontWeight: 700,
    margin:"0 0 0 -4rem",
    display: "flex",
    gap:"1rem",
    justifyContent: "left",
  },

  container_category:{
    display:"flex",
    flexDirection: "column",
  },

  btn_category: {
    width:"3rem",
    heigth:"3rem",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },

  btn_icons: {
    width: "18px",
    height: "18px",
  },

  btn: {
    width: "14rem",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: 500,
    marginLeft:"-3rem"
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
    margin: "auto",
    marginTop: "5rem",
    display: "flex",
    flexWrap: "wrap",
    width: "500px",
    gap: "2rem"
  },


  btn_category_active: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "1rem",
    backgroundColor: "#ffff",
    color: "#EC6533",
    width: "15rem",
    height: "14rem",
    fontWeight: 700,
    boxShadow: "0px 11px 17px 7px #F3F4F6",
    textTransform: "none",
  },

  icon: {
    fontSize: "3rem",
  },

  icon_active: {
    fontSize: "5rem",
  }

}

export default STYLE