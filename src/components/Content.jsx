import React from 'react'

const Content = ({ data }) => {
    return (
        <div>
            <div className="p-5 text-center justify-center">
                <h4 className="text-xl font-semibold text-gray-400 mb-6">
                    {data.name}
                </h4>
                <img className='w-52 h-52 mx-auto' src={`assets/${data.weather[0].main}.png`} alt="" />
                <h4 className="text-3xl font-bold text-gray-400 mt-8">
                    {data.weather[0].main}
                </h4>
            </div>
            <h1 className='text-[60px] text-gray-600 text-center mb-10'>
                {Math.round(data.main.temp * 10) / 10}°c
            </h1>
            <div className="flex w-10/12 mx-auto pb-14">
                <div className="flex items-center justify-center w-full">
                    <img className='w-14 h-14' src="/assets/icons/drop.svg" alt="" />
                    <div className="text-2xl ml-2 font-medium text-gray-600 text-center">
                        <div>{data.main.humidity}%</div>
                        <div className='text-base'>Humidity</div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <img className='w-16 h-16' src="/assets/icons/wind.svg" alt="" />
                    <div className="text-2xl ml-2 font-medium text-gray-600 text-center">
                        <div className="flex items-center">
                            <div>{Math.round(data.wind.speed * 10) / 10}</div>
                            <div className="text-base ml-1"> Km/H</div>
                        </div>
                        <div className='text-base'>Wind</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content