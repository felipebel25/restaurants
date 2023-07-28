import { SxProps } from "@mui/system"


interface HeroStylesProps {

  rating: SxProps,
}
const STYLE: HeroStylesProps = {


  rating: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },

}

export default STYLE