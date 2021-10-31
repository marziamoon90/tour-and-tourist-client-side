import React from 'react';
import { Row } from 'react-bootstrap';
import usePlans from '../../hooks/usePlans';
import Plans from '../Plans/Plans';
import Banner from '../Banner/Banner';
import useAuth from '../../hooks/useAuth';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const [plans] = usePlans();
    const { isLoading, user } = useAuth();

    return (
        <div>
            <div>
                <Banner></Banner>
                {
                    isLoading ? <div className="text-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                        <div className="container my-5">
                            <h1 className="text-center text-primary">Welcome {user.displayName}</h1>
                            <Row xs={1} md={2} className="g-4 ">
                                {
                                    plans.map(plan => <Plans
                                        key={plan._id}
                                        plan={plan}
                                    ></Plans>)
                                }
                            </Row>

                        </div>
                }

            </div>
            {/* extra section in home  */}
            <div>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;