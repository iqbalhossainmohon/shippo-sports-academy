import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - Shippo Sports Academy</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <ExtraSection />
        </>
    );
};

export default Home;