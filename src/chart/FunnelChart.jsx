// FunnelChart.jsx
import React, { useEffect } from "react";
import D3Funnel from 'd3-funnel';

function FunnelChart({ id, LeadsValue, FollowUpValue, OfficeVisiteValue, SiteVisiteValue, DisqualifiedValue, ClosedValue }) {
  useEffect(() => {
    const data = [
      { label: 'Leads', value: LeadsValue || 0 },
      { label: 'Follow Ups', value: FollowUpValue || 0 },
      { label: 'Office Visites', value: OfficeVisiteValue || 0 },
      { label: 'Site Visites', value: SiteVisiteValue || 0 },
      { label: 'Disqualified ', value: DisqualifiedValue || 0 },
      { label: 'Closed', value: ClosedValue || 0 },
    ];

console.log(data);
    const totalValue = data.reduce((sum, item) => sum + item.value);

    const options = {
      block: {
        dynamicHeight: true,
        minHeight: 20,
      },
      label: {
        fontFamily: 'Arial',
        fill: 'white',
        format: '{l}: {f}',
        fontSize: 'x-small',
      },
      tooltip: {
        enabled: true,
        format: '{l}: {f}',
      },
      curve: {
        enabled: true,
        height: 20,
        shade: -0.4,
      },
    };

    options.block.dynamicHeight = totalValue;

    const containerId = `funnel-${id}`;
    const container = document.getElementById(containerId);

    if (container) {
      const chart = new D3Funnel(`#${containerId}`);
      chart.draw(data, options);

      return () => {
        chart.destroy();
      };
    }
  }, [id, LeadsValue, FollowUpValue, OfficeVisiteValue, SiteVisiteValue, DisqualifiedValue, ClosedValue]);

  return (
    <div id={`funnel-${id}`} style={{ height: "300px" }}></div>
    // <div id={`funnel-${id}`} className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto" style={{ height: "300px" }}></div>
  );
}

export default FunnelChart;
