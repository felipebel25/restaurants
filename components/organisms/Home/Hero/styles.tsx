import { SxProps } from "@mui/system"


interface HeroStylesProps {
  container: SxProps,
  rating: SxProps,
  title: SxProps,

}
const STYLE: HeroStylesProps = {
  container: {
    gap: '6rem',
    alignItems: 'center',
    overflow: 'visible',
    backgroundImage: "url(/images/home/hero/01-background-hero.png)",
    backgroundSize: "100%"
  },
  title: {
    textAlign: { xs: "center",md: "left" },
    '& > strong': {
      background: '-webkit-linear-gradient(#FF6B17, #FFB74B)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  },

}

export default STYLE