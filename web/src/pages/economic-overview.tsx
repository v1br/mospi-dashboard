import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import Footer from '../components/shared/Footer'
import LineChart from '../components/interfaces/LineChart'
import DualLineChart from '../components/interfaces/DualLineChart'
import StackedAreaChart from '../components/interfaces/StackedArea'
import BoxPlotChart from '../components/interfaces/BoxPlotChart'
import ChartCard from '../components/shared/ChartCard'
import PageData from '../data/metadata/economic-overview.json'
import ImgData1 from '../data/values/line-chart-gdp.json'
import ImgData2 from '../data/values/dual-line-chart-gdp.json'
import ImgData3 from '../data/values/stacked-expenditure.json'
import ImgData4 from '../data/values/line-chart-income.json'
import ImgData5 from '../data/values/box-plot-growth.json'

const EconomicOverview = () => {
    return (
      <div className='flex flex-col mt-24 md:p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

        <em className='text-secondary font-xs m-4'>
          Chapter {PageData.page_id} ·&nbsp;
            <a href="https://github.com/v1br/mospi-dashboard/blob/main/notebooks/page1/page1.ipynb" target='_blank' rel='noopener noreferrer' className='hover:underline text-blue-600 visited:text-purple-600'>Refer Notebook ☍</a>
        </em>

        <Heading>
          {PageData.page_title}
        </Heading> 

        <Description>
          {PageData.page_description}
        </Description>

        {/* Nominal vs Real GDP Chart */}
        <ChartCard
          title={PageData.charts[0].title}
          subtitle={PageData.charts[0].description}
          insights={PageData.charts[0].summary}
          sources={PageData.charts[0].sources}
        >
          <LineChart
            className='w-full md:w-1/2 h-56 md:h-72'
            labels={ImgData1.year}
            datasets={[
              {
                label: "Nominal GDP",
                data: ImgData1.nominal_gdp.map(w => w/1000000),
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
              {
                label: "Real GDP",
                data: ImgData1.real_gdp.map(w => w/1000000),
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
            ]}
            indexAxis='x'
            xlabel='Year'
            ylabel='Indian Rupee (millions)'
            legendDisplay={true}
            legendPosition='bottom'
          />
        </ChartCard>

        {/* CPI Index & Growth Chart */}
        <ChartCard
          title={PageData.charts[1].title}
          subtitle={PageData.charts[1].description}
          insights={PageData.charts[1].summary}
          sources={PageData.charts[1].sources}
          flip={true}
        >
          <DualLineChart
            className='w-full md:w-1/2 h-56 md:h-72'
            labels={ImgData2.year}
            datasets={[
              {
                label: "Real Growth",
                data: ImgData2.real_growth_pct,
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: "y"
              },
              {
                label: "Nominal Growth",
                data: ImgData2.nominal_growth_pct,
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: "y"
              },
              {
                label: "CPI Combined",
                data: ImgData2.cpi_combined,
                borderColor: "#b0b0b0",
                backgroundColor: "#d9d9d9",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
                yAxisID: "y1"
              },
            ]}
            indexAxis='x'
            xlabel='Year'
            ylabel='Growth %'
            ylabel2='CPI'
            legendDisplay={true}
            legendPosition='bottom'
          />
        </ChartCard>


        {/* Expenditure Chart */}
        <ChartCard
          title={PageData.charts[2].title}
          subtitle={PageData.charts[2].description}
          insights={PageData.charts[2].summary}
          sources={PageData.charts[2].sources}
        >
          <StackedAreaChart
            className="w-full md:w-1/2 h-56 md:h-72"
            labels={ImgData3.year}
            datasets={[
              {
                label: "PFCE",
                data: ImgData3.pfce_pct_gdp,
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.7)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "GFCE",
                data: ImgData3.gfce_pct_gdp,
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.7)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "GFCF",
                data: ImgData3.gfcf_pct_gdp,
                borderColor: "#2ca02c", // green
                backgroundColor: "rgba(44, 160, 44, 0.7)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "Net Exports",
                data: ImgData3.net_exports_pct_gdp,
                borderColor: "#d62728", // red
                backgroundColor: "rgba(214, 39, 40, 0.7)",
                fill: true,
                tension: 0.3,
              },
            ]}
            xlabel="Year"
            ylabel="% of GDP"
            legendDisplay={true}
            legendPosition="bottom"
          />
        </ChartCard>


        {/* Per Capita Income Chart */}
        <ChartCard
          title={PageData.charts[3].title}
          subtitle={PageData.charts[3].description}
          insights={PageData.charts[3].summary}
          sources={PageData.charts[3].sources}
          flip={true}
        >
          <LineChart
            className='w-full md:w-1/2 h-56 md:h-72'
            labels={ImgData4.year}
            datasets={[
              {
                label: "Nominal GDP",
                data: ImgData4.per_capita,
                borderColor: "#2ca02c", // green
                backgroundColor: "rgba(44, 160, 44, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
            ]}
            indexAxis='x'
            xlabel='Year'
            ylabel='Per Capita (₹)'
            legendDisplay={true}
            legendPosition='bottom'
          />
        </ChartCard>


        {/* Box Plot Chart */}
        <ChartCard
          title={PageData.charts[4].title}
          subtitle={PageData.charts[4].description}
          insights={PageData.charts[4].summary}
          sources={PageData.charts[4].sources}
        >
          <BoxPlotChart
            className="w-full md:w-1/2 h-56 md:h-72"
            xlabel="Growth Type"
            ylabel="Percentage (%)"
            labels={["Real Growth (%)", "Nominal Growth (%)"]}
            datasets={[
              {
                label: "Growth Distribution",
                data: [
                  ImgData5.real_growth_pct.filter(v => v !== null),
                  ImgData5.nominal_growth_pct.filter(v => v !== null),
                ],
                borderColor: "#d62728", // red
                backgroundColor: "rgba(214, 39, 40, 0.7)",
              },
            ]}
            legendPosition='bottom'
          />
        </ChartCard>

        <Description>
          {PageData.overall_insight}
        </Description>

        <Footer/>
      </div>
      )
}

export default EconomicOverview