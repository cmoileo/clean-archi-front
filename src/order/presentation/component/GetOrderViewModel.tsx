import {useEffect, useState} from "react";
import {CreateOrderDto} from "../../domain/dto/create-order.dto.ts";
import {getOrdersService} from "../../domain/use-case/get-orders.service.ts";

export const GetOrdersViewModel = () => {
    const [orders, setOrders] = useState<CreateOrderDto[] | null>([])
    useEffect(() => {
        const getOrders = async () => {
            setOrders(await getOrdersService())
            return orders
        }
        getOrders()
    }, []);
    return {
        orders
    }
}