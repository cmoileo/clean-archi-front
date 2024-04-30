import { OrderRepository } from "../../infrastructure/repository/order.repository";

export const getOrdersService = async () => {
    const { getOrders } = OrderRepository();

    const orders = await getOrders();

    return orders;
};
