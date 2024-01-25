import React from 'react'
import { useData } from '../hooks/useData'

function Store() {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Shop Name</span></td>
                    <td><span>Store LatL-ong</span></td>
                    <td><span>Map Link</span></td>
                    <td><span>Store ShopURL</span></td>
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
                    <td hidden={items.ShopName===null}><span>{items.ShopName}</span></td>
                    <td hidden={items.StoreLatLong===null}><span>{items.StoreLatLong}</span></td>
                    <td hidden={items.MapLink===null}><span>{items.MapLink}</span></td>
                    <td hidden={items.StoreShopURL===null}><span>{items.StoreShopURL}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default Store