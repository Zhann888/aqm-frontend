import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer
} from 'recharts';

const pm25Data = [
    { date: '03.04 07:38', value: 22 },
    { date: '03.04 07:53', value: 23 },
    { date: '03.04 08:08', value: 20 },
    { date: '03.04 08:23', value: 19 },
    { date: '03.04 08:38', value: 19 },
    { date: '03.04 08:53', value: 16 },
    { date: '03.04 09:08', value: 14 }
  ];
  
  

  const pm10Data = [
    { date: '03.04 07:38', value: 23 },
    { date: '03.04 07:53', value: 23 },
    { date: '03.04 08:08', value: 21 },
    { date: '03.04 08:23', value: 20 },
    { date: '03.04 08:38', value: 19 },
    { date: '03.04 08:53', value: 16 },
    { date: '03.04 09:08', value: 15 }
  ];
  

const ChartBlock = ({ title, data, color }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      height: 320,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h3 style={{
        textAlign: 'center',
        fontSize: '18px',
        marginTop: 0,
        marginBottom: '12px'
      }}>
        {title}
      </h3>
  
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  

export default function PMCharts() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <ChartBlock title="Уровень PM2.5" data={pm25Data} color="#8884d8" />
      <ChartBlock title="Уровень PM10" data={pm10Data} color="#82ca9d" />
    </div>
  );
}
