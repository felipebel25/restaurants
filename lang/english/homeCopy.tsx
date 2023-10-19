import { Edit, EventAvailableRounded, Facebook, GridViewRounded, Instagram, WhatsApp } from "@mui/icons-material";

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
import { Bold } from "@components/atoms/Bold/Bold";


export const homeText = {

  Hero: {
    title: <>Eleveate Your <br /> Dining Experience!</>,
    titleMinified: "Boost your restaurant with",
    titleAccent: "Eatsy Orders",
    body: <>Say Goodbye to Boring and static PDF Menus! <br />  Handle your orders, products, appereance in a single place.</>,
    ctaLabel: "Start Now",
    reviewLabels: "Based on +10.000 reviews.",
    cover: {
      main: HeroCover,
      phone: HeroCoverPhone
    }
  },
  StopWasting: {
    title: <>Stop wasting<br /> <strong>time and money</strong> with<br /> printed or PDF menus.</>,
    body: "Whether your menu changes or prices need to be updated you are stuck into the same format that is already printed up. This implies new costs and most importantly time that you should be using to attend your clients."

  },
  SellingProducts: {
    title: <>Selling your products was never<br /> this <Bold>Easy</Bold>!</>,
    body: "Welcome to the future of dining out! Introducing our cutting-edge restaurant menu and product app, your gateway to a culinary adventure like no other."
  },

  FrictionAccess: {
    title: <>Frictionless access to <br />
      your <Bold>Products</Bold></>,
    body: "Onsite Menu transforms the way you explore our menu. Immerse yourself in a mouthwatering visual journey with high-definition images of every dish. Swipe, pinch, and zoom to get up close and personal with your next culinary delight.",
    cover: {
      main: "/images/home/friction-access/01-friction-access.png"
    }
  },
  PersonalizeYour: {
    title: <>Personalize Your <br /><Bold>Culinary Journey</Bold></>,
    body: <>With <strong>Eatsy Orders</strong>, you have the opportunity to curate a special collection that showcases your culinary expertise as recommendation for your customers.</>
  },
  BuildBrand: {
    title: <>Build Your <Bold>Brand</Bold></>,
    body: "Eatsy empowers your brand by providing you with the ability to customize how your customers perceive and engage with your products. We are here to empower your brand, the platform is yours.",
    ctaLabel: "Start Now",
    cover: {
      main: "/images/home/build-brand/01-build-brand.png"
    }
  },
  CentralizePresence: {
    title: <>Centralize Your <Bold>Online Presence</Bold></>,
    body: "With Eatsy, you can effortlessly centralize and optimize your social media presence, making it easier than ever to connect with your audience and drive traffic to your social platforms.",
    cards: [
      {
        id: 123,
        title: '@McDonaldsUSA',
        image: <Instagram />,
      },
      {
        id: 124,
        title: '@McDonaldsUSA',
        image: <WhatsApp />
      },
      {
        id: 125,
        title: '@McDonaldsUSA',
        image: <Facebook />
      }
    ]
  },
  Management: {
    title: <>All your <Bold>management</Bold> in a single place</>,
    body: <>With <strong>Eatsy Orders Admin</strong>, you can streamline your business management without the need for multiple platforms. In one convenient dashboard accessible through your web browser, you have full control over your products, employees, locations, branding, and so much more!.</>,
    cover:{
      main:"/images/home/management/01-management.png"
    }
  },
  SlidesSection: {
    card: [
      {
        title: <>
          Your Ultimate<br />
          Order Management  <br />
          <Bold>Solution</Bold>
        </>,
        description: "Eatsy Orders streamlines all your orders in one convenient platform, whether they originate from inside your restaurant or your clients' homes.",
        image: '/images/home/slides/01-ultimate-order.png',
        altImage: "Order Management"
      },

      {
        title: <>
          <Bold>Real-Time</Bold> <br />
          Updates
        </>,
        description: "Update your menus in real-time, whether<br /> it&apos;s seasonal specials, limited-time offers, or ingredient substitutions.",
        image: '/images/home/slides/02-real-time.png',
        altImage: "Real-Time Updates"
      },
      {
        title: <>
          <Bold>Interactive</Bold> Dining<br />
          Experience
        </>,
        description: "Engage your customers like never before with our interactive dining experience. With Eatsy Orders - Onsite Menu™ , your patrons can explore high-definition images, dish descriptions, allergen information, all at their fingertips.",
        image: '/images/home/slides/03-interactive.png',
        altImage: "Interactive Dining Experience"
      },
      {
        title: <>
          <Bold>Personalization</Bold> &<br />
          Recommendations
        </>,
        description: "Boost customer satisfaction with our personalized recommendations. Eatsy Orders allows you to create guided flows, allowing you to tailor suggestions based on their actions on your menu.",
        image: '/images/home/slides/04-personalization.png',
        altImage: "Personalization & Recommendations"
      },
    ]
  },
  FAQ: {
    title: 'FAQ',
    cards: [
      {
        id: "FAQ-what",
        title: <>What is <Bold>Eatsy.com?</Bold></>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        id: "FAQ-how",
        title: <>How to contact us?</>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
      {
        id: "FAQ-benefits",
        title: <>What are the benefits of the application?</>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss malesuada lacus ex, sit amet blandit leo lobortis eget."
      },
    ]
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
    title: <>What <strong>Restaurants</strong> say</>,
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