import React from 'react'
import { useData } from '../hooks/useData'

const StoreOwner = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Shop Name</span></td>
                </tr>
            </thead>
            {
                data?.map((items, index) => <DataList key={index} items={items} index={index}/>)
            }
        </table>
    )
}

const DataList = ({ items, index }) => {
    return (
        <>
            <tbody className='team-data-list' >
                <tr>
                    <td hidden={items.ShopName === null} ><span>{items.ShopName }</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default StoreOwner