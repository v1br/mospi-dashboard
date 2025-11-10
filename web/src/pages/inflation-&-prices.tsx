import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import PageData from '../data/metadata/inflation-&-prices.json'

const InflationAndPrices = () => {

    return (
      <div className='flex flex-col mt-24 p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

        <em className='text-secondary font-xs m-4'>
          Chapter {PageData.page_id}
        </em>

        <Heading>
          {PageData.page_title}
        </Heading> 

        <Description>
          {PageData.page_description}
        </Description>

        <Description>
          {PageData.overall_insight}
        </Description>
      </div>
      )
}

export default InflationAndPrices