import ecoimage from '../../../images/ecofriendly.png'

const HomeEcofriendly = () => {
  return (
    <div className='flex items-center'>
      <div className='w-[50%] h-[100vh]'>
        <img src={ecoimage} className='w-full h-full'  />
      </div>
      <div className='w-[50%] flex flex-col gap-4 -ml-20 bg-white py-14 px-12 rounded-[30px]'>
        <p className='text-[#7EB693] text-2xl font-[400]'>Eco Friendly</p>
        <h1 className='text-[#274C5B] text-4xl font-[800]'>Econis is a Friendly Organic Store</h1>
        <span>
            <h1 className='text-[#274C5B] text-2xl font-[500]'>Start with Our Company First</h1>
            <p className='text-[#525C60] text-lg font-[400]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
        </span>
        <span>
            <h1 className='text-[#274C5B] text-2xl font-[500]'>Learn How to Grow Yourself</h1>
            <p className='text-[#525C60] text-lg font-[400]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
        </span>
        <span>
            <h1 className='text-[#274C5B] text-2xl font-[500]'>Farming Strategies of Today</h1>
            <p className='text-[#525C60] text-lg font-[400]'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
        </span>
      </div>
    </div>
  )
}

export default HomeEcofriendly
