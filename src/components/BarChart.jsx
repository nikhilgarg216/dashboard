import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import MenuComp from "./MenuComp"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const data = [
  0, 5000, 8000, 4000, 6000, 7000, 10000, 15000, 9000, 12000, 5000, 8000,
];
const labels = [
  "5",
  "7",
  "9",
  "11",
  "13",
  "15",
  "17",
  "19",
  "21",
  "23",
  "25",
  "27",
];

export default function ChartsOverviewDemo() {
  return (
    <div className="container-fluid  row g-2">
      <div className="col-lg-8 col-md-12">
        <ThemeProvider theme={theme}>
          <Box sx={{ backgroundColor: "#1F2029", padding: 2, borderRadius: 2 }}>
            <BarChart
              series={[{ data: data, label: "Activity", color: "#5c74f2" }]}
              height={290}
              xAxis={[{ scaleType: "band", data: labels }]}
              yAxis={[{ max: 15000 }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              grid={{ horizontal: true }}
            />
          </Box>
        </ThemeProvider>
      </div>
      <div className="col-lg-4 col-md-12">
        <MenuComp/>
      </div>
    </div>
  );
}
