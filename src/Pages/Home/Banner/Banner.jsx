import handball from '../../../assets/handball.jpg'
import cricket from '../../../assets/cricket.jpg'
import football from '../../../assets/football.jpg'
import badminton from '../../../assets/badminton.jpg'
import tannisball from '../../../assets/tannisball.jpg'

const Banner = () => {
    return (
            <div className='mt-20'>
                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={handball} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <h2 className='text-4xl font-bold uppercase text-purple-500 mt-12 ml-24'>Handball is <br /> a complex sport</h2>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={cricket} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <h2 className='text-3xl font-bold uppercase text-yellow-400 ml-12'>Cricket is a sport <br /> <span className='text-black'>that requires the use of</span> <br /> a bat and ball</h2>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={football} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <h2 className='text-3xl font-bold text-yellow-400 ml-12'>Football training focus on <br /> improving certain physical and <br /> tactical aspects of your game</h2>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={badminton} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <h2 className='text-3xl font-bold text-yellow-400 ml-12'>Badminton is a mini <br /> body-toning workout. It might <br /> not give you six-pack abs</h2>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src={tannisball} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <h2 className='text-4xl font-bold text-yellow-400 ml-auto'>Many people consider <br /> tennis one of the <br /> hardest sports to learn</h2>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#slide1"><li></li></a>
                    <a href="#slide2"><li></li></a>
                    <a href="#slide3"><li></li></a>
                    <a href="#slide4"><li></li></a>
                    <a href="#slide5"><li></li></a>
                </div>
            </div>
    );
};

export default Banner;