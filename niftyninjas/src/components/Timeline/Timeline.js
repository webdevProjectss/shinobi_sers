import React from 'react'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import ninja from '../../assets/img/template.jpeg'

const roadmap = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '80%',
        margin: '5rem auto 0rem',
    },
    contentLeft: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
        height: '23rem',
        margin: 'auto',
        paddingRight: '60px',
        backgroundColor: '#212121'
    },
    contentRight: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        justifyItems: 'center',
        alignItems: 'center',
        width: '100%',
        height: '25rem',
        margin: 'auto',
        paddingLeft: '60px',
        backgroundColor: '#212121'
    },
    image: {
        width: '300px',
        height: '300px'
    }
}

const Timeline = () => {
    return (        
        <div style={roadmap.container}>
            <div style={{marginTop: '3rem', marginBottom: '20px'}}>
                <p style={{textTransform: 'uppercase', color: '#FF5800'}} className='font'>Future Plans</p>
                <h1>Road Map</h1>
            </div>    
            <div style={{border: '2px solid #808080'}}>
                {/* Content 1*/}
                <div style={roadmap.contentLeft} className='startofContent'>
                    <div style={roadmap.description}>
                        <h1>0% - Planning Phase 1</h1>
                        <p className='font'>Deciding on the supply size, mint price/date, <br />art style and secondary market</p>
                    </div>
                    <img src={ninja} alt='ninja' style={roadmap.image}/>
                </div>

                {/* Content 2*/}
                <div style={roadmap.contentRight}>
                    <img src={ninja} alt='ninja' style={roadmap.image}/>
                    <div style={roadmap.description}>
                        <h1>25% - Planning Phase 2</h1>
                        <p className='font'>The beginning of hand drawing the art pieces.<br />Setting up socials, websites and marketing</p>
                    </div>
                </div>

                {/* Content 3*/}
                <div style={roadmap.contentLeft}>
                    <div style={roadmap.description}>
                        <h1>50% - Planning Phase 3</h1>
                        <p className='font'>Completion of artwork. <br />Planning and setting up giveaways, <br />collaboration to garner hype.</p>
                    </div>
                    <img src={ninja} alt='ninja' style={roadmap.image}/>
                </div>

                {/* Content 4*/}
                <div style={roadmap.contentRight}>
                    <img src={ninja} alt='ninja' style={roadmap.image}/>
                    <div style={roadmap.description}>
                        <h1>75% - Minting Phase</h1>
                        <p className='font'>Beginning of Minting <br />Continue to market, do giveaways and collaborations. <br />Start to code post-mint utilities for the community</p>
                    </div>
                </div>

                {/* Content 5*/}
                <div style={roadmap.contentLeft} className='endofContent'>
                    <div style={roadmap.description}>
                        <h1>100% - Post Mint Phase</h1>
                        <p className='font'>Continue to market to support secondary market transactions. <br />Completion of utilities for holders of Nifty Ninjas <br/> - Full detail of our utilities can be found below.</p>
                    </div>
                    <img src={ninja} alt='ninja' style={roadmap.image}/>
                </div>
            </div>
        </div>

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