import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../store/slices/orderSlice";
import TimeDifference from "../components/utils/TimeDifference";
import { toast } from "react-toastify";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const handleCancelOrder = (orderId) => {
    // Dispatch action to cancel the order
    dispatch(cancelOrder(orderId));

    // Display a toast notification for order cancellation
    toast("Order cancelled", {
      style: {
        background: "#ffffff",
        color: "#dc2626",
        border: "solid 1px #dc2626",
        borderRadius: "2px",
      },
      hideProgressBar: true,
      autoClose: 2000,
    });
  };

  return (
    <div className="w-full h-screen overflow-hidden py-5">
      <div className="sm:w-11/12 mx-auto h-full overflow-hidden overflow-y-scroll sm:p-0 px-5">
        <span className="font-medium text-sm">
          Total order delivered - &nbsp;
          <span className="text-pizza-600">
            0{orders.filter((item) => item.status === "picked").length}
          </span>
        </span>
        <div className="overflow-x-auto py-3">
          <table className="w-full table-fixed border border-pizza-600 h-full rounded-sm min-w-[40rem]">
            <thead className="text-left text-sm font-medium text-pizza-600 border border-pizza-600">
              <tr>
                <th className="px-4 py-2">Orders</th>
                <th className="px-4 py-2">Stage</th>
                <th className="px-4 py-2">Total Time</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm space-y-3 text-gray-600">
              {orders.map((order) => {
                const isCancelAllowed = !["ready", "picked"].includes(
                  order.status
                );

                return (
                  <tr key={order.id}>
                    <td className="line-clamp-1 px-4 py-2 uppercase mt-1">
                      Order-{order.id.slice(0, 6)}
                    </td>
                    <td className="px-4 py-2 uppercase">{order.status}</td>
                    <td className="px-4 py-2">
                      {order.endTime ? (
                        // Render TimeDifference component for completed orders
                        <TimeDifference
                          startTimestamp={order.startTime}
                          endTimestamp={order.endTime}
                        />
                      ) : (
                        "In progress"
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {isCancelAllowed && (
                        // Render Cancel button for applicable orders
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          className="bg-red-600 hover:bg-red-500 p-2 px-5 text-xs text-white rounded-sm outline-none transition-colors duration-300"
                        >
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
