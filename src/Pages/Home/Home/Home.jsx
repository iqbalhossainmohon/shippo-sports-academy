import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
           <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <ExtraSection/>
        </>
    );
};

export default Home;