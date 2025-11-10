import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
import PageData from '../data/metadata/macro-stability.json'

const MacroStability = () => {

    return (
      <div className='flex flex-col mt-24 p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

        <em className='text-secondary font-xs m-4'>
          Chapter {PageData.page_id}·&nbsp;
          <a href="https://github.com/v1br" target='_blank' rel='noopener noreferrer' className='hover:underline text-blue-600 visited:text-purple-600'>Refer Notebook ☍</a>
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

export default MacroStability