import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [  
  { name: "Apr", sales: 200 },
  { name: "May", sales: 350 },
  { name: "Jun", sales: 350 },
  { name: "Jul", sales: 350 },
  { name: "Aug", sales: 350 },
  { name: "Sep", sales: 350 },
  { name: "Oct", sales: 350 },
  { name: "Nov", sales: 350 },
  { name: "Dec", sales: 350 },
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },

];

const BarChartComponent = () => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Monthly Sales</div>
      <div className="card-body">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
               dataKey="name"
                interval={0}
                angle={-45}
                textAnchor="end"
                 tick={{ fontSize: 12 }}               />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#0d6efd" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarChartComponent;
