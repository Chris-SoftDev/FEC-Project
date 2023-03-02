import './Host.css'

function Host() {
    return ( 
        <div>
            <div className = "myhost-container">
                <div className = "host-cohost">
                    <div className ="host">
                        <div className= "host-img-container">
                            <img className ="host-img">{/*DATA.img*/}</img>
                        </div>
                        <div className ="host-name">
                            <div className ="hosted-by">Hosted by Tag & Sherilyn</div>
                            {/*<div className ="hosted-by">Hosted by {DATA.host} & {DATA.cohost}</div>*/}
                            <div className= "month-year">Joined in November 2017</div>
                            {/*<div className= "month-year">Joined in {DATA.month} {DATA.year}</div>*/}
                        </div>
                    </div>
                    <div className ="cohost">
												<div>
													
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
                        <div>LOGO</div>
                        <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                    </div>
                </div>
            </div>
            <div className ='thingstoknow'>
                <div>Things to know</div>
            </div>
        </div>
     );
}

export default Host;