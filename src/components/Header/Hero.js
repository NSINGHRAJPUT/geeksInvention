import './Hero.css'

const Hero = () => {
    return (
        <div className="image-description-container">
            <div className="description" data-aos="fade-up">
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
                    {/* <img src='https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg' alt='' width={20}></img> */}
                </button>
            </div>
            <div className="image-container">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-fintech.svg"
                    alt="Description"
                />
            </div>
        </div>
    )
}


export default Hero;
