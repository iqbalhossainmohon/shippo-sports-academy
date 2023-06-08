import {FaQuoteLeft} from "react-icons/fa"

const ExtraSection = () => {
    return (
        <div>

            <h2 className="text-4xl font-bold text-center my-12">Testimonials</h2>
             
             <FaQuoteLeft className="mx-auto text-5xl text-gray-500" />

             <p className="text-center font-semibold mt-12">Himanshu has greatly benefited from the personalized attention and professional <br /> coaching at Padukone Sports Management. The coaches are led by top-notch world <br /> champions and the entire coaching program is world-class. Infrastructure is <br /> awesome and the focus is on the round development of the player. </p>
             <h3 className="text-center font-bold mt-4 mb-12">Amit Desai</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white">
                <div className="bg-gray-500 p-8 rounded">
                    <div className="h-80">
                        <p className="text-xl">I have been training here under “Padukone sports management (PSM)” in a high-performance batch for more than 3 years with successful achievements. I am proud to say that Padukone sports management has helped me a lot in improving my Game positively in these years.  </p>
                    </div>
                    <hr className="my-4" />
                    <p className="text-2xl font-bold">Nayan Tak</p>
                </div>
                <div className="bg-gray-500 p-8 rounded">
                    <div className="h-80">
                        <p className="text-xl">I would like to thank Padukone sports management and the coaches for conducting HIGH STANDARD badminton training programs. Hailing from a non-sport family we were surprised to see our son, Pranav develops an interest in badminton which is pure because of the Padukone sports management training curriculum and the facilities.</p>
                    </div>
                    <hr className="my-4" />
                    <p className="text-2xl font-bold">R. Priya</p>
                </div>
                <div className="bg-gray-500 p-8 rounded">
                    <div className="h-80">
                        <p className="text-xl">My daughter, Ritika Paliath is fortunate to be in an academy of the Padukone sports management caliber. She has been training here for more than two years now. She has emerged from her shadows to become a star in our eyes. We have seen her grow as a player and more importantly as an individual.</p>
                    </div>
                    <hr className="my-4" />
                    <p className="text-2xl font-bold">Ranjith Paliath</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;