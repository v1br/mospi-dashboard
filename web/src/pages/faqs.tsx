import Heading from '../components/shared/Heading'
import Description from '../components/shared/Description'
import Footer from '../components/shared/Footer'
import PageData from '../data/metadata/faqs.json'

const FAQs = () => {
    return (
        <div className='flex flex-col mt-24 p-2 md:p-0 md:mt-4 md:ml-72 md:mr-4 h-fit'>

            <em className='text-secondary font-xs m-4'>
                Chapter 4
            </em>

            <Heading>
                FAQs
            </Heading> 

            <Description>
                <p>
                {PageData.summary}
                </p>
            </Description>

            {/* <div className="max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"> */}
                <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                {PageData.faqs.map((faq, i) => (
                    <div key={i} className="w-full lg:w-1/2 px-4 py-2">
                    <details className="mb-4 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-150">
                        <summary className="cursor-pointer font-semibold bg-primary text-xs text-secondary2 rounded-t-md py-2 px-4 select-none">
                        {faq.q}
                        </summary>
                        <div className="py-3 px-4 text-secondary text-xs leading-relaxed bg-white rounded-b-md border-t border-gray-200">
                        {faq.a}
                        </div>
                    </details>
                    </div>
                ))}
                </div>
            {/* </div> */}

            <Footer/>
    </div>
    )
}

export default FAQs