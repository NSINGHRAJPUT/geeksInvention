import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-description" data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                <h1>Fintech Solution</h1>
                <h3>Transforming Fintech with AI</h3>
                <div className='desc-btn'>
                    <h6>Fraud detection</h6>
                    <h6>Transaction categorisation</h6>
                    <h6>Risk Scoring</h6>
                </div>
                <p>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to
                    easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility,
                    transaction categorization for seamless organization, and anomaly detection to safeguard your assets
                </p>
                <button className='desc-link'>
                    <h3>See full case study</h3>
                </button>
            </div>
            <div className="hero-image">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
                    alt="Description"
                    className='image'
                />
            </div>
        </div>
    )
}


export default Hero;
