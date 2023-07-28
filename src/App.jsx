import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import LanguageIcon from '@mui/icons-material/Language';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import ChatIcon from '@mui/icons-material/Chat';
// import IconButton from '@mui/material/IconButton';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <CosIqBody />
      <BottomNav />
    </div>
  )
}


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false)
  const handleNavbarClick = () => {
    setIsContentVisible(true);
  };

  const handleExitClick = () => {
    setIsContentVisible(false);
  };

  useEffect(() => {

    // if (window.screen.width >= 600) {
    //   setMenuOpen(false)
    // }
    // else {
    //   setMenuOpen(true)
    // }
    const handleScroll = () => {

      if (window.scrollY >= 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

    };




    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar  ${isSticky ? 'sticky' : ''}`}>
      <div className="logo-cont">
        <img className="logo" src="https://app.pepcorns.com/assets/img/logo.png" slt="pepcorn logo" />
      </div>
      {window.screen.width <= 600 ? <div className="navbar-btn">

        <Button color="inherit" onClick={handleNavbarClick} >
        </Button>

        <div className="menu-content-div">
          <div className="menu-content">

            {isContentVisible && (
              <section className="menu-content-sec">
                <Button color="error" onClick={handleExitClick}>X</Button>
                <div className="navbar-button">
                  <a href="#">Startup</a>
                  <a href="#">Raise Funding</a>
                  <a href="#">Learn</a>
                  <div className="login-button">
                    <a href="#">Login</a>
                    <button className="get-started">Get Started</button>
                  </div>
                </div>

              </section>
            )}
          </div>
        </div>
      </div> :
        <div className="navbar-flex-row">
          <div className="navbar-button">
            <a href="#">Startup</a>
            <a href="#">Raise Funding</a>
            <a href="#">Learn</a>

          </div>
          <div className="login-button">
            <a href="#">Login</a>
            <button className="get-started">Get Started</button>
          </div>
        </div>}
    </div>
  )
}


function CosIqBody() {
  return (
    <div className='cosiq-body'>
      <div className='cosiq'>
        <div className="backbutton">
          
          <a href="#">Back</a>
        </div>
        <div className="cosiq-text">
          <div className='cosiq-container'>
            <img className="cosiq-image" src="https://api.pepcorns.com/clientassets/icon1677254912017.png" />
            <div className="cosiq-flex">
              <span className='heading'>CosIQ</span>
              <span className="opacity">Delhi,</span>
            </div>
          </div>
          <div className='cosiq-button'>
            <a href='#' className='borderBtn'>Save</a>
            <a href='#' className='borderBtn'>Share</a>
          </div>
        </div>
      </div>
      <CosiqVideo />
      <DeckInfo />
    </div>
  )
}

function CosiqVideo() {
  return (
    <div>
      <div>
        <span className="beauty"># BEAUTY & PERSONAL CARE</span>
        <span className="sharkTank"># SHARK TANK</span>
        <span className="fmcg"># FMCG</span>
      </div>
      <div>
        <p className='subHeading'>Molecular skincare brand focussed on safe & visible results</p>
        <div className="cosiq-link">
          <div className="backbutton">
            
          </div>
          <div className="backbutton">
          
            <p>AAGCI5003E</p>
          </div>
        </div>
      </div>
      <div className="youtube">
        <div className="cosiq-video-container">
          <div className="youtube-video">
            <iframe className="video" src="https://www.youtube.com/embed/kFII05-bhGU" title="CosIQ for Pepcorns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </div>
        </div>
        <div className='login-invest-container'>
          <div className="invest-container">
            <div className="invest-content invest-border">
              <h5>₹1450000</h5>
              <p>56.20 % of minimum goal raised</p>
            </div>
            <div className="invest-content invest-border">
              <h5>113</h5>
              <p>Total investors</p>
            </div>
            <div className="invest-content">
              <h5>16 Days</h5>
              <p>Left to Invest</p>
            </div>
            <button className='invest-button'>Login To Invest</button>
            <p className="minimum-invest">₹ 1000 Minimum Investment</p>
          </div>
        </div>
      </div>

      <div>
        <div className='youtube-link'>
          <a href="https://www.youtube.com/watch?v=kFII05-bhGU" target="_blank">Unable to view video? click here</a>
        </div>
        <div className="cosiqbar-button">
          <a className="bar-button" href="#">Pitch</a>
          <a className="bar-button" href="#">Details</a>
          <a className="bar-button" href="#">Discussions</a>
          <a className="bar-button" href="#">Updates</a>
        </div>

      </div>
    </div >
  )
}

function DeckInfo() {
  return (
    <div className="deckContainer">
      <div className="deckFlex">
        <div className="deckInfo">
          <div className='deck-content'>
            <h2 className='deck-title'>Deck Info</h2>

            <a className='cosiq-pdf-button' href="https://api.pepcorns.com/clientassets/icon1677255746699.pdf" download>CosIq_pitch.pdf</a>
          </div>
          <div>
            <SlideList />
          </div>

        </div>

        <div className="documents">
          <div className="document-info">
            <h2 className='document-title'>Documents</h2>
            <div className="zip-container">
              <p>CosIQ.zip</p>
            
            </div>

          </div>
          <InvestList />
        </div>
      </div>
    </div>
  )
}
function InvestList() {
  const invest = [
    {
      "amount": "5000",
      "reward1": "Community access and benefits",
      "stock": "38 of 100"
    },
    {
      "amount": "10000",
      "reward1": "Community access and involvement.",
      "reward2": "Be part of our growth journey.",
      "stock": "73 of 100"
    },
    {
      "amount": "25000",
      "reward1": "Community access and benefits",
      "reward2": "Special mention in our community group.",
      "stock": "43 of 50"
    },
    {
      "amount": "50000",
      "reward1": "Community perks & notable mention",
      "reward2": "Community access and benefits",
      "stock": "17 of 20"
    },
    {
      "amount": "80000",
      "reward1": "All of the above + early access to our newly launched product for feedback.",
      "stock": "5 of 10"
    },
    {
      "amount": "90000",
      "reward1": "All of the above + Receive a fresh coupon each quarter!",
      "stock": "3 of 5"
    }
  ]
  return (
    <div>
      {invest.map((invest, index) => <InvestCard invest={invest} key={index} />)}
      <p className="bold padding-top">Custom offer? <span className="button">Click here</span></p>
    </div>
  )
}

function InvestCard({ invest }) {

  return (
    <div className="invest-card">
      <div className="invest-card-content">
        <div className="amount-title">
          <p className="invest-amount">₹ {invest.amount}</p>
        </div>
        <div className="invest-details">
          <div className="reward-content">
            <p className="bold">Rewards</p>
            <ul>
              <li>{invest.reward1}</li>
              {invest.reward2 ? <li>{invest.reward2}</li> : ""}
            </ul>
          </div>
          <div className="reward-content">
            <p className="bold">Terms and conditions</p>
            <p>Community participants offer</p>
          </div>

          <button className="invest-card-button">Invest ₹{invest.amount}</button>
          <div className="limited">
            <p className="bold">CSOP</p>
            <p >Limited (<span className="bold">{invest.stock}</span> left)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
function SlideList() {
  const slide = [{
    "img": "https://ucarecdn.com/587800c6-340f-4330-a186-23fef8798de7/WemakeSkincareIntelligent101.png",
    "alt": "slide1"
  },
  {
    "img": "https://ucarecdn.com/16964edd-e771-4538-a964-fdc840d88882/WemakeSkincareIntelligent102.png",
    "alt": "slide2"
  },
  {
    "img": "https://ucarecdn.com/6b3443bf-ac22-41d4-b3ac-92639075c6df/WemakeSkincareIntelligent103.png",
    "alt": "slide3"
  },
  {
    "img": "https://ucarecdn.com/eb330d31-d141-4144-ad1e-1ef1e2438d67/WemakeSkincareIntelligent104.png",
    "alt": "slide4"
  },
  {
    "img": "https://ucarecdn.com/eb330d31-d141-4144-ad1e-1ef1e2438d67/WemakeSkincareIntelligent104.png",
    "alt": "slide5"
  },
  {
    "img": "https://ucarecdn.com/9bf6921e-48e9-4a2f-b346-52ed6d7c5571/WemakeSkincareIntelligent105.png",
    "alt": "slide6"
  },
  {
    "img": "https://ucarecdn.com/cb084633-4e28-4017-bf5d-f26279c7a471/WemakeSkincareIntelligent106.png",
    "alt": "slide7"
  },
  {
    "img": "https://ucarecdn.com/7b077488-d0bf-41a5-b0c4-79c2e6030015/WemakeSkincareIntelligent107.png",
    "alt": "slide8"
  },
  {
    "img": "https://ucarecdn.com/7b077488-d0bf-41a5-b0c4-79c2e6030015/WemakeSkincareIntelligent107.png",
    "alt": "slide9"
  },
  {
    "img": "https://ucarecdn.com/df109b47-9168-423e-b28e-c03736eab83f/WemakeSkincareIntelligent108.png",
    "alt": "slide10"
  }]
  return (
    <div className="slide-list">
      {slide.map((slide, index) => <Slides slide={slide} key={index} />)}
    </div>
  )
}

function Slides({ slide }) {

  return (
    <div className="slide">
      <img className="slide-image" src={slide.img} alt={slide.alt} />
    </div>
  )
}

function BottomNav() {
  return (
    <div className="bottomnav">
      <div className="company-details">
        <div className="pepcorn-company">
          <img className="logo" src="https://app.pepcorns.com/assets/img/logo.png" alt="pepcorns logo" />
          <p>Enabling everyday people to invest
            in startups they believe in</p>
          <div className="bottom-icon">
            {/* <IconButton aria-label="delete" fontSize="large" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="delete" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="delete" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="delete" color="inherit">
              <ChatIcon />
            </IconButton> */}
          </div>
        </div>
        <div className="investors">
          <p className="heading">FOR INVESTORS</p>
          <a href="#">Start Investing</a>
          <a href="#">How Investing Works</a>
        </div>
        <div className="investors">
          <p className="heading">FOR STARTUPS</p>
          <a href="#">Raise Capital</a>
          <a href="#">How It Works</a>
          <a href="#">Instruments</a>
        </div>
        <div className="investors">
          <p className="heading">COMPANY</p>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">We're hiring</a>
        </div>

        <div className="investors">
          <p>Loction_on Knapur | Bangalore | Delhi</p>
          <p>Mail support@pepcorns.com</p>
        </div>

      </div>

      <div className="terms">
        <a href="#">Terms Of Use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Refund Policy</a>
        <a href="#">Risks</a>
      </div>

      <div className="pepcorns-website">
        <p>
          <a href="www.pepcorns.com">www.pepcorns.com</a> (“Platform”) is a website owned and operated by Pepcorns
          Technologies Private Limited (“Pepcorns”), which is neither a registered
          stock exchange, an investment advisor nor a funding portal and is not
          registered with the Securities Exchange Board of India (“SEBI”). Nothing
          contained on this Platform shall be construed as an authorization by the
          SEBI to solicit investments nor should the Platform be construed as a SEBI
          authorized crowdfunding platform or a stock exchange, or their equivalent.
          The securities offered by any company registered on Platform are not traded
          on any stock exchange recognised by SEBI. Pepcorns does not allow any
          secondary market trading of securities on the Platform. By accessing this
          Platform and any pages thereof, you agree to be bound by the
          <a href="https://www.pepcorns.com/terms"> Terms of Use </a>
          and <a href="https://www.pepcorns.com/privacy"> Privacy Policy </a>.
          Investing in start-ups and early-stage businesses
          involves risks, including illiquidity, lack of dividends, loss of
          investment and dilution, and it should be done only as part of a
          diversified portfolio. Pepcorns is targeted exclusively at investors
          who are sufficiently sophisticated to understand these risks
          and make their own investment decisions. Please read our
          <a href="https://www.pepcorns.com/risks"> RISK POLICY </a>.
        </p>
      </div>
    </div >
  )
}