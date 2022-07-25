import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleData } from '../Server/server';

const Details = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [activeButton, setActiveButton] = useState(false)

  const fetchData = async () => {
    const response = await getSingleData(id)
    setData([response])
  }

  useEffect(() => {
    fetchData()
  }, [id])
  console.log(data);

  return (
    <div className='mt-40'>
      {
        data?.map(item => (
          <div key={item.id} className="flex justify-between">
            {/*image and name div container start  */}
            <div className='flex flex-col gap-10 flex-1'>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.sourceName} />
            </div>
            {/* image and name div container end  */}


            {/* button and text container start */}
            <div className='flex flex-col gap-24 flex-1'>
              {/* button start */}
              <div>
                <button>Instructions</button>
                <button>Ingredients</button>
              </div>
              {/* button end */}

              {/* text start  */}
              {
                activeButton ? (<ul>
                  {item.extendedIngredients.map(ing => (
                    <li key={ing.id}>{ing.original}</li>
                  ))}
                </ul>) : (
                  <div>
                    <div>{item.summary}</div>
                    <div>{item.instructions}</div>

                  </div>
                )}
              {/* text end  */}

            </div>
            {/* button and text container end */}
          </div>
        ))
      }
    </div>
  )
}

export default Details