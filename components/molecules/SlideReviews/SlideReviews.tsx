import AliceCarousel from "react-alice-carousel";

import CardUser from "@components/atoms/Cards/CardUser/CardUser";

import { homeText } from "english/homeCopy";

const items = [
    <CardUser
        key={1}
        name={homeText.Reviews.users[0].name}
        position={homeText.Reviews.users[0].position}
        description={homeText.Reviews.users[0].review}
        image={homeText.Reviews.users[0].profilePicture}
    />,
    <CardUser
        key={2}
        name={homeText.Reviews.users[1].name}
        position={homeText.Reviews.users[1].position}
        description={homeText.Reviews.users[1].review}
        image={homeText.Reviews.users[1].profilePicture}
    />,
    <CardUser
        key={3}
        name={homeText.Reviews.users[2].name}
        position={homeText.Reviews.users[2].position}
        description={homeText.Reviews.users[2].review}
        image={homeText.Reviews.users[2].profilePicture}
    />
]

export const SlideReviews = () => (
    <AliceCarousel
        autoPlay
        autoPlayInterval={3500}
        infinite
        disableButtonsControls
        items={items}
    />
)

