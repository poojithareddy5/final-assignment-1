import React from 'react'
import { useData } from '../hooks/useData'

const Dashboard = () => {
    const { data } = useData()
    
    
     
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Shop Name</span></td>
                    <td><span>Name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone Number</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
                </tr>
            </thead>
            {
                data?.map((items, index) => <DataList key={index} items={items} index={index}/>)
            }
        </table>
    )
}

const DataList = ({ items }) => {
    return (
        <>
            <tbody className='team-data-list' >
                <tr>
                    <td hidden={items.ShopName === null} ><span >{items.ShopName }</span></td>
                    <td hidden={items.Name === null} ><span>{items.Name}</span></td>
                    <td hidden={items.Email === null} ><span>{items.Email }</span></td>
                    <td hidden={items.Phone === null}><span>{items.Phone }</span></td>
                    <td hidden={items.TxnStatus === null}><span>{items.TxnStatus }</span></td>
                    <td hidden={items.TotalAmount === null}><span>{items.TotalAmount }</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default Dashboard