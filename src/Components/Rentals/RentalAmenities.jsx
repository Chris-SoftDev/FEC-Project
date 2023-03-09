import './RentalAmenities.css';

function RentalAmenities() {
    return ( 
        <div className='main-container'>
            <div className='content-container'>
                <div className='accom-container'>
                    <h2>Where you'll sleep</h2>
                    <div id="accommodations">
                        <div className='bed-container'>
                            <div id="king-bed">
                                {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 1.995 1.85L30 4l-.001 9.836 1.847 5.54a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232 1.845-5.537L2 4a2 2 0 0 1 1.697-1.977l.154-.018L4 2zm1.999 20H2l-.001 3.999h28zm-1.387-6H3.387l-1.333 4h27.891zM28 4H4l-.001 10H6v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h1.999zm-13 6H8v4h7zm9 0h-7v4h7z"></path></svg> */}
                            </div>
                            <h3 className="bedroom">Bedroom 1</h3>
                            <p>1 king bed</p>
                        </div>
                        <div className='bed-container'>
                            <div id="queen-bed1">
                                {/* <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z"></path></svg> */}
                            </div>
                            <h3 className='bedroom'>Bedroom 2</h3>
                            <p>1 queen bed</p>
                        </div>
                        <div className='bed-container'>
                            <h3 className='bedroom'>Bedroom 3</h3>
                            <p>1 double bed, 1 single bed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-container-amen">
                <h2>What this place offers</h2>
                <div className="amen-column-cont">
                    <div className="amen-column">
                        <div className="amen-content">Valley view</div>
                        <div className="amen-content">Kitchen</div>
                        <div className="amen-content">Dedicated workspace</div>
                        <div className="amen-content">Private hot tub</div>
                        <div className="amen-content">HDTV with Hulu, Amazon, Prime Video, Apple TV, HBO Max, Netflix, Roku</div>
                    </div>
                    <div className="amen-column">
                        <div className="amen-content">Mountain view</div>
                        <div className="amen-content">Wifi</div>
                        <div className="amen-content">Free parking on premises</div>
                        <div className="amen-content">Pets allowed</div>
                        <div className="amen-content">Security cameras on property</div>
                    </div>
                </div>
                    <div id="amen-button-cont">
                        <div id='amen-button'>Show all 49 amenities</div>
                    </div>
            </div>
        </div>
    );
}

export default RentalAmenities;