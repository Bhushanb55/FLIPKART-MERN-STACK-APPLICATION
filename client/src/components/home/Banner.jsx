import { styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constant/data';
//import { makeStyles } from '@material-ui/core'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: 180
    }
}));



// const usestyle = makeStyles({
//     image: {
//         width: '100%',
//         height: 280
//     },
//     carousel: {
//         marginTop : 10
//     }
// })

const Banner = () => {
   // const classes = usestyle();
    return(
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >    
            {
                bannerData.map(image => (
                    <Image src={image} alt="banner" id={image.id}  /> 
                ))
            }
        </Carousel>
    )
} 

export default Banner; 
