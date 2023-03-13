import { useContext } from 'react';
import HostContext from '../../Context/HostContext';
import "./KeyboardModal.css"

export default function ShowCancel() {

    const { keyboardModal, closeKeyboardModal, keyboardModalRef } = useContext(HostContext)


    return (
        <>
            {keyboardModal && (<div className='modal-overlay'>
                <div className='keyboard-modal' ref={keyboardModalRef}>
                    <div className='keyboard-modal-title'>Keyboard shortcuts</div>
                    <div className='keyboard-modal-content-container'>
                        <div className='focus-leftarrow-container'>
                            <div className='left-arrow-container'>
                                <div className='left-arrow'>↵</div>
                            </div>
                            <div className='focus'>Select the date in focus</div>
                        </div>
                        <div className='left-right-container'>
                            <div className='left-right-arrows-container'>
                                <div className='left-right-arrows'>←/→</div>
                            </div>
                            <div className='left-right-text'>Move backward (left) and forward (right) by one day</div>
                        </div>
                        <div className='up-down-container'>
                            <div className='up-down-arrows-container'>
                                <div className='up-down-arrows'>↑/↓</div>
                            </div>
                            <div className='up-down-text'>Move backward (up) and forward (down) by one week</div>
                        </div>
                        <div className='page-up-down-main-container'>
                            <div className='page-up-down-container'>
                                <div className='page-up-down'>PGUP/PGDN</div>
                            </div>
                            <div className='switch-months-text'>Switch months</div>
                        </div>
                        <div className='home-end-main-container'>
                            <div className='home-end-container'>
                                <div className='home-end'>HOME/END</div>
                            </div>
                            <div className='go-to-first-last-day'>Go to the first or last day of a week</div>
                        </div>
                        <div className='open-panel-container'>
                            <div className='question-mark-container'>
                                <div className='question-mark'>?</div>
                            </div>
                            <div className='open-panel-text'>Open this panel</div>
                        </div>
                    </div>
                    <div className='back-to-calendar-btn'>
                        <button onClick={closeKeyboardModal}>Back to calendar</button>
                    </div>
                </div>
            </div>)}
        </>
    )
}