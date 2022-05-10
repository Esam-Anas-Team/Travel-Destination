import './Home.css';
import '../footer/Footer';
import '../header/Header';
import '../tours/Tours';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import toursData from '../../data/db.json';

function Home(props) {

    return (
        <>
            <Header />
            {

                toursData.map(tour => {
                    return (

                     <Tours image={tour.image} alt={tour.info} title={tour.name} />


                    )
                })
            }
            
            <Footer />

        </>
    )
}

export default Home;
