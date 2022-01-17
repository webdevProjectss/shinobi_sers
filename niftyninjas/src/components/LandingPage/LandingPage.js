import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import Countdown from 'react-countdown';
import { Button } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './LandingPage.css'
import Timeline from '../Timeline/Timeline'
import Footer from '../Footer/Footer'

import bear1 from '../../assets/img/13.png'
import bear2 from '../../assets/img/14.jpg'
import bear3 from '../../assets/img/16.png'

const styling = {
    pageContainer: {
        backgroundColor: 'black',
        height: '100vh',
        color: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: '86vh',
        lineHeight: '30px',
        margin: '0rem auto 0rem',
    },
    countdown: {
        fontSize: '20px',
    },
    heading: {
        fontSize: '22px',
        margin: '0rem auto 1rem',
        fontFamily: 'assassin'
    },
    button: {
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'grey',
        borderRadius: '10px',
        width: '60px'
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: '80%',
        height: '10vh',
        margin: 'auto',
        paddingTop: '50px',
        fontFamily: 'assassin'
    },
    links: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: '22px',
    },
    socials: {
        width: '20%',      
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'assassin'
    },

    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '40%',
        margin: '0px auto 5rem',
        lineHeight: '40px'
    }
}

const countdown = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '60%',
        margin: '0px auto 6rem',
        textTransform: 'uppercase',
        letterSpacing: '0.4rem',
        fontSize: '28px',
        color: '#50C878'
    },
    title: {
        fontSize: '48px',
        letterSpacing: '0.8rem',
        color: 'white'
    },
    button: {
        padding: '5px 20px 5px',
        width: 'auto',
        margin: '2rem auto 0rem',
        fontSize: '22px',
        borderRadius: '10px',
        color: '#DC143C',
        backgroundColor: '#cfcfcf',
        fontFamily: 'assassin'
    }
}


const utilities = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        margin: '8rem auto 0rem'
    }
}

const team = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        margin: '8rem auto 0rem',
        fontFamily: 'assassin'
    },
    team: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        margin: '1rem auto 8rem',
        justifyContent: 'space-between'
    },
    individual: {
        lineHeight: '1rem',
        fontSize: '18px',
    },
    image: {
        width: '200px',
        height: '200px',
        borderRadius: '50%'
    }
}

const faq = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        fontFamily: 'Helvetica, sans-serif',
    },
    content: {
        backgroundColor: '#202020',
        color: 'white',
        fontSize: '18px',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    details: {
        textAlign: 'left',
        paddingTop: '1rem',
        color: '#bebebe',
    }
}

const LandingPage = () => {

    const renderer = ({ days, hours, minutes, seconds, }) => {
        // Render a countdown
        return <span style={{fontFamily: 'assassin'}} >{days} days : {hours} hours : {minutes} minutes : {seconds} seconds</span>;
    };

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Fragment>
            <div style={styling.pageContainer}>
                <div className='LPContainer'>
                    {/* Navbar */}
                    <div style={styling.navbar}>
                        
                        {/* Links */}
                        <div style={styling.links}>
                            <Link to='' style={{textDecoration: 'none', color: 'white', fontFamily: 'assassin'}}>Rarity</Link>
                            <Link to='' style={{textDecoration: 'none', color: 'white', fontFamily: 'assassin'}}>Mint</Link>
                        </div>

                        {/* Socials */}
                        <div style={styling.socials}>
                            <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faDiscord} size='2x'/></a>
                            <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
                            <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
                        </div>
                    </div>

                    {/* Header */}
                    <div style={styling.header}>
                        <div style={styling.heading}>
                            <h1 style={{marginBottom: '25px', fontSize: '90px', fontFamily: 'assassin'}}>Nifty Ninjas</h1>
                            {/* <p>369 Ninjas hiding in the shadow</p> */}
                            <p style={{fontFamily: 'assassin'}}>Are you worthy enough to catch it?</p>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div style={countdown.container}>
                        <p style={countdown.title} className='font'>Mint Starting In: </p>
                        <Countdown date={'2022-01-22T03:00:00.00+00:00'} renderer={renderer}/>
                        <Button variant='contained' style={countdown.button}>Mint Now</Button>
                    </div>

                    <div style={styling.description}>
                        <p style={{color: '#FFA700'}} className='font'>STEALTH AND PRECISION</p>
                        <p style={{fontSize: '48px', marginBottom: '30px', fontFamily: 'assassin'}}>Nifty Ninjas</p>
                        <p className='font' style={{marginBottom: '0px'}}>Supply of Shinobis kept low, stealth and precision. All with a strong secondary
                        market in mind.
                        </p>
                        <p className='font'>Unorthodox and stealthy, just like how we want these art pieces to be, an unusual opportunity to benefit from.</p>
                    </div>

                    {/* Slider */}
                    <div className='slider'>
                        <div className='slide-track'>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>


                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                            <div className='slide'>
                                <img src={bear1} alt='bear1' className='image'/>
                            </div>
                        </div>
                    </div>

                    {/* Road Map */}
                    <Timeline />

                    {/* Utilities Section */}
                    <div style={utilities.container}>
                        <p className='font' style={{color: '#DC143C'}}>Giving Back</p>
                        <h1 style={{fontFamily: 'assassin'}}>Utilities</h1>
                    </div>

                    {/* Team Section */}
                    <div style={team.container}>
                        <p className='font' style={{color: '#7F7D9C'}}>Behind The Scenes</p>
                        <h1 style={{fontFamily: 'assassin'}}>Our Team</h1>
                        <div style={team.team}>
                            <div style={team.individual}>
                                <img src={bear1} alt='bear1' style={team.image}/>
                                <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>kokoman</p>
                                <p className='font'>Lead Developer</p>
                            </div>

                            <div style={team.individual}>
                                <img src={bear2} alt='bear1' style={team.image}/>
                                <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>spam or ham</p>
                                <p className='font'>Senior Developer</p>
                            </div>

                            <div style={team.individual}>
                                <img src={bear3} alt='bear1' style={team.image}/>
                                <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>wooohooo</p>
                                <p className='font'>Developer</p>
                            </div>
                        </div>
                    </div>
                    

                    {/* FAQ */}
                    <div style={faq.container}>
                        <p className='font' style={{color: '#B24BF3'}}>Clear Your Doubts</p>
                        <h1 style={{fontFamily: 'assassin', marginBottom: '2rem'}}>Frequently Asked Questions</h1>
                        <Accordion style={faq.content} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>How to Mint?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>Check out our "How to mint" guide on our Discord Server</AccordionDetails>
                        </Accordion>
                        <Accordion style={faq.content} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>When is mint and how much per mint?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>Minting Date will be on the 22 Janaury 2022 -- 2pm UTC. Our Ninjas will be priced at 1 SOL per mint.</AccordionDetails>
                        </Accordion>
                        <Accordion style={faq.content} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Which secondary market will we be listing on?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>We will be listing on Magic Eden</AccordionDetails>
                        </Accordion>
                        <Accordion style={faq.content} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Will there be whietlist and how do i join?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>Further details will be given when whitelist event is launched. Stay tune for more updates in our Discord server.</AccordionDetails>
                        </Accordion>
                        <Accordion style={faq.content} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>What will happen after the mint is over?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>Funds will be driven towards marketing, giveaways and other events. <br/>
                            85% of royalities will be allocated for sweeping the floor.</AccordionDetails>
                        </Accordion>
                        <Accordion style={faq.content} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>How do I check the rarity of my ninja?</AccordionSummary>
                            <AccordionDetails style={faq.details} className='font'>Rarity Page is still under construction. Stay tune for more updates</AccordionDetails>
                        </Accordion>
                    </div>


                <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage