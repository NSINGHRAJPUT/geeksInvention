import './WorkList.css'

const WorkList1 = () => {
    return (
        <div className="work">
            <div className="work-container">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-iot.webp"
                    alt="Description"
                    className="image"
                />
            </div>
            <div className="work-description" data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                <h1>Industrial IoT</h1>
                <h3>Providing a better connected experience</h3>
                <div className='desc-btn'>
                    <h6>Connected manufacturing</h6>
                    <h6>Aviation</h6>
                    <h6>Smart Building</h6>
                </div>
                <p>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected
                    manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry.
                    With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize
                    operations for a sustainable future.
                </p>
                <button className='desc-link'>
                    <h3>See full case study</h3>
                </button>
            </div>
        </div>
    )
}


export default WorkList1;
