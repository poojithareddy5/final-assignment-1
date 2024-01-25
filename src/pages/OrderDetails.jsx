import React from 'react'
import { useData } from '../hooks/useData'

const OrderDetails = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Order Details</span></td>
                    <td><span>Name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
                    <td><span>Discount</span></td>
                    <td><span>Order Type</span></td>
                    <td><span>Order Status</span></td>
                    <td><span>Total Taxes</span></td>

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
                    <td hidden={items.OrderDetails===null} ><span>{items.OrderDetails}</span></td>
                    <td hidden={items.Name===null} ><span>{items.Name}</span></td>
                    <td hidden={items.Email===null}><span>{items.Email }</span></td>
                    <td hidden={items.Phone===null}><span>{items.Phone}</span></td>
                    <td hidden={items.TxnStatus===null}><span>{items.TxnStatus }</span></td>
                    <td hidden={items.TotalAmount===null}><span>{items.TotalAmount }</span></td>
                    <td hidden={items.Discount===null}><span>{items.Discount }</span></td>
                    <td hidden={items.OrderType===null}><span>{items.OrderType }</span></td>
                    <td hidden={items.OrderStatus===null}><span>{items.OrderStatus }</span></td>
                    <td hidden={items.TotalTaxes===null}><span>{items.TotalTaxes }</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default OrderDetails