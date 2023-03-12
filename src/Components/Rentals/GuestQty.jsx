import { useContext } from 'react';
import HostContext from '../../Context/HostContext';
import './GuestQty.css'

function GuestQty() {
const { guestQtyModalRef } = useContext(HostContext)

    return ( 
        <div className="guest-qty-modal-container" ref={guestQtyModalRef}>

        </div>
     );
}

export default GuestQty;