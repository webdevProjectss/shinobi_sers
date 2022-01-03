import './App.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import Ninja from './assets/img/template.jpeg';

function App() {
  const StyledDiv = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

  const StyledCol = styled(Col)`
  text-align:center;
  justify-content:center;
  `;

  return (
    <div>
      <header
      style={{
        background: `#708090`,
        marginBottom: `1.45rem`,
        textAlign: `center`
      }}
      >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          backgroundColor:`#708090`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0,backgroundColor:`#708090`,}}>
          <a
            href="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              backgroundColor: `#708090`
            }}
          >
            Nifty Ninjas
          </a>
        </h1>
      </div>
      </header>
      <StyledDiv>
        <Row>
          <StyledCol>
            <a href="https://twitter.com/NFTNiftyNinjas">Twitter</a>
          </StyledCol>
          <StyledCol>
            <a href="https://discord.gg/ZDwj6Ut8YC">Discord</a>
          </StyledCol>
        </Row>
      </StyledDiv>
      <StyledDiv>
      <Row>
        <StyledCol>
          <img src={Ninja} alt="ninja"/>
        </StyledCol>
        <StyledCol>
          <p>369 Nifty Ninjas</p>
          <p>
            Supply kept low, stealth and precision. All with a strong secondary market in mind.
          </p>
          <p>
          Unorthodox and stealthy, just like how we want these art pieces to be, an unusual opportunity to benefit from.
          </p>
          <p>Mint on 15th January 2022 - 2pm UTC</p>
        </StyledCol>
      </Row>
    </StyledDiv>
    <StyledDiv>
      <p>Roadmap</p>
    </StyledDiv>
    <StyledDiv>
      <p>Frequently Asked Questions</p>
    </StyledDiv>
    <StyledDiv>
      <Row>
        <StyledCol>
          <p>Why is supply low?</p>
          <h7>Supply is kept low, to ensure a stronger and tightly knitted shinobi community.
            This aids community decisions to be pushed out in a more effective way post mint.
            It also helps floor price of ninjas to be kept relatively steady.
          </h7>
        </StyledCol>
        <StyledCol>
          <p>When is mint and how much per NFT?</p>
          <h7>18th January 2022 and 0.5 SOL each</h7>
        </StyledCol>
        <StyledCol>
          <p>How to mint?</p>
          <h7>Join our discord group and check out how-to-mint channel</h7>
        </StyledCol>
      </Row>
    </StyledDiv>
    </div>
  );
}

export default App;


/* <VerticalTimeline className="time-line">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Pre-Mint"
          iconStyle={{ background: '#061133', color: '#fff' }}
        >
          <h7>Discord, Twitter and Website setup</h7>
          <h7>Artwork self-drawn</h7>
          <h7>Gather Shinobis</h7>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #0611330' }}
          date="Upon Mint"
          iconStyle={{ background: '#061133', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h7>Upload Ninjas to Solana chain</h7>
          <h7>Digital Eyes Listing</h7>
          <h7>Rarity Listing</h7>
          <h7>NiftyNinjasDAO Setup</h7>  
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Post Mint"
          iconStyle={{ background: '#061133', color: '#fff' }}
        >
          <br/>
          <h7>90% of royalties used to swept floor</h7>
          <h7>Tiered lucky draws for holders for SOL giveaways</h7> 
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#061133', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #061133' }}
          date="Growth"
          iconStyle={{ background: '#061133', color: '#fff' }}
        >
          <h7>Growth</h7>
          <br/>
          <h7>Further proceeds put into marketing</h7>
          <h7>Collaboration with other smaller projects to increase visibility</h7>
          <h7>Employment of influencers to further shill project on secondary markets</h7>
          <h7>$NNINJA token airdropped to all holders</h7>
        </VerticalTimelineElement>
      </VerticalTimeline> */