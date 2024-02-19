import React from 'react'
import changeloRound from '../../../images/changelogRound.png'

const ChangeLog = () => {
  return (
    <div>
      <div className="changelogBG"></div>
      <div className='w-[40%] mx-auto flex items-center gap-4 rounded-[30px] shadow-lg my-8'>
        <img src={changeloRound}  />
        <h1 className='text-[#525C60] font-[400] text-lg'><strong className='text-primary font-[800] text-4xl'>V.1</strong> Initial Organick Webflow Template Release</h1>
      </div>
    </div>
  )
}

export default ChangeLog
