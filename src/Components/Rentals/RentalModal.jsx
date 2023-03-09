import './RentalModal.css';

function RentalModal() {
    return ( 
        <>
            <div className="rental-modal-container">
                <div className="rental-modal-content-container">
                    <div className="rental-modal-content-header">
                        <div className="rental-modal-content-header-pricing">
                            <span id='header-modal-pricing-value'>$160</span>
                            <span id='header-modal-pricing-label'>night</span>
                        </div>
                        <div className="rental-modal-content-header-reviews">
                            <div className="rental-modal-rating-star">
                                <svg viewBox='0 0 32 32'>
                                    <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="rental-modal-rating-number">4.93 ·</div>
                            <button className='rental-modal-rating-reviews'>211 reviews</button>
                        </div>
                    </div>
                    <div className="rental-modal-content-body">

                    </div>
                    <div className="rental-modal-content-footer">

                    </div>
                </div>
            </div>
            <div className="rental-modal-reporting-container">
                <div className="rental-modal-reporting">
                    <button>
                        <div className="reporting-btn-icon">
                            <svg viewBox='0 0 32 32'>
                                <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                            </svg>
                        </div>
                        Report this listing
                    </button>
                </div>
            </div>
        </>
    );
}

export default RentalModal;