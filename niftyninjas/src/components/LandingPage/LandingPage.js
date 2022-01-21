import React, { Fragment, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faDiscord,
//     faTwitter,
//   } from "@fortawesome/free-brands-svg-icons";
import Countdown from 'react-countdown';
import { Button } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce';

import './LandingPage.css'
import Timeline from '../Timeline/Timeline'
import Footer from '../Footer/Footer'

import ninja1 from '../../assets/img/ninjas/ninja1.png'
import ninja2 from '../../assets/img/ninjas/ninja2.png'
import ninja3 from '../../assets/img/ninjas/ninja3.png'
import ninja4 from '../../assets/img/ninjas/ninja4.png'
import ninja5 from '../../assets/img/ninjas/ninja5.png'
import ninja6 from '../../assets/img/ninjas/ninja6.png'
import ninja7 from '../../assets/img/ninjas/ninja7.png'
import ninja8 from '../../assets/img/ninjas/ninja8.png'
import ninja9 from '../../assets/img/ninjas/ninja9.png'
import ninja10 from '../../assets/img/ninjas/ninja10.png'
import ninja11 from '../../assets/img/ninjas/ninja11.png'
import ninja12 from '../../assets/img/ninjas/ninja12.png'
import dev1 from '../../assets/img/ninjas/dev1.png'
import dev2 from '../../assets/img/ninjas/dev2.png'
import dev3 from '../../assets/img/ninjas/dev3.png'


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
        width: '10%',
        height: '10vh',
        margin: 'auto',
        paddingTop: '50px',
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
        margin: '5rem auto 0rem',
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

const mobile = {
    pageContainer: {
        backgroundColor: 'black',
        height: '100vh',
        color: 'white',
        overflowX: 'hidden'
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
    heading: {
        fontSize: '20px',
        margin: '0rem auto 1rem',
        fontFamily: 'assassin',
        width: '80%'
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: '30%',
        height: '10vh',
        margin: 'auto',
        paddingTop: '50px',
        fontFamily: 'assassin'
    },
    countdownContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '80%',
        margin: '0rem auto 5rem',
        textTransform: 'uppercase', 
        color: '#50C878',
        fontSize: '22px'
    },
    countdownTitle: {
        fontSize: '42px',
        color: 'white'
    },
    countdownButton: {
        padding: '3px 15px 3px',
        width: 'auto',
        margin: '1rem auto 0rem',
        fontSize: '18px',
        borderRadius: '10px',
        color: '#DC143C',
        backgroundColor: '#cfcfcf',
        fontFamily: 'assassin'
    },
    aboutDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '70%',
        margin: '0px auto 5rem',
        lineHeight: '30px'
    },
    teamContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        margin: '8rem auto 0rem',
        fontFamily: 'assassin'
    },
    team: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: '1rem auto 8rem',
        justifyContent: 'space-between'
    },
    teamIndividual: {
        lineHeight: '1rem',
        fontSize: '18px',
        marginBottom: '5px'
    },
    faqContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center',
        margin: 'auto',
        fontFamily: 'Helvetica, sans-serif',
    },
    faqContent: {
        backgroundColor: '#202020',
        color: 'white',
        fontSize: '18px',
        borderRadius: '5px',
        marginBottom: '5px',
        textAlign: 'left'
    },
    faqDetails: {
        textAlign: 'left',
        paddingTop: '1rem',
        color: '#bebebe',
    }

}

const LandingPage = () => {

    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1200
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
      }, []);

    const renderer = ({ days, hours, minutes, seconds, }) => {
        // Render a countdown
        return <span style={{fontFamily: 'assassin'}} >{days} days : {hours} hours : {minutes} minutes : {seconds} seconds</span>;
    };

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const displayDesktop = () => {
        return (
            <Fragment>
                <div style={styling.pageContainer}>
                    <div className='LPContainer'>
                        {/* Navbar */}
                        <div style={styling.navbar}>
                            {/* Socials */}
                                {/* <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faDiscord} size='2x'/></a>
                                <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faTwitter} size='2x'/></a> */}
                        </div>

                        {/* Header */}
                        <div style={styling.header}>
                            <div style={styling.heading}>
                                <Bounce bottom>
                                    <h1 style={{marginBottom: '25px', fontSize: '90px', fontFamily: 'assassin'}}>Nifty Ninjas</h1>
                                    {/* <p>369 Ninjas hiding in the shadow</p> */}
                                    <p style={{fontFamily: 'assassin'}}>Are you worthy enough to catch it?</p>
                                </Bounce>    
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
                            <Fade left>
                                <p className='font' style={{marginBottom: '0px'}}>Supply of Shinobis kept low, stealth and precision. All with a strong secondary
                                market in mind.
                                </p>
                                <p className='font'>Unorthodox and stealthy, just like how we want these art pieces to be, an unusual opportunity to benefit from.</p>
                            </Fade>
                        </div>

                        {/* Slider */}
                        <div className='slider'>
                            <div className='slide-track'>
                                <div className='slide'>
                                    <img src={ninja1} alt='ninja1' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja2} alt='ninja2' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja3} alt='ninja3' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja4} alt='ninja4' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja5} alt='ninja5' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja6} alt='ninja6' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja7} alt='ninja7' className='image'/>
                                </div>


                                <div className='slide'>
                                    <img src={ninja8} alt='ninja8' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja9} alt='ninja9' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja10} alt='ninja10' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja11} alt='ninja11' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja12} alt='ninja12' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja1} alt='ninja1' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja2} alt='ninja2' className='image'/>
                                </div>
                            </div>
                        </div>

                        {/* Road Map */}
                        <Timeline />

                        {/* Utilities Section */}
                        {/* <div style={utilities.container}>
                            <p className='font' style={{color: '#DC143C'}}>Giving Back</p>
                            <h1 style={{fontFamily: 'assassin'}}>Utilities</h1>
                        </div> */}

                        {/* Team Section */}
                        <div style={team.container}>
                            <p className='font' style={{color: '#7F7D9C'}}>Behind The Scenes</p>
                            <h1 style={{fontFamily: 'assassin'}}>Our Team</h1>
                            <div style={team.team}>
                                <div style={team.individual}>
                                    <img src={dev1} alt='dev1' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>kokoman</p>
                                        <p className='font'>Lead Developer</p>
                                    </Fade>
                                </div>

                                <div style={team.individual}>
                                    <img src={dev3} alt='dev3' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>spam or ham</p>
                                        <p className='font'>Senior Developer</p>
                                    </Fade>
                                </div>

                                <div style={team.individual}>
                                    <img src={dev2} alt='dev2' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>wooohooo</p>
                                        <p className='font'>Developer</p>
                                    </Fade>
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


    const displayMobile = () => {
        return (
            <Fragment>
                <div style={mobile.pageContainer}>
                    <div className='LPContainer'>
                        {/* Navbar */}
                        <div style={mobile.navbar}>
                            {/* Socials */}
                                {/* <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faDiscord} size='2x'/></a>
                                <a href='#' style={{color: 'white'}}><FontAwesomeIcon icon={faTwitter} size='2x'/></a> */}
                        </div>

                        {/* Header */}
                        <div style={mobile.header}>
                            <div style={mobile.heading}>
                                <Bounce bottom>
                                    <h1 style={{marginBottom: '25px', fontSize: '80px', fontFamily: 'assassin'}}>Nifty Ninjas</h1>
                                    {/* <p>369 Ninjas hiding in the shadow</p> */}
                                    <p style={{fontFamily: 'assassin'}}>Are you worthy enough to catch it?</p>
                                </Bounce>    
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div style={mobile.countdownContainer}>
                            <p style={mobile.countdownTitle} className='font'>Mint Starting In: </p>
                            <Countdown date={'2022-01-22T03:00:00.00+00:00'} renderer={renderer}/>
                            <Button variant='contained' style={mobile.countdownButton}>Mint Now</Button>
                        </div>

                        <div style={mobile.aboutDescription}>
                            <p style={{color: '#FFA700'}} className='font'>STEALTH AND PRECISION</p>
                            <p style={{fontSize: '48px', marginBottom: '30px', fontFamily: 'assassin'}}>Nifty Ninjas</p>
                            <Fade left>
                                <p className='font' style={{marginBottom: '0px'}}>Supply of Shinobis kept low, stealth and precision. All with a strong secondary
                                market in mind.
                                </p>
                                <p className='font'>Unorthodox and stealthy, just like how we want these art pieces to be, an unusual opportunity to benefit from.</p>
                            </Fade>
                        </div>

                        {/* Slider */}
                        <div className='slider'>
                            <div className='slide-track'>
                                <div className='slide'>
                                    <img src={ninja1} alt='ninja1' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja2} alt='ninja2' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja3} alt='ninja3' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja4} alt='ninja4' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja5} alt='ninja5' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja6} alt='ninja6' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja7} alt='ninja7' className='image'/>
                                </div>


                                <div className='slide'>
                                    <img src={ninja8} alt='ninja8' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja9} alt='ninja9' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja10} alt='ninja10' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja11} alt='ninja11' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja12} alt='ninja12' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja1} alt='ninja1' className='image'/>
                                </div>
                                <div className='slide'>
                                    <img src={ninja2} alt='ninja2' className='image'/>
                                </div>
                            </div>
                        </div>

                        {/* Road Map */}
                        {/* <Timeline /> */}

                        {/* Utilities Section */}
                        <div style={utilities.container}>
                            <p className='font' style={{color: '#DC143C'}}>Giving Back</p>
                            <h1 style={{fontFamily: 'assassin'}}>Utilities</h1>
                        </div>

                        {/* Team Section */}
                        <div style={mobile.teamContainer}>
                            <p className='font' style={{color: '#7F7D9C'}}>Behind The Scenes</p>
                            <h1 style={{fontFamily: 'assassin'}}>Our Team</h1>
                            <div style={mobile.team}>
                                <div style={mobile.teamIndividual}>
                                    <img src={dev1} alt='dev1' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>kokoman</p>
                                        <p className='font'>Lead Developer</p>
                                    </Fade>
                                </div>

                                <div style={mobile.teamIndividual}>
                                    <img src={dev3} alt='dev3' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>spam or ham</p>
                                        <p className='font'>Senior Developer</p>
                                    </Fade>
                                </div>

                                <div style={mobile.teamIndividual}>
                                    <img src={dev2} alt='dev2' style={team.image}/>
                                    <Fade bottom>
                                        <p style={{marginTop: '25px', fontSize: '22px', fontFamily: 'assassin'}}>wooohooo</p>
                                        <p className='font'>Developer</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        

                        {/* FAQ */}
                        <div style={mobile.faqContainer}>
                            <p className='font' style={{color: '#B24BF3'}}>Clear Your Doubts</p>
                            <h1 style={{fontFamily: 'assassin', marginBottom: '2rem'}}>Frequently Asked Questions</h1>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>How to Mint?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>Check out our "How to mint" guide on our Discord Server</AccordionDetails>
                            </Accordion>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>When is mint and how much per mint?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>Minting Date will be on the 22 Janaury 2022 -- 2pm UTC. Our Ninjas will be priced at 1 SOL per mint.</AccordionDetails>
                            </Accordion>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Which secondary market will we be listing on?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>We will be listing on Magic Eden</AccordionDetails>
                            </Accordion>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Will there be whietlist and how do i join?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>Further details will be given when whitelist event is launched. Stay tune for more updates in our Discord server.</AccordionDetails>
                            </Accordion>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>What will happen after the mint is over?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>Funds will be driven towards marketing, giveaways and other events. <br/>
                                85% of royalities will be allocated for sweeping the floor.</AccordionDetails>
                            </Accordion>
                            <Accordion style={mobile.faqContent} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>How do I check the rarity of my ninja?</AccordionSummary>
                                <AccordionDetails style={mobile.faqDetails} className='font'>Rarity Page is still under construction. Stay tune for more updates</AccordionDetails>
                            </Accordion>
                        </div>


                    <Footer />
                    </div>
                </div>
            </Fragment>
        )
    }



    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default LandingPage