import { SxProps } from "@mui/system"


interface HeroStylesProps {
  container: SxProps,
  rating: SxProps,
}
const STYLE: HeroStylesProps = {
  container: {
    gap: '6rem',
    alignItems: 'center',
    overflow: 'visible'
  },

  rating: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },

}

export default STYLE