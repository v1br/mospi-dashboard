import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import LineChart from '../components/interfaces/LineChart'
import StackedAreaChart from '../components/interfaces/StackedArea'
import ChartCard from '../components/shared/ChartCard'
import PageData from '../data/metadata/expenditure-composition.json'
import ImgData1 from '../data/values/stacked-sectoral.json'
import ImgData2 from '../data/values/line-chart-sectoral.json'

const ProductionComposition = () => {
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
          <StackedAreaChart
            className="w-full md:w-1/2 h-56 md:h-72"
            labels={ImgData1.year}
            datasets={[
              {
                label: "PFCE",
                data: ImgData1.agri_share_pct,
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.7)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "GFCE",
                data: ImgData1.ind_share_pct,
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.7)",
                fill: true,
                tension: 0.3,
              },
              {
                label: "GFCF",
                data: ImgData1.serv_share_pct,
                borderColor: "#2ca02c", // green
                backgroundColor: "rgba(44, 160, 44, 0.7)",
                fill: true,
                tension: 0.3,
              },
            ]}
            xlabel="Year"
            ylabel="% of total production volume (QI)"
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
          <LineChart
            className='w-full md:w-1/2 h-56 md:h-72'
            labels={ImgData2.year}
            datasets={[
              {
                label: "Agriculture",
                data: ImgData2.agri_growth_pct,
                borderColor: "#1f77b4", // blue
                backgroundColor: "rgba(31, 119, 180, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
              {
                label: "Industries",
                data: ImgData2.ind_growth_pct,
                borderColor: "#ff7f0e", // orange
                backgroundColor: "rgba(255, 127, 14, 0.7)",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
              {
                label: "Services",
                data: ImgData2.serv_growth_pct,
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
            ylabel='Indian Rupee (millions)'
            legendDisplay={true}
            legendPosition='bottom'
          />
        </ChartCard>


        <Description>
          {PageData.overall_insight}
        </Description>
      </div>
      )
}

export default ProductionComposition