import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../Context/Context'
import {getCategoryData} from "../Server/server"

const Category = () => {
    const [categoryData,setCategoryData] = useState(null)
    const {category} = useContext(MainContext)
    const {name} = useParams()

    const fetchData = async () =>{
      const responese = await getCategoryData(category)
      setCategoryData(responese)
    }

    useEffect(()=>{
       fetchData()
    },[name])

    console.log(category,"cat");
    console.log(categoryData,"data");

  return (
    <div>
        test
    </div>
  )
}

export default Category