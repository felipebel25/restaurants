import { SxProps } from "@mui/system"

interface ButtonCategoriesProps {
  main: SxProps,
  container: SxProps,
  container_buttons: SxProps,
  container_text: SxProps,
  container_title: SxProps,
  image: SxProps,
  btn: SxProps,
  btn_category: SxProps,
  btn_category_active: SxProps,
  btn_icon: SxProps,
  btn_icon_active: SxProps,

}


const STYLE: ButtonCategoriesProps = {

  main: {},
  container: {

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around',

  },

  container_buttons: {


    display: "flex",
    flexDirection: "column",

    gap: "1rem"
  },

  container_text: {
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    itemsAlign: "center",
  },

  container_title: {
    display: "flex",
    minWidth: "520px",
    maxWidth: "520px",
    flexDirection: "column",
    textAlign: "center",
    itemsAlign: "center",
    gap: "1rem",
  },

  image: {
    margin: "auto"
  },

  btn: {
    margin: "auto",
    width: "15rem",
    fontWeight: 600,
    textTransform: "none",
    boxShadow: '0px 11px 17px 7px rgba(236, 101, 51, 0.29)'
  },

  btn_category: {
    color: "#6B7280",
    boxShadow: "0px 11px 17px 7px #F3F4F6",
  },
  btn_category_active: {
    fontWeight: 700,
    boxShadow: "0px 11px 17px 7px #F3F4F6",
  },

  btn_icon: {
    fontSize: "2rem",
    fill: "#EC6533",
  },

  btn_icon_active: {
    fill: "#fff",
    fontSize: "2rem",
    fontWeight: "2rem"
  }
}

export default STYLE