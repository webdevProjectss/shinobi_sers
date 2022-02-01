import React, { useState, useEffect, Fragment } from 'react'
import LightSpeed from 'react-reveal/LightSpeed'
// import Fade from 'react-reveal/Fade';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faDiscord,
//     faTwitter,
//   } from "@fortawesome/free-brands-svg-icons";
// import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
// import { faTags } from '@fortawesome/free-solid-svg-icons'
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import handdrawn from '../../assets/img/handdrawn.png'
// import mktlogo from '../../assets/img/thefunnelmktlogo.jpg'
// import ninjagif from '../../assets/img/ninjas/craftyninja.gif'
import ninja17 from '../../assets/img/ninjas/ninja17.png'
import ninja18 from '../../assets/img/ninjas/ninja18.png'
import headgif from '../../assets/img/head.gif'
import maskgif from '../../assets/img/mask.gif'
import weapongif from '../../assets/img/weapon.gif'
import clothingshoegif from '../../assets/img/clothingshoe.gif'
// import comingsoon from '../../assets/img/comingsoon.png'

const roadmap = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        margin: '5rem auto 0rem',
        backgroundColor: '#0f0f0f'
    },
    contentRight: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        justifyItems: 'space-around',
        alignItems: 'center',
        width: '80%',
        height: '25rem',
        margin: '0rem auto 8rem',
        paddingLeft: '60px',
        maxWidth: '1500px',
        lineHeight: '2rem'
    },
    contentCenter: {
        display: 'flex',
        height: '20rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0rem auto 8rem',
        width: '80%',
        maxWidth: '1500px',
        lineHeight: '2rem'
    },
    image: {
        width: '300px',
        height: '300px',
        borderRadius: '10px'
    },
    gifContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '1rem',
    },
    gif: {
        width: '180px',
        height: '180px',
        borderRadius: '10px',
        backgroundColor: '#545454',
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        margin: 'auto',
        justifyContent: 'space-between',
    },
    CDContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '60%',
        gap: '20px'
    },
    CD: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'auto',
        gap: '5px',
        // backgroundColor: '#41424C',
        // padding: '5px 0px 15px',
    },
}

const mobile = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#0f0f0f',
        margin: '5rem auto 0rem'
    },
    content: {
        margin: '0rem auto 8rem',
        lineHeight: '2rem',
    },
    image: {
        width: '300px',
        height: '300px',
        borderRadius: '10px'
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        margin: '25px auto 0rem',
        justifyContent: 'space-between',
    },
    CD: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        margin: '0rem auto 1rem',
        backgroundColor: '#41424C',
        padding: '5px 0px 15px',
        borderRadius: '15px'
    },
    gifContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
        gridGap: '10px',
        width: 'auto',
        margin: '0rem auto 2rem'
    },
    gif: {
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        backgroundColor: '#545454',
        margin: 'auto'
    },
}

const Timeline = () => {

    const [state, setState] = useState({
        mobileView: false,
        });

        const { mobileView } = state;

        useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1050
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
        }, []);

    const displayDesktop = () => {
        return (        
            <div id='roadmap' style={roadmap.container}>
                <div style={{marginTop: '3rem', marginBottom: '20px'}}>
                    <p style={{textTransform: 'uppercase', color: '#FF5800'}} className='font'>Future Plans</p>
                    <h1 style={{marginBottom: '2rem'}}>Road Map</h1>
                </div>    
                <div>
                    {/* Content 1*/}
                    <div style={roadmap.contentRight}>
                        <LightSpeed left>
                            {/* <img src={handdrawn} alt='handdrawn-layers' style={roadmap.image}/> */}
                            <div style={roadmap.gifContainer}>
                                <img src={headgif} alt='head-gif' style={roadmap.gif}/>
                                <img src={maskgif} alt='mask-gif' style={roadmap.gif}/>
                                <img src={weapongif} alt='weapon-gif' style={roadmap.gif}/>
                                <img src={clothingshoegif} alt='clothingshoe-gif' style={roadmap.gif}/>
                            </div>
                            <div style={{margin: '5rem 0rem 3rem'}}>
                                <h1>Prelaunch</h1>
                                <p className='font'>• Build a strong, close knit community<br/>
                                • 444 deflationary Shinobis drawn<br/>
                                • Targeted marketing in DAO chats<br/>
                                • Strong Focus on Alpha Discussions<br/>
                                • Application to ME launch (Requires dox to Katte, ME's admin)<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
    
                    {/* Content 2*/}
                    <div style={roadmap.contentCenter}>
                        
                        <LightSpeed right>
                            <div>
                                <h1>Completion of Mint</h1>
                                <p className='font'>
                                • List on Magic Eden<br/>
                                • List on Moon Rank<br/>
                                • Sweep floor with royalties and funds from mint<br/>
                                • Continued influencer marketing and shilling<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
    
                    {/* Content 3*/}
                    <div style={roadmap.contentCenter}>
                        <img src={ninja17} alt='ninja' style={{...roadmap.image, opacity: '30%'}} />
                        <LightSpeed left>
                            <div>
                                <h1>Post Launch DAO</h1>
                                <p className='font'>
                                • Community voting for raids and influencers shills<br/>
                                • Exclusive Alpha Discussions only for holders<br/>
                                • Possible alpha-inclusion with other DAOs that will return royalties to holders<br/>
                                • Possible staking for governance token<br/>
                                </p>
                            </div>
                        </LightSpeed>
                        <img src={ninja18} alt='ninja' style={{...roadmap.image, opacity: '30%'}} />
                    </div>
    
                    {/* Content 4*/}
                    <div style={roadmap.contentCenter}>
                        <LightSpeed left>
                            <div>
                                <h1>Utility Tools Ideas</h1>
                                <p className='font'>
                                • Exploring exclusive utility tools for holders<br/>
                                • Data insights for ME page either through Tableau or Google extension<br/>
                                • Categorisation of upcoming plays based on historical data<br/>
                                • Information portal for beginners, contributed by experienced DAO members<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
                </div>
            </div>
        )
    }


    const displayMobile = () => {
        return (        
            <div id='roadmap' style={mobile.container}>
                <div style={{marginTop: '2rem'}}>
                    <p style={{textTransform: 'uppercase', color: '#FF5800'}} className='font'>Future Plans</p>
                    <h1 style={{marginBottom: '5rem'}}>Road Map</h1>
                </div>    
                <div>
                    {/* Content 1*/}
                    <div style={mobile.content}>
                        <LightSpeed left>
                            {/* <img src={handdrawn} alt='handdrawn-layers' style={{...roadmap.image, marginBottom: '3rem'}}/> */}
                            <div style={mobile.gifContainer}>
                                <img src={headgif} alt='head-gif' style={{...mobile.gif, marginLeft: '2rem'}}/>
                                <img src={maskgif} alt='mask-gif' style={{...mobile.gif, marginRight: '2rem'}}/>
                                <img src={weapongif} alt='weapon-gif' style={{...mobile.gif, marginLeft: '2rem'}}/>
                                <img src={clothingshoegif} alt='clothingshoe-gif' style={{...mobile.gif, marginRight: '2rem'}}/>
                            </div>
                            <div style={{marginBottom: '2rem'}}>
                                <h1 style={{marginBottom: '1rem'}}>Prelaunch</h1>
                                <p className='font'>• Build a strong, close knit community<br/>
                                • 444 deflationary Shinobis drawn<br/>
                                • Targeted marketing in DAO chats<br/>
                                • Strong Focus on Alpha Discussions<br/>
                                • Application to ME launch (Requires dox to Katte, ME's admin)<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
    
                    {/* Content 2*/}
                    <div style={mobile.content}>
                        <LightSpeed right>
                            <div style={{marginTop: '12rem', marginBottom: '12rem'}}>
                                <h1 style={{marginBottom: '1rem'}}>Completion of Mint</h1>
                                <p className='font'>
                                • List on Magic Eden<br/>
                                • List on Moon Rank<br/>
                                • Sweep floor with royalties and funds from mint<br/>
                                • Continued influencer marketing and shilling<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
    
                    {/* Content 3*/}
                    <div style={mobile.content}>
                        <LightSpeed left>
                            <div>
                                <h1 style={{marginBottom: '1rem'}}>Post Launch DAO</h1>
                                <p className='font'>
                                • Community voting for raids and influencers shills<br/>
                                • Exclusive Alpha Discussions only for holders<br/>
                                • Possible alpha-inclusion with other DAOs that will return<br/>royalties to holders<br/>
                                • Possible staking for governance token<br/>
                                </p>
                            </div>
                        </LightSpeed>
                        <img src={ninja18} alt='ninja' style={{...roadmap.image, opacity: '30%'}} />
                    </div>
    
                    {/* Content 4*/}
                    <div style={mobile.content}>
                        <LightSpeed left>
                            <div>
                                <h1 style={{marginBottom: '1rem'}}>Utility Tools Ideas</h1>
                                <p className='font'>
                                • Exploring exclusive utility tools for holders<br/>
                                • Data insights for ME page either through Tableau or<br/>Google extension<br/>
                                • Categorisation of upcoming plays based on historical data<br/>
                                • Information portal for beginners, contributed by experienced<br/>DAO members<br/>
                                </p>
                            </div>
                        </LightSpeed>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )

}

export default Timeline

// <div style={styling.roadmap}>
        //     <p style={{color: '#DC143C', margin: '0px auto 10px'}} className='font'>FUTURE PLANS</p>
        //     <h1 style={{justifyContent: 'center', textAlign: 'center', marginBottom: '1rem'}}>Road Map</h1>
        //     <VerticalTimeline className="time-line">
        //         <VerticalTimelineElement
        //         className="vertical-timeline-element--work"
        //         contentStyle={{ background: '#061133', color: '#fff' }}
        //         contentArrowStyle={{ borderRight: '7px solid  #061133' }}
        //         date="Pre-Mint"
        //         iconStyle={{ background: '#061133', color: '#fff' }}
        //         >
        //         <div style={styling.description}>
        //             <span>Discord, Twitter and Website setup</span>
        //             <span>Artwork self-drawn</span>
        //             <span>Gather Shinobis</span>
        //         </div>
        //         </VerticalTimelineElement>
        //         <VerticalTimelineElement
        //         className="vertical-timeline-element--work"
        //         contentStyle={{ background: '#061133', color: '#fff' }}
        //         contentArrowStyle={{ borderRight: '7px solid  #0611330' }}
        //         date="Upon Mint"
        //         iconStyle={{ background: '#061133', color: '#fff' }}
        //         // icon={<WorkIcon />}
        //         >
        //         <div style={styling.description}>
        //             <span>Upload Ninjas to Solana chain</span>
        //             <span>Digital Eyes Listing</span>
        //             <span>Rarity Listing</span>
        //             <span>NiftyNinjasDAO Setup</span>  
        //         </div>
        //         </VerticalTimelineElement>
        //         <VerticalTimelineElement
        //         className="vertical-timeline-element--work"
        //         contentStyle={{ background: '#061133', color: '#fff' }}
        //         contentArrowStyle={{ borderRight: '7px solid  #061133' }}
        //         date="Post Mint"
        //         iconStyle={{ background: '#061133', color: '#fff' }}
        //         >
        //         <div style={styling.description}>
        //             <span>90% of royalties used to swept floor</span>
        //             <span>Tiered lucky draws for holders for SOL giveaways</span> 
        //         </div>
        //         </VerticalTimelineElement>
        //         <VerticalTimelineElement
        //         className="vertical-timeline-element--work"
        //         contentStyle={{ background: '#061133', color: '#fff' }}
        //         contentArrowStyle={{ borderRight: '7px solid  #061133' }}
        //         date="Growth"
        //         iconStyle={{ background: '#061133', color: '#fff' }}
        //         >
        //         <div style={styling.description}>
        //             <span>Further proceeds put into marketing</span>
        //             <span>Collaboration with other smaller projects to increase visibility</span>
        //             <span>Employment of influencers to further shill project on secondary markets</span>
        //             <span>$NNINJA token airdropped to all holders</span>
        //         </div>
        //         </VerticalTimelineElement>
        //     </VerticalTimeline>
        // </div>