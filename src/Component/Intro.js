import React from 'react'

const Intro = () => {
  return (
    <>
      <section class="text-gray-600 pb-20 body-font">
        <div class="container mx-auto flex px-5 py-0 md:flex-row flex-col items-center">
          <div className="wrap">
            <div className='intro'>
              <div className="fix">
                <h3 className="hey">Hello, my name is</h3>
                <h1>Bhoopendra singh</h1>
              </div>
            </div>
            <div className="wrapper">
              <div className="static-txt">I'm a</div>
              <ul className="dynamic-txts">
                <li><span>Architect</span></li>
                <li><span>Designer</span></li>
                <li><span>Developer</span></li>
                <li><span>Trader</span></li>
              </ul>

            </div>
          </div>
        </div></section>
    </>
  )
}

export default Intro