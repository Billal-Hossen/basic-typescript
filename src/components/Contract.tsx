import React from 'react';
interface IPrpos {
    name: string;
    phone: string;
    file: "";
    removeContract: (phone: string) => void
}

const Contract = ({ name, phone, file, removeContract }: IPrpos) => {
    return (
        <div className="shadow-lg p-3 mb-3 bg-white rounded mt-4">
            <div className="d-flex">
                <div >
                    <img className="" width="90"
                        height="90" src={file} alt="profile Picture" />
                </div>
                <div className="p-3">
                    <p><strong>Name:{" "}{name}</strong></p>
                    <p><strong>Number:{" "} {phone}</strong></p>
                </div>
                <svg onClick={() => removeContract(phone)} width="30"
                    height="30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>

        </div>
    );
};

export default Contract;