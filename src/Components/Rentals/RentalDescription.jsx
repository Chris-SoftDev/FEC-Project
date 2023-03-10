import './RentalDescription.css';
import { useContext } from 'react';
import { HostContext } from '../../Context/HostContext'

function RentalDescription() {
    const { hostData } = useContext(HostContext)
    console.log(hostData.url)
    return (
        <>
        <div className='Rental-Selection-Holder'>
            <div className='Rental-Text-Cont'>
                <div className='Rental-Text-Top'>
                    <h2 className='Rental-Section-Header'>Entire cabin hosted by Tag & Sherilyn</h2>
                </div>
                <div className='Rental-Text-Bottom'>
                    <ul className='Rental-List'>
                        <li className='Rental-List-Child' >
                            <span>5 guests</span>
                        </li>
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true" > · </span>    
                            <span>3 bedrooms</span>
                        </li> 
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true"> · </span>
                            <span>4 beds</span>
                            
                        </li>
                        <li className='Rental-List-Child'>
                            <span aria-hidden="true"> · </span>    
                            <span>2 baths</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='Rental-Picture-Cont'>
                <div className= "rental-img-container">
                    <img src={hostData.url}></img>
					Photo For this			
				</div>
            </div>
        </div>
        </>
     );
}

export default RentalDescription;

//<img src= {hostData.url}></img>
{/* <div className='Rental-Box'>
            <section className='Rental-Section'>
                <h2 className='Rental-Section-Header'>Entire cabin hosted by Tag & Sherilyn</h2>
                <ol className='Rental-List'>
                    <li className='Rental-List-Child' >
                        <span>5 guests</span>
                    </li>
                    <li className='Rental-List-Child'>
                        <span aria-hidden="true" > · </span>    
                        <span>3 bedrooms</span>
                    </li> 
                    <li className='Rental-List-Child'>
                        <span aria-hidden="true"> · </span>
                        <span>4 beds</span>
                        
                    </li>
                    <li className='Rental-List-Child'>
                        <span aria-hidden="true"> · </span>    
                        <span>2 baths</span>
                    </li>
                </ol>
                {/* <div className= "rental-img-container">
                    <img src= {hostData.url}></img>
								
				</div> */}
            
        //     </section>
        // </div> */}