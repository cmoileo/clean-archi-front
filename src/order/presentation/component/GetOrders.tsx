import {GetOrdersViewModel} from "./GetOrderViewModel.tsx";

const GetOrders = () => {
    const { orders } = GetOrdersViewModel()
    return (
        <div>
            {
                orders && orders.map(order => (
                    <div key={order.customerName}>
                        <h3>{order.customerName}</h3>
                        <ul>
                            {order.orderItems.map(orderItem => (
                                <li key={orderItem.productName}>
                                    {orderItem.productName} - {orderItem.quantity} - {orderItem.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default GetOrders