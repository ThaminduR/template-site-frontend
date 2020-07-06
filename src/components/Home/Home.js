import React from 'react'
import './Home.css'
import NavigationBar from '../Navbar/Navbar';

function Home(props) {
    return (
        <div className='background'>

            <NavigationBar></NavigationBar>

            <section className='page-header' id='intro'>
                <div className='overlay'>
                    <header>
                        <p className='welcome text-uppercase'>Welcome</p>
                        <hr></hr>
                        <p className='intro'> We Provide Customizable HTML Templates for Affordable Prices.</p>
                        <hr></hr>
                    </header>
                </div>
            </section>

            <section className='page-section' id='services'>
                <p className='section-intro text-uppercase'>Services</p>
                <p className='section-subheading text-muted'>We Provide Following Services</p>
                <div className='container service-container'>
                    <div className='row section-content text-center'>
                        <div className='col md-4 mr-2 ml-2 service'>
                            <p className='mt-2'>Admin Dashboards</p>
                        </div>
                        <div className='col md-4 mr-2 ml-2 service'>
                            <p className='mt-2'>Landing Pages</p>
                        </div>
                        <div className='col md-4 ml-2 mr-2 service'>
                            <p className='mt-2'>Ebay Payments</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page-section' id='template-examples'>
                <p className='section-intro text-uppercase'>Templates</p>
                <p className='section-subheading text-muted'>Some Templates We Have in the Store</p>
                <div className='container template-container'>
                    <div className='row template-content'>
                        <div className='col md-4 mr-2 ml-2 template'>
                            <img className='demo-img' src={require('../../assets/img1.jpg')} alt="1"></img>
                        </div>
                        <div className='col md-4 mr-2 ml-2 template'>
                            <img className='demo-img' src={require('../../assets/img2.jpg')} alt="2"></img>
                        </div>
                        <div className='col md-4 ml-2 mr-2 template'>
                            <img className='demo-img' src={require('../../assets/img3.jpg')} alt="3"></img>
                        </div>
                    </div>

                </div>
            </section>

            <section className='page-section' id='video'>
                <p className='section-intro text-uppercase'>How to Use the Site</p>
                <p className='section-subheading text-muted'>Watch the Following Video</p>
                <video src={require('../../assets/vid.mp4')} type="video/mp4" autoPlay></video>
            </section>

            <section className='page-footer' id='footer'>
                <footer>
                    <p className='text-center footer-text'>Copyright @ Template Site {new Date().getFullYear()}</p>
                </footer>
            </section>

        </div>
    )
}

export default Home;