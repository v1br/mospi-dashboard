import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import Footer from '../components/shared/Footer'
import ForecastLineChart from '../components/interfaces/ForecastLineChart'
import ScatterPlotChart from '../components/interfaces/ScatterPlotChart'
import CategoricalTimelineChart from '../components/interfaces/CategoricalTimelineChart'
import ChartCard from '../components/shared/ChartCard'
import PageData from '../data/metadata/inflation-&-prices.json'
import ImgData1 from '../data/values/forecast-deflator.json'
import ImgData2 from '../data/values/timeline-inflation.json'
import ImgData3 from '../data/values/scatter-inflation.json'

const ProductionComposition = () => {
    const forecastStartIndex = 12;
    return (
      <div className='flex flex-col mt-24 p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

        <em className='text-secondary font-xs m-4'>
          Chapter {PageData.page_id} ·&nbsp;
            <a href="https://github.com/v1br" target='_blank' rel='noopener noreferrer' className='hover:underline text-blue-600 visited:text-purple-600'>Refer Notebook ☍</a>
        </em>

        <Heading>
          {PageData.page_title}
        </Heading> 

        <Description>
          {PageData.page_description}
        </Description>

        <ChartCard
          title={PageData.charts[0].title}
          subtitle={PageData.charts[0].description}
          insights={PageData.charts[0].summary}
          sources={PageData.charts[0].sources}
        >
          <ForecastLineChart
            className="w-full md:w-1/2 h-56 md:h-72"
            labels={ImgData1.year}
            datasets={[
              // --- Actual Data (solid line) ---
              {
                label: "Actual GDP Deflator",
                data: ImgData1.actual_index.map(w => w/1000000),
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.4)",
                isForecast: false,
              },

              // --- Forecast Data (dashed line) ---
              {
                label: "Forecast (Prophet)",
                data: ImgData1.forecast_index.map(w => w/1000000),
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.4)",
                isForecast: true,
              },

              // --- Lower Bound (optional, dashed gray) ---
              {
                label: "Forecast LB",
                data: ImgData1.forecast_lower.map(w => w/1000000),
                borderColor: "rgba(150,150,150,0.8)",
                backgroundColor: "rgba(200,200,200,0.3)",
                isForecast: true,
              },

              // --- Upper Bound (optional, dashed gray) ---
              {
                label: "Forecast UB",
                data: ImgData1.forecast_upper.map(w => w/1000000),
                borderColor: "rgba(150,150,150,0.8)",
                backgroundColor: "rgba(200,200,200,0.3)",
                isForecast: true,
              },
            ]}
            forecastStartIndex={forecastStartIndex}
            xlabel="Year"
            ylabel="GDP Deflator (Index)"
            legendDisplay={true}
            legendPosition="bottom"
          />
        </ChartCard>

        <ChartCard
          title={PageData.charts[1].title}
          subtitle={PageData.charts[1].description}
          insights={PageData.charts[1].summary}
          sources={PageData.charts[1].sources}
          flip={true}
        >
          <CategoricalTimelineChart
            className="w-full md:w-1/2 h-56 md:h-72"
            labels={ImgData2.year}
            values={ImgData2.deflator_yoy_pct}
            categories={ImgData2.regime}
            xlabel="Year"
            ylabel="Deflator YoY %"
            legendDisplay={true}
            legendPosition="right"
          />
        </ChartCard>

        <ChartCard
          title={PageData.charts[2].title}
          subtitle={PageData.charts[2].description}
          insights={PageData.charts[2].summary}
          sources={PageData.charts[2].sources}
        >
          <ScatterPlotChart
            className="w-full md:w-1/2 h-56 md:h-72"
            xlabel="PFCE YoY %"
            ylabel="GFCF YoY %"
            legendDisplay={true}
            legendPosition="bottom"
            datasets={[
              {
                label: "Low Cluster",
                data: ImgData3.low,
                borderColor: "rgba(31, 119, 180, 1)",        // blue
                backgroundColor: "rgba(31, 119, 180, 0.6)",
                pointRadius: 5,
              },
              {
                label: "Moderate Cluster",
                data: ImgData3.moderate,
                borderColor: "rgba(255, 127, 14, 1)",        // orange
                backgroundColor: "rgba(255, 127, 14, 0.6)",
                pointRadius: 5,
              },
              {
                label: "High Cluster",
                data: ImgData3.high,
                borderColor: "rgba(44, 160, 44, 1)",         // green
                backgroundColor: "rgba(44, 160, 44, 0.6)",
                pointRadius: 6,
              },
            ]}
          />
        </ChartCard>

        <Description>
          {PageData.overall_insight}
        </Description>

        <Footer/>
      </div>
      )
}

export default ProductionComposition