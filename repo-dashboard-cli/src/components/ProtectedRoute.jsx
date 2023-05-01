import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SelectionHeader from "./SelectionHeader";
import HeaderBar from "./HeaderBar";

export const ProtectedRoute = ({ children, header = true }) => {
  const { user } = useSelector((state) => state.auth.value);

  if (!user.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen">
      <HeaderBar />
      {header ? <SelectionHeader /> : null}
      <div>{children}</div>
    </div>
  );
};
