import axios from 'axios';
import { useEffect, useState } from 'react';

const useBooking = () => {
    const [tour, setTour] = useState([]);

    const getTour = () => {
        axios.get('https://blooming-scrubland-16632.herokuapp.com/booking')
            .then(res => {
                const myTour = res.data;
                // console.log(myTour)
                setTour(myTour)
            })
    }
    useEffect(() => getTour(), []);
    return [tour, setTour]
};

export default useBooking;