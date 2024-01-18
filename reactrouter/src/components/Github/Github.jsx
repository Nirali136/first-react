import React, { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const githubData = useLoaderData()
    // const [githubData, setGithubData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Nirali136')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setGithubData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {githubData.followers}
      <img className=' bg-center' src={githubData.gists_url} alt="Github Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLodar= async () =>{
  const respose =await fetch('https://api.github.com/users/Nirali136')
  return respose.json()
}
