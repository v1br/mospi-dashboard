import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import LineChart from '../components/interfaces/LineChart'
import ChartCard from '../components/shared/ChartCard'
import PageData from '../data/metadata/economic-overview.json'
import ImgData1 from '../data/values/line-chart-gdp.json'

const EconomicOverview = () => {
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
          <LineChart
            className='w-full md:w-1/2 h-60'
            labels={ImgData1.year}
            datasets={[
              {
                label: "Nominal GDP",
                data: ImgData1.nominal_gdp.map(w => w/1000000),
                borderColor: "#020202",
                backgroundColor: "#343434",
                tension: 0.3,
                fill: false,
                pointRadius: 4,
                pointHoverRadius: 6,
              },
              {
                label: "Real GDP",
                data: ImgData1.real_gdp.map(w => w/1000000),
                borderColor: "#020202",
                backgroundColor: "#343434",
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
            legendPosition='top'
          />
        </ChartCard>

        <Description>
          {PageData.overall_insight}
        </Description>
      </div>
      )
}

export default EconomicOverview