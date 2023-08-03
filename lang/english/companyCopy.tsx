import { Edit, EventAvailableRounded, GridViewRounded } from "@mui/icons-material";

//Hero
import HeroCover from 'public/SVG/Group28.svg'

//CategoriesGried
import Bag from 'public/componets/Bag'
import Group from 'public/componets/Group'
import Rocket from 'public/componets/Rocket'
import Star from 'public/componets/Star'

//CoreValues

import Alert from 'public/componets/Alert'
import Calendary from 'public/componets/Calendary'

//Relevant Aspects
import RelevantAspectCover from 'public/images/company/secondCover.png'

//Category 
import CategoryCover from 'public/SVG/Group56.svg'

export const companyText = {

  Hero: {
    cover: HeroCover,
    title: "Second important title, call to action",
    description: <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br /><br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</>,
    feature: ["Relevant feature", "Important details", "Interest categories", "Relevant feature"],
    ctaLabel: "Buy Now",
  },

  CategorySelection: {
    title: "Second important title, call to action",
    description: <>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. <br /><br /> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</>,
    ctaLabel: "Buy Now",
    categories: [
      { label: 'Lorem Ipsum', icon: Bag },
      { label: 'Lorem Ipsum', icon: Group },
      { label: 'Lorem Ipsum', icon: Rocket },
      { label: 'Lorem Ipsum', icon: Star }
    ]
  },

  CoreValues: [
    {
      title: '+1000',
      subtitle: 'Lorem Ipsum',
      icon: Star
    }, {
      title: '40',
      subtitle: 'Lorem Ipsum',
      icon: Group
    }
    , {
      title: '10',
      subtitle: 'Lorem Ipsum',
      icon: Alert
    }, {
      title: '800',
      subtitle: 'Lorem Ipsum',
      icon: Calendary
    }
  ],

  RelevantAspects: {
    title: "Relevant aspects of the company",
    body: <>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </>,
    ctaLabel: "",
    cover: RelevantAspectCover,
  },

  Categories: {
    ctaLabel: "",
    cover: CategoryCover,
    categories: [
      {
        icon: EventAvailableRounded,
        title: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        color: '#EC6533'
      },
      {
        icon: Edit,
        title: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        color: '#FAC844'
      },
      {
        icon: GridViewRounded,
        title: 'Category',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
        color: '#74DED1'
      }
    ]
  },

  title: "Second important title, call to action",
  title2: "Relevant aspects of the company",
  description: "Third title, information of interest to the user, lorem ipsum dolor sit amet, consectetuer  elit, lu sed diam nonummy nibh euismod.",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  text2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",


  Features: [

    {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      color: '#EC6533',
      icon: EventAvailableRounded,
    },
    {
      title: 'Item 2',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      color: '#FAC844',
      icon: Edit,
    },
    {
      title: 'Item 3',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      color: '#74DED1',
      icon: GridViewRounded,
    },
  ]
}

