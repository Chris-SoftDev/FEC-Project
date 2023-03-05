import { useContext } from 'react';
import { HostContext, HostProvider } from '../Context/HostContext'
import './Host.css'
import ShowCancel from './ShowCancel';
import ShowRules from './ShowRules'
import ShowSafety from './ShowSafety';
//import hostImage from './host.jpg'

function Host() {
	const { showHouseRules, openHouseRules, showCancellation, openCancellation, showMoreSafety, openSafety} = useContext(HostContext)
	return ( 
		<>
			<div className = "myhost-container">
				<div className = "host-cohost">
					<div className ="host">
						<div className='host-info'>
							<div className= "host-img-container">
								{/*<img src={hostImage} alt="host"/>*/}
							</div>
							<div className ="host-name">
								<div className ="hosted-by">Hosted by Tag & Sherilyn</div>
								<div className= "month-year">Joined in November 2017</div>
							</div>
						</div>
						<div className = "host-rating">
							<div className ="reviews">
								<div className ="star">
									<svg viewBox= '0 0 32 32'>
										<path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
									</svg>
								</div>
								<p>210 Reviews</p>
							</div>
							<div className="verification">
                				<div className ="shield-icon">
									<svg viewBox= '0 0 32 32'>
										<path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path>
									</svg>
								</div>
								<p>Identity verified</p>
							</div>
						</div>
						<div className='host-bio'>
							<p>We are proud parents of 6, and grandparents of 2, who love the outdoors! We enjoy the beach (when we can), and are avid cyclists, hikers, and down-time enthusiasts. Happy dog owners (2).</p>
						</div>
					</div>
					<div className ="cohost">
						<div className='cohost-title'>
							Co-hosts
						</div> 
						<div className='cohost-img-container'>
							<img className ="cohost-img">{/*DATA.img*/}</img>
							<div className='cohost-name'>Sherilyn</div>
						</div>
						<div className='cohost-title'>During your stay</div>
						<div className='cohost-bio'>
							<p>We are local in Boise and can be on-site pretty quickly if there is an issue. We're available at anytime via phone/text/AIRBNB message app. The cabin features wifi, Verizon wireless, and a landline.</p>
						</div>
					</div>
				</div>
				<div className = "contact-host">
					<ul className ="contact">
						<li>Language: English</li>
						<li>Response rate: 100%</li>
						<li>Response time: within a few hours</li>
					</ul>
					<div className= "contact-btn-div">
						<button className= "contact-btn">Contact Host</button>
					</div>
					<div className ="payment-protect">
						<div className="protection-logo">
							<svg viewBox='0 0 48 48'>
								<g>
									<g stroke='none'>
										<path d="m25 5 .5846837.00517475c4.2905015.07574932 8.8374917.98334075 13.644943 2.73687823l.7703733.28794702v27.3705076l-.0084766.1301365c-.0392237.2994207-.2122236.5656263-.4699074.7230756l-.1154775.0605995-11.4234694 5.0774159c.0623636-.7458456-.0433445-1.4943022-.3209346-2.2783707-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487l-.3317555-.6369277c-.4686141-.9115826-.8248653-1.6297768-1.3147672-2.2052384-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-.4956822.9653459-.9868615 1.9338929-1.47282629 2.9041739l.00159179-19.0721502.769087-.28647781c4.798406-1.75037189 9.3373349-2.65799308 13.6207364-2.73688762z" fillOpacity=".2"></path>
										<path d="m25 1c5.5985197 0 11.5175072 1.27473768 17.7548231 3.81642897.7027419.28641855 1.1783863.94329535 1.2386823 1.69066764l.0064946.16143432v28.73197667c0 1.8999458-1.0758761 3.6285379-2.7638433 4.4721215l-.2054644.0969363-15.0427818 6.6856808c-.4614217.2050763-1.8621146.3276624-2.7955525.3430957l-.192358.0016581.0009065-1.0005013c.6483674-.0069073 1.2843321-.1330366 1.8784107-.3747752.8327784-.3388673 1.5457548-.8939986 2.0790671-1.5885618l13.2600311-5.8942194c1.023196-.4547538 1.7028179-1.4383245 1.7751735-2.5449525l.0064111-.1964822v-28.73197667l-.6916987-.27704554c-5.7517231-2.26330416-11.1871718-3.39148539-16.3083013-3.39148539-5.1211255 0-10.5565697 1.12817946-16.3082877 3.39148006l-.6917123.27707479-.00030284 24.49382405c-.68067737 1.4079172-1.34834149 2.8151846-2.00083161 4.2173468l.00113445-28.71117085c0-.81311953.4922453-1.5453083 1.24525131-1.85215622 6.23725069-2.54166294 12.15623339-3.81639863 17.75474869-3.81639863z"></path>
									</g>
									<path d="m15.999908 41.6930234.6867258-.8851772c1.5957359-2.0328613 2.5919668-3.8873951 2.9612752-5.511912.2804314-1.2318637.2318527-2.5167089-.4804505-3.5591688-.6801015-.9952012-1.8642067-1.5894421-3.1673665-1.5894421-1.3033438 0-2.487633.5940563-3.1675505 1.5890729-.7099111 1.039137-.761802 2.3201055-.4810025 3.5580612.3689403 1.6247015 1.3653552 3.4796045 2.9616432 5.5133888l.6867258.8851772.6447715.7192179c1.1495113 1.2599236 2.1735278 2.122579 3.2227536 2.7149739.8151649.4602182 1.6400823.7413704 2.4521191.8358878.8812245.1033783 1.7585848-.0123685 2.559765-.3383795 1.6422905-.6682672 2.8186673-2.1775911 3.0700251-3.9387151.1205267-.8438258.0264975-1.6854363-.2876078-2.572644-.2495178-.7044496-.7667703-1.7805075-1.0418654-2.3950548-1.9094732-4.1561789-3.9589781-8.3688465-6.0912876-12.5211487-.6486357-1.2222643-1.0477537-2.1388241-1.6465227-2.8421661-.743401-.8737317-1.7668654-1.3549948-2.8821508-1.3549948-1.1154695 0-2.1391179.4816323-2.8828868 1.3557332-.6050254.7114646-1.0306408 1.6819288-1.6457867 2.8412431-2.1326775 4.1534098-4.1819984 8.3660775-6.09128759 12.5211487-.28227155.6306079-.79308369 1.6933742-1.04168139 2.3948702-.3141053.8872077-.40813448 1.7288182-.28760784 2.5731978.25117384 1.7609394 1.42736664 3.2700787 3.06965711 3.9385305.81939715.3333951 1.69418134.4397272 2.55958102.3385641.81295679-.0948866 1.63805829-.3760388 2.45248709-.8360724 1.0492258-.5922103 2.0732422-1.4550503 3.2227536-2.7149739z" fill="none" strokeWidth="2"></path>
								</g>
							</svg>
						</div>
						<div className ="protection-info">
							<p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
						</div>
					</div>
				</div>
			</div>
			<div className ='thingstoknow'>
				<div className='thingstoknow-title'>Things to know</div>
				<div className='thingstoknow-content'>
					<div className='thingstoknow-parts'>
						<ul>
							<div className ='thingstoknow-subtitle'>House rules</div>
							<li>Check-in after 4:00 PM</li>
							<li>Checkout before 11:00 AM</li>
							<li>5 guests maximum</li>
							<div className="show-more-link" onClick={openHouseRules}>Show more {'>'}</div>
						</ul>
					</div>
					<div className='thingstoknow-parts'>
						<ul>
							<div className='thingstoknow-subtitle'>Safety & property</div>
							<li>Security camera/recording device</li>
							<li>Pool/hot tub without a gate or lock</li>
							<li>May encounter potentially dangerous animal</li>
							<div className="show-more-link" onClick ={openSafety}>Show more {'>'}</div>
						</ul>
					</div>
					<div className='thingstoknow-cancellation'>
						<ul>
							<div className='thingstoknow-subtitle'>Cancellation policy</div>
							<li>Free cancellation before Mar 8.</li>
							<div className='cancel-info'>
							Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.
							</div>
							<div className="cancel-show-more-link" onClick={openCancellation}>Show more {'>'}</div>
						</ul>
					</div>
				</div>
			</div>
			{showHouseRules ? (<div className="slide-in-panel">
					<ShowRules />
				</div>
			) : null}
			{/*showHouseRules && (<ShowRules />)*/}
			{showCancellation && (<ShowCancel />)}
			{showMoreSafety && (<ShowSafety />)}
		</>
	);
}

export default Host;