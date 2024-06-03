import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import styles from './Piechart.module.css';

const countryCodes = {
  USA: 'us',
  Canada: 'ca',
  UK: 'gb',
  Germany: 'de',
  Australia: 'au',
  France: 'fr',
};

const PieChartWithFlags = () => {
  const data = {
    labels: ['USA', 'Canada', 'UK', 'Germany', 'Australia', 'France'],
    datasets: [
      {
        label: 'User Distribution by Country',
        data: [300, 150, 100, 80, 70, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
        external: function (context) {
   
          let tooltipEl = document.getElementById('chartjs-tooltip');
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table></table>';
            document.body.appendChild(tooltipEl);
          }


          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }


          tooltipEl.classList.remove('above', 'below', 'no-transform');
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add('no-transform');
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }


          if (tooltipModel.body) {
            const bodyLines = tooltipModel.body.map(getBody);

            let innerHtml = '<thead></thead><tbody>';

            bodyLines.forEach((body, i) => {
              const label = context.tooltip.dataPoints[i].label;
              const value = context.tooltip.dataPoints[i].raw;
              const flagCode = countryCodes[label];
              const flagUrl = `/flags/${flagCode}.svg`;

              const bodyContent = `
                <tr>
                  <td><img src="${flagUrl}" alt="${label}" style="width: 20px; height: 15px; margin-right: 5px;" /></td>
                  <td>${label}: ${value}</td>
                </tr>
              `;

              innerHtml += bodyContent;
            });

            const tableRoot = tooltipEl.querySelector('table');
            tableRoot.innerHTML = innerHtml + '</tbody>';
          }


          const position = context.chart.canvas.getBoundingClientRect();


          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          tooltipEl.style.fontFamily = tooltipModel.options.bodyFont.family;
          tooltipEl.style.fontSize = tooltipModel.options.bodyFont.size;
          tooltipEl.style.fontStyle = tooltipModel.options.bodyFont.style;
          tooltipEl.style.padding = tooltipModel.options.padding + 'px ' + tooltipModel.options.padding + 'px';
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          tooltipEl.style.color = 'white';
          tooltipEl.style.borderRadius = '4px';
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChartWithFlags;
