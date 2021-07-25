import React from 'react';
import { useState } from 'react';
import Contract from './Contract';
interface Icontract {
    name: string;
    phone: string;
    file: "";
}

const Contracts = () => {
    const [contract, setContract] = useState<Icontract>({ name: "", phone: "", file: "" })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContract({ ...contract, [e.target.name]: e.target.value })
    }
    console.log(contract)
    const [contractList, setContractList] = useState<Icontract[]>([]);
    const handleAddcontract = () => {
        setContractList([...contractList, contract]);
        setContract({
            name: "",
            phone: "",
            file: ""
        })
    }
    const removeContract = (phone: string) => {
        const newContractList = contractList.filter(remo => remo.phone !== phone);
        setContractList(newContractList)
    }
    console.log(contractList)
    return (
        <div>
            <h1> 🦸 Hello contracts page</h1>
            <div className="form">
                <input
                    value={contract.name}
                    onChange={handleChange}
                    type="text" placeholder="Enter Name"
                    name="name" /><br />
                <input
                    value={contract.phone}
                    onChange={handleChange}
                    type="number" placeholder="Enter Number"
                    name="phone" /><br />
                <input
                    value={contract.file}
                    onChange={handleChange}
                    type="file" placeholder="Enter file"
                    name="file" /><br />
                <button onClick={handleAddcontract}>Add Contract</button>

            </div>
            {
                contractList.map(cont => <Contract
                    key={cont.phone}

                    name={cont.name}
                    phone={cont.phone}
                    file={cont.file}
                    removeContract={removeContract}
                ></Contract>)
            }


        </div>
    );
};

export default Contracts;