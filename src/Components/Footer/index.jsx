import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import './style.css'

const Footer = () => {
    return (
        <CDBFooter className='.shadow'>
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className='flexWrap'>
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            Charity
                        </a>
                        <p className="my-3" style={{ width: '250px' }}>
                            We are creating High Quality Resources and tools to Aid developers during the
                            developement of their projects
                        </p>
                        <CDBBox display="flex" className="mt-4">
                            <CDBBtn flat color="dark">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600',  }}>
                            Devwares
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0'}}>
                            <span>Resources</span>
                            <span>About Us</span>
                            <span>Contact</span>
                            <span>Blog</span>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <span>Support</span>
                            <span>Sign Up</span>
                            <span> Sign In</span>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Products
                        </p>
                        <CDBBox display='flex' flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <span>Windframe</span>
                            <span>Loop</span>
                            <span>Contrast</span>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">&copy; Monero, 20202 All rights reserved.</small>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;