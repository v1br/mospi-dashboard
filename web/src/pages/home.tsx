import Heading from '../components/shared/Heading'
import Description from '../components/shared/Description'
import Footer from '../components/shared/Footer'
import Tag from '../components/shared/Tag'

const Home = () => {
    return (
        <div className='flex flex-col mt-24 md:p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

          <em className='text-secondary font-xs m-4'>
            Project-1 · November 12, 2025 ·&nbsp;
            <a href="https://github.com/v1br/mospi-dashboard" target='_blank' rel='noopener noreferrer' className='hover:underline text-blue-600 visited:text-purple-600'>View Repository ☍</a>
          </em>

          <Heading>
            Macroeconomic Analysis<br/>
            of Indian Economy<br/>
            using MoSPI Survey Data
          </Heading> 

          {/* Tags */}
          <div className='w-fit ml-4 mt-6 flex flex-row items-center justify-center gap-1 text-xs font-medium text-secondary'>
            <Tag to='https://github.com/Samarthya21'>
                <em>Samarthya Alok 📚</em>
            </Tag>
            ●
            <Tag to='https://github.com/AbhinnV04'>
                <em>Abhinn Verma 📊</em>
            </Tag>
            ●
            <Tag to='https://github.com/v1br'>
                <em>Vibhor Agrawal 🖥️</em>
            </Tag>
          </div>

          <Description>

            {/* Abstract */}
            <p>
              This project provides an interactive analytical dashboard built using verified datasets published by the Ministry of Statistics and Programme Implementation (MoSPI). It aims to make official macroeconomic information more accessible and interpretable to students, researchers, policymakers, and the general public.
            </p>
            <p>
              Through the integration of structured data analytics and a natural language assistant, users can explore national economic indicators such as GDP, inflation, consumption, and investment patterns, and receive concise, AI-driven explanations directly grounded in official data.
            </p>

            {/* Key Features */}
            <p>
              <strong className='font-bold text-lg'>Key Features</strong>
            </p>
            <dl className='relative -top-2 left-4'>
              <dt>
                <strong className='font-semibold'>✦ Interactive Visualization:</strong>
              </dt>
              <dd className='ml-8 mb-4 text-xs'>
                View GDP growth, inflation, and expenditure composition through dynamic charts and time-series plots.
              </dd>
              <dt>
                <strong className='font-semibold'>✦ Conversational Assistant:</strong>
              </dt>
              <dd className='ml-8 mb-4 text-xs'>
                Ask data-specific questions in plain language — answers are grounded in verified MoSPI datasets.
              </dd>
              <dt>
                <strong className='font-semibold'>✦ Forecasting & Scenario Analysis:</strong>
              </dt>
              <dd className='ml-8 mb-4 text-xs'>
                Explore projected trends for key indicators using ARIMA, SARIMA, and Prophet models.
              </dd>
              <dt>
                <strong className='font-semibold'>✦ Transparency and Accessibility:</strong>
              </dt>
              <dd className='ml-8 mb-4 text-xs'>
                Every statistic is drawn from authentic government data, ensuring factual reliability and traceability.
              </dd>
            </dl>
          </Description>

          <Footer/>
        </div>
      )
}

export default Home