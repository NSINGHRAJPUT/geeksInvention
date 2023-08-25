import './Contact.css';

const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-container'>
                <h1>Get to know us better</h1>
                <p>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.
                </p>
                <button className='desc-link info-btn'>
                    <h3>Drop us a message</h3>
                    {/* <img src='https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg' alt='' width={20}></img> */}
                </button>
            </div>
            <footer className='footer'>
                <div className='address'>
                    <h1 className="nav-heading">Geeks <span>Invention</span></h1>
                    <p>447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                        +1-347-535-0004
                    </p>
                </div>
                <ul className="nav-links">
                    <li><a href="/work">Work</a></li>
                    <li><a href="/technology">Technology</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/company">Company</a></li>
                    <li><a href="/contacts">Contact</a></li>
                    <li><a href="/">Terms & Conditions</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
                <div><button className='desc-link'>
                    <h3>Stay tuned for our updates</h3>
                    {/* <img src='https://i.pinimg.com/736x/dd/d1/c2/ddd1c2476bcb099d675bf282f0a40192.jpg' alt='' width={20}></img> */}
                </button></div>
            </footer>
            <div className='end'></div>
        </section>
    )
}

export default Contact;