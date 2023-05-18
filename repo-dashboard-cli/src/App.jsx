import "./i18n";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppStateContext } from "./context/AppStateContext";
import { useState } from "react";
import SignInPanel from "./routes/auth/SignInPanel";
import DefaultPanel from "./routes/panels/DefaultPanel";
import MenuPanel from "./routes/panels/MenuPanel";
import ShiftsPanel from "./routes/panels/ShiftsPanel";
import MapPanel from "./routes/panels/MapPanel";
import DetailPanel from "./routes/panels/DetailPanel";
import ActivityDetailPanel from "./routes/panels/ActivityDetailPanel";
import WorkingInStorePanel from "./routes/panels/WorkingInStorePanel";

function App() {
  const [selectedDate, setSelectedDate] = useState([Date.now(), Date.now()]);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedRetailer, setSelectedRetailer] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="flex h-screen bg-slate-50">
      <div className="m-auto">
        <AppStateContext.Provider
          value={{
            selectedDate,
            setSelectedDate,
            userInfo,
            setUserInfo,
            selectedRetailer,
            setSelectedRetailer,
            selectedStore,
            setSelectedStore,
          }}
        >
          <BrowserRouter basename="/repo-app/dashboard">
            <Routes>
              <Route exact path="/" element={<SignInPanel />} />
              <Route
                exact
                path="/menu"
                element={
                  <ProtectedRoute header={false}>
                    <MenuPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/menu/shifts"
                element={
                  <ProtectedRoute>
                    <ShiftsPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/menu/shifts/default"
                element={
                  <ProtectedRoute>
                    <DefaultPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/menu/default"
                element={
                  <ProtectedRoute>
                    <DefaultPanel />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path="/menu/map"
                element={
                  <ProtectedRoute>
                    <MapPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/menu/detail"
                element={
                  <ProtectedRoute>
                    <DetailPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/menu/detail/activityDetail"
                element={
                  <ProtectedRoute>
                    <ActivityDetailPanel />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path="/menu/workingInStore"
                element={
                  <ProtectedRoute>
                    <WorkingInStorePanel />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AppStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
