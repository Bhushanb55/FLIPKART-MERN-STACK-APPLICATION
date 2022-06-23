import {Box, styled } from '@mui/material';

//component
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import {  getProducts as listProducts } from '../../redux/actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

const Component = styled(Box)`
    padding: 20px 10px;
    background: '#F2F2F2'
`
    
const Home = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return(
        <>
            <NavBar/>
            <Component>
                    <Banner/>
                    <MidSlide products={products} />
                    <MidSection />
                    <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
            </Component>
           
        </>
        
    )
}

export default Home;