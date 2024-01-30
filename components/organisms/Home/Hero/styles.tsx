
const STYLE = {
  container: {
    alignItems: 'center',
    height: { xs: "auto", md: "auto" },
    flexDirection: { xs: "column-reverse", md: "row" },
    justifyContent: { md: "space-between" },
    padding: { md: "4rem 0" }

  },
  title: {
    textAlign: { xs: "center", md: "left" },
    fontSize: { xs: "1.8rem", md: "3.5rem" },
    lineHeight: { xs: "2rem", md: '3.5rem' },
    '& > strong': {
      background: '-webkit-linear-gradient(#FF6B17, #FFB74B)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }
  },
  description: {
    textAlign: { xs: "center", md: "left" },
    fontWeight: 400,
    fontSize: { md: "1.4993rem" },
    m: { xs: "1.3rem 0", md: "2rem 0" },
    '& br': {
      display: { xs: "none", md: "block" }
    }
  },
  button: {
    width: { xs: "11rem", md: "fit-content" },
    boxShadow: "0px 11px 17px 7px rgba(236, 101, 51, 0.29)",
    borderRadius: "1rem",
    height: { xs: "3rem", md: "auto" },
    m: { xs: "0 auto", md: "0" },

  },
  sectionVideo: {
    width: { xs: "103%", md: "50%" },
  },
  sectionText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: { xs: "center", md: "flex-start" },
  }

}

export default STYLE;