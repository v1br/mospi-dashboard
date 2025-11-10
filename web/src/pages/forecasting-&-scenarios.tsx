import Description from '../components/shared/Description'
import Heading from '../components/shared/Heading'
// import type { Plot } from '../types/types'

const ForecastingAndScenarios = () => {

    // const plots: Plot[] = [
    //   {
    //     label: "Retained",
    //     data: [7, 8, 9, 12, 9],
    //     borderColor: "black",
    //     backgroundColor: "blue",
    //     type: "bar",
    //     order: 1,
    //   }
    // ];

    return (
      <div className='flex flex-col ml-72 mr-4 mt-4 h-fit'>

        <em className='text-secondary font-xs m-4'>
          Chapter 4
        </em>

        <Heading>
          Forecasting & Scenarios
        </Heading> 

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Description>
      </div>
      )
}

export default ForecastingAndScenarios