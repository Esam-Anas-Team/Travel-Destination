import './TourDetails.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function TourDetails(props) {

    const [moreLess, setMore] = useState(false);
    function clickhandle() {
        setMore(!moreLess);
    }
    let { id } = useParams();
    let arrData = props.data.filter(element => element.id === id);
    return (
        <div>
            <Header />
            <div >
                <h3> {arrData[0].name} </h3>
                <img src={arrData[0].image} alt="" />
                <p id='text' >
                    {moreLess ? arrData[0].info : `${arrData[0].info.substring(0, 250)}`}
                    {moreLess ? <button onClick={clickhandle}>See Less</button> : <button onClick={clickhandle}>See More</button>}
                </p>
            </div>
            <Footer />
        </div>
    )
}
export default TourDetails;