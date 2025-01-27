import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Connect with us:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Smart Spend
                            </h6>
                            <p>
                                Turn your everyday spending into valuable coins! Use these coins to invest in digital assets like cryptocurrencies and digital gold. Discover the future of smart spending with us.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
                            <p>
                                <a href='/gold' className='text-reset'>
                                    Digital Gold
                                </a>
                            </p>
                            <p>
                                <a href='/crypto' className='text-reset'>
                                    Cryptocurrencies
                                </a>
                            </p>
                            <p>
                                <a href='/stock' className='text-reset'>
                                    Stocks
                                </a>
                            </p>
                            <p>
                                <a href='/home' className='text-reset'>
                                    Rewards Program
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms of Service
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FAQs
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Gurugram, India
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-2" />
                            support@smartspend.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-2" /> +91 0123456788
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-2" /> +91 0123456789
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                © 2024 Smart Spend:
                <a className='text-reset fw-bold' href='https://smartspend.com/'>
                    smartspend.com
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
