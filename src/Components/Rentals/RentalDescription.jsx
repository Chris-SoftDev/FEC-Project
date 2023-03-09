import './RentalDescription.css';

function RentalDescription() {
    return (
        <>
        <div className='Rental-Box'>
            <section className='Rental-Section'>
                <h2>Entire cabin hosted by Tag & Sherilyn</h2>
                <ol className='Rental-List'>
                    <li >
                        <span>5 guests</span>
                    </li>
                    <li>
                        <span aria-hidden="true"> · </span>    
                        <span>3 bedrooms</span>
                    </li> 
                    <li>
                        <span aria-hidden="true"> · </span>
                        <span>4 beds</span>
                        
                    </li>
                    <li>
                        <span aria-hidden="true"> · </span>    
                        <span>2 baths</span>
                    </li>
                </ol>
            
            
            
            
            
            </section>
        </div>
        </>
     );
}

export default RentalDescription;