import Image from "next/image"

import { useMediaQuery, useTheme } from "@mui/material";
interface Props {
    src: string,
    alt: string,
    width: number,
    height: number,
    widthMobile?: number,
    heightMobile?: number,
    quality?: number,
    customStyle?: any
}
export const ResponsiveImage = ({
    src,
    alt,
    width,
    height,
    widthMobile,
    heightMobile,
    quality = 100,
    customStyle = {}
}: Props) => {
    const theme = useTheme();
    const phoneView = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Image
            src={src}
            alt={alt}
            width={phoneView ? widthMobile : width}
            height={phoneView ? heightMobile : height}
            quality={quality}
            style={customStyle}

        />
    )
}
