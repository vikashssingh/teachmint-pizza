import { useSelector } from "react-redux";
import StageCard from "../components/StageCard";

const Stage = () => {
  // Retrieve orders from the Redux store
  const orders = useSelector((state) => state.orders.orders);

  // Function to render StageCard components based on order status
  const renderStageCards = (status, next) => {
    return orders
      .filter((order) => order.status === status)
      .map((order) => (
        <StageCard order={order} key={`${order.id}-${status}`} next={next} />
      ));
  };

  return (
    // Main container for the Stage component
    <div className="w-full h-screen overflow-hidden py-5">
      <div className="sm:w-11/12 sm:mx-auto flex gap-4 h-full overflow-x-auto mx-5">
        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">
            Order Placed
          </h3>
          <div className="pb-12 mt-5 space-y-4 h-full overflow-hidden overflow-y-auto ">
            {renderStageCards("order", "making")}
          </div>
        </div>

        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">
            Order Making
          </h3>
          <div className="pb-12 mt-5 space-y-4 h-full overflow-hidden overflow-y-auto ">
            {renderStageCards("making", "ready")}
          </div>
        </div>

        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">
            Order Ready
          </h3>
          <div className="pb-12 mt-5 space-y-4 h-full overflow-hidden overflow-y-auto ">
            {renderStageCards("ready", "picked")}
          </div>
        </div>

        <div className="flex-1 h-full overflow-hidden min-w-60">
          <h3 className="font-bold text-sm text-center text-pizza-600">
            Order Picked
          </h3>
          <div className="pb-12 mt-5 space-y-4 h-full overflow-hidden overflow-y-auto ">
            {renderStageCards("picked", "")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
