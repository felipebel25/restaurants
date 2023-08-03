
//Plans
import EatsyBasicBanner from 'public/images/plans/EatsyBasic.png'
import EatsyProBanner from 'public/images/plans/EatsyPro.png'
import EatsyUltimateBanner from 'public/images/plans/EaysyUltimate.png'

//Benefits
import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'

export const plansText = {
  Hero: {
    title: "We adapt to your needs",
    subTitle: "Explore which of our plans is made for you",
  },

  Plans: [
    {
      cover: EatsyBasicBanner,
      name: "Eatsy Basic",
      title: "FREE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      color: "#FAC844",
      backgroundColor: 'linear-gradient(315deg, rgba(250, 200, 68, 0.28) 0%, rgba(250, 200, 68, 0.08) 100%)',
      starred: false,
      features: ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"],
      ctaLabel: "",
      terms: ""
    },
    {
      cover: EatsyProBanner,
      name: "Eatsy Pro",
      title: "$59,99/Month",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      color: "#EC6533",
      backgroundColor: '',
      starred: true,
      features: ["Up to 10 employees", "Single menu", "Up to 5 categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"],
      ctaLabel: "",
      terms: ""
    },
    {
      cover: EatsyUltimateBanner,
      name: "Eatsy Ultimate",
      title: "CUSTOM",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      color: "#74DED1",
      backgroundColor: 'linear-gradient(315deg, rgba(116, 222, 209, 0.31) 0%, rgba(116, 222, 209, 0.13) 100%)',
      starred: false,
      features: ["Up to 50 employees", "Up to 5 menus", "Unlimited amount of categories", "Unlimited amount of products", "Up to 15gb of data storage", "Customizable dashboard styles"],
      ctaLabel: "",
      terms: ""
    }


  ],

  Benefits: {
    title: "Questions & answers",
    subTitle: "A little more information about Eatsy and your plans",
    benefits: [
      {
        icon: Star,
        label: "Aircraft Benefits",
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      },
      {
        icon: Group,
        label: "Aircraft Benefits",
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      },
      {
        icon: Alert,
        label: "Aircraft Benefits",
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      },
      {
        icon: Calendary,
        label: "Aircraft Benefits",
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      }
    ]
  },

  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
}
