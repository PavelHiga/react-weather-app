import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'
import { useEffect } from 'react'
import Content from './Content'
import Start from './Start'
import Error from './Error'
import Loader from './Loader/Loader'

const App = () => {

    const API = '45401af1fb6d3902819f2157dbe96031'
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('')
    const [apiData, setApiData] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        let response = ''
        const data = async () => {
            try {
                city ? response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`) : ''
                setApiData(response.data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        data()
    }, [city])

    return (
        <div>
            <div className=" w-[450px] min-h-[450px] bg-white mx-auto my-32 rounded-xl">
                <div className="flex p-5 text-center justify-center">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        type="text"
                        placeholder='Enter location'
                        className='text-xl font-semibold text-gray-400 px-3 py-2 border-b-[1px]'
                    />
                    <button onClick={() => setCity(search) & setSearch('') & setError('')} className='ml-5'>
                        < BiSearch className='w-10 h-10 text-[#B3B5C9]' />
                    </button>
                </div>
                { }
                {error ? <Error /> : isLoading ? <Loader /> : apiData ? <Content data={apiData} /> : <Start />}
            </div>
        </div>
    )
}

export default App