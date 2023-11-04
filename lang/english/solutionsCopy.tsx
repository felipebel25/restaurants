// components
import { Bold } from '@components/atoms/Bold/Bold'
//Icons
import Star from 'public/componets/Star'
import Group from 'public/componets/Group'
import Alert from 'public/componets/Alert'

//Departments
import DepartmentCover1 from "public/PNG/Group50.png"
import DepartmentCover2 from "public/PNG/Group50.png"
import DepartmentCover3 from "public/PNG/Group50.png"
import DepartmentCover4 from "public/PNG/Group50.png"
import DepartmentCover5 from "public/PNG/Group50.png"

//Use Cases
import UseCaseCover1 from "public/PNG/Group50.png"
import UseCaseCover2 from "public/PNG/Group50.png"
import UseCaseCover3 from "public/PNG/Group50.png"
import UseCaseCover4 from "public/PNG/Group50.png"
import UseCaseCover5 from "public/PNG/Group50.png"

export const solutionsText = {
  Hero: {
    title: <>We have the <Bold>solution</Bold> for your needs </>,
    subTitle: 'Eatsy can offer the contribution that your environment most requests',
  },
  firstSlide: {
    slides: [
      {
        title: <><Bold>Eatsy </Bold>Orders Admin</>,
        subTitle: "Offers restaurant administrators a powerful web-based solution to efficiently manage every aspect of their establishment within the Eatsy ecosystem."
      },
      {
        title: <><Bold>Onsite </Bold>Menu</>,
        subTitle: "Enhance your customers' dining experience with our revolutionary Dynamic QR Menu solution. Say goodbye to static PDF menus and embrace the power of digital convenience."
      },
    ]
  },
  secondSlide: {
    slides: [
      {
        id: 1,
        title: <>Seamless Proct <br />Management</>,
        body: "Add, edit, or remove products from your digital menus effortlessly. Control pricing, update availability, and showcase enticing images to enthrall your customers. With intuitive product organization, keeping your menus up-to-date has never been easier."
      },
      {
        id: 2,
        title: <>Customizable <br />Branding</>,
        body: "Maintain a consistent brand identity with our customizable branding options. Tailor the design of your digital menus and microsite to align with your restaurant's unique style and ambiance."
      },
      {
        id: 3,
        title: <>Staff Management and<br /> Collaboration</>,
        body: "Assign specific tasks, set access levels, and track performance. Foster collaboration among your team with centralized communication tools, ensuring everyone is on the same page."
      },
      {
        id: 3,
        title: <>Muti-Location<br />
          Management</>,
        body: "For restaurant chains or multi-location businesses, Eatsy Admin Portal offers seamless multi-location management. Effortlessly oversee operations across different outlets, maintaining consistency in menus, staff management, and branding."
      }

    ]
  },
  Departments: [
    {
      title: "Department Category 1",
      cover: DepartmentCover1,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Department Category 2",
      cover: DepartmentCover2,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Department Category 3",
      cover: DepartmentCover3,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Department Category 4",
      cover: DepartmentCover4,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Department Category 5",
      cover: DepartmentCover5,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    }
  ],

  DepartmentsFeatures: [
    {
      icon: Star,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      icon: Group,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    }, {
      icon: Alert,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    }
  ],

  UseCases: [
    {
      title: "Use Case 1",
      cover: UseCaseCover1,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Use Case 2",
      cover: UseCaseCover2,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Use Case 3",
      cover: UseCaseCover3,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Use Case 4",
      cover: UseCaseCover4,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    },
    {
      title: "Use Case 5",
      cover: UseCaseCover5,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.",
      ctaLabel: 'Know More'
    }
  ],

  UseCasesFeatures: [
    {
      icon: Star,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      icon: Group,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    }, {
      icon: Alert,
      title: "Aircraft Benefits",
      body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    }
  ],
}