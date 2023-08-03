import { Edit, EventAvailableRounded, GridViewRounded } from "@mui/icons-material";

//Hero
import HeroCover from "public/PNG/Group28.png";
import HeroCoverPhone from "public/PNG/Group28Mobile.png";

//Take Control
import TakeControlCard0 from "public/images/home/take-control/card0.png";

//Save Money
import SaveMoneyCover from "public/PNG/Group10.png";

//Add Images
import AddImagesPhone from 'public/images/home/add-images/cover-mobile.png';
import AddImagesMain from 'public/images/home/add-images/cover.png';

//Tracking
import TrackingImageLeft from "public/images/home/tracking/screen1.png";
import TrackingImageMiddle from "public/images/home/tracking/screen2.png";
import TrackingImageRight from "public/images/home/tracking/screen3.png";


export const homeText = {

  Hero: {
    title: "Boost your restaurant’s online sales with",
    titleMinified: "Boost your restaurant with",
    titleAccent: "Eatsy Orders",
    body: "Take back control of your online sales and save thousands of dollars on delivery apps like Uber Eats, Grubhub and Doordash",
    ctaLabel: "Get a Free Demo",
    reviewLabels: "Based on +10.000 reviews.",
    cover: {
      main: HeroCover,
      phone: HeroCoverPhone
    }
  },

  TakeControl: {
    title: "Take Back",
    titleAccent: "Control",
    body: <>The big delivery companies are <strong> NOT ONLY </strong> taking a high percentage of your sales, they are also keeping all the data of your customers, while you do all the work.</>,
    cards: [
      {
        title: 'Keep prices and your on-site menu always updated.',
        description: 'PDF menus are a thing of the past, they are expensive, and you waste your money every time you have to update them, Eatsy Orders allows you to have a menu on site for your customers, easy to access (QR and NFC), with photos and always updated information',
        image: TakeControlCard0,
      },
      {
        title: 'Save time managing all your information from one place.',
        description: 'Save money and time by updating your menu information (on-site, delivery and pickup) from a single platform',
        image: TakeControlCard0,
      }, {
        title: 'Professional and easy-to-use website.',
        description: 'Our technology works so that your site not only looks beautiful, it reduces the clicks a customer has to make so that ordering food online at your restaurant is as easy as on any platform.',
        image: TakeControlCard0,
      }
    ]
  },
  SaveMoney: {
    title: "Save money by managing your menu information in real time.",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: SaveMoneyCover,
  },

  Features: {
    cards: [
      {
        title: 'Automated',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        color: '#EC6533',
        icon: EventAvailableRounded,
      },
      {
        title: 'Manageble',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        color: '#FAC844',
        icon: Edit,
      },
      {
        title: 'Manageable',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
        color: '#74DED1',
        icon: GridViewRounded,
      },
    ]
  },
  AddImages: {
    title: 'Add images and full descriptions to your products.',
    body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    ctaLabel: 'know more',
    image: {
      main: AddImagesMain,
      phone: AddImagesPhone
    }
  },

  Tracking: {
    title: "Track the behavior of your customers on your digital menu.",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. \n Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    images: {
      left: TrackingImageLeft,
      middle: TrackingImageMiddle,
      right: TrackingImageRight,
    }
  },

  Reviews: {
    title: "Our clients think",
    users: [
      {
        name: "Romina Beltran",
        position: "Restaurant manager",
        review: "Lorem ipsum dolor sit amet, consectetuer ag ka elit, lu sed diam nonummy nibh euismod amet tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam.",
        profilePicture: ''
      },
      {
        name: "Romina Beltran",
        position: "Restaurant manager",
        review: "Lorem ipsum dolor sit amet, consectetuer ag ka elit, lu sed diam nonummy nibh euismod amet tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam.",
        profilePicture: ''
      }
    ]
  },

  NewsLetter: {
    title: 'Stay on top of new updates',
    description: 'Eatsy Orders is an all-in-one platform. Our mission is to provide the technology that helps small and medium-sized restaurants to take control of their customers and online sales.',
    ctaLabel: 'Get a Free Demo',
  }



}