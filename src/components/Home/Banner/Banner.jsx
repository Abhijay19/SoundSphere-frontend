import "./Banner.scss";
import { useNavigate } from 'react-router-dom'
import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    const navigate = useNavigate();
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    The best headphones in the market here at SoundSphere
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2"  onClick={() => navigate(`/category/1`)}>Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;
