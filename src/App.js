// import { height } from "@mui/system";
import Sidebar from "./components/Sidebar";
import Topnav from "./components/Topnav";
import CompCard from "./components/CompCard";
import BarChart from "./components/BarChart";
import InfoTable from "./components/InfoTable";
import { maxWidth } from "@mui/system";

function App() {
  return (
    <div className="app">
      <div className="d-flex">
        <Topnav />
      </div>
      <div className="d-flex" style={{ maxWidth: "100%" }}>
        <div className="">
          <Sidebar />
        </div>
        <div style={{ background:"#141316", maxWidth: "100%" }}>
          <div className="mt-3">
            <CompCard />
          </div>
          <div className="mt-3">
            <BarChart />
          </div>
          <div className="mt-3">
            <InfoTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
