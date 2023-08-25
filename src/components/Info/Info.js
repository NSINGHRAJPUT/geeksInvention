import './Info.css';


const Info = () => {
    return (
        <section className='info'>
            <div className='info-container'>
                <h1>Check out more works by Geeks<span > Invention </span></h1>
                <p>Our case studies describe design and development solutions implemented at our Geeks Invention projects.
                    The stories are a valuable resource for those looking to develop their own mobile apps.
                </p>
                <button className='desc-link info-btn'>
                    <h3>See full case studies</h3>
                    {/* <img src='https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg' alt='' width={20}></img> */}
                </button>
            </div>
        </section>
    )
}

export default Info;