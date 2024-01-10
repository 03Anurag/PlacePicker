import React from 'react';
import { forwardRef } from 'react';

const Modal = forwardRef(function Modal({onConfirm , onCancel} , ref){
  return (
    <>
        <dialog className='modal' ref={ref}>
            <div id="delete-confirmation">
                <h2>Are Your Sure?</h2>
                <p>Do you really want to remove this place?</p>

                <div id="confirmation-actions">
                    <button onClick={onCancel} className='button-text'>No</button>
                    <button onClick={onConfirm} className='button'>Yes</button>
                </div>
            </div>
        </dialog>
    </>
  )
})

export default Modal