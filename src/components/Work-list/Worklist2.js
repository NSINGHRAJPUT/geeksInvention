import './WorkList.css'

const WorkList2 = () => {
    return (
        <div className="work-list">
            <div className="work-container">
                <img
                    src="https://geeksinvention.com/assets/v3/industry-education.webp"
                    alt="Description"
                    className="image"
                />
            </div>
            <div className="work-description" data-aos="fade-up" data-aos-delay='300' data-aos-duration='600'>
                <h1>Smart Education</h1>
                <h3>Elevate your Education Institution</h3>
                <div className='desc-btn'>
                    <h6>Learning Management</h6>
                    <h6>Course Offering</h6>
                    <h6>Professional Training</h6>
                </div>
                <p>Elevate your education institution with our comprehensive software solutions. Learning management, course offerings,
                    professional training, certification, and school management tools to streamline your operations and enhance your
                    students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in
                    the ever-evolving education industry.
                </p>
                <button className='desc-link'>
                    <h3>See full case study</h3>
                    {/* <img src='https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg' alt='' width={20}></img> */}
                </button>
            </div>
        </div>
    )
}


export default WorkList2;
