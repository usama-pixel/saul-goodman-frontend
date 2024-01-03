import Card from '../common/Card'
import axios from 'axios';
import { envVariable } from '@/utils/envVariable';
import Pagination from '../common/Pagination';

type Props = {}

async function Featured({}: Props) {
    // const data = axios.get('/users?laywer=true')
    const res = await axios.get(envVariable.baseUrl+'/auth/users?lawyer=true')
    const data = res.data.map((d: any) => ({id: d.id, email: d.email, description: 'dummy', imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'}))
    console.log({data})
    // .then(res => console.log({res: res.data}))
    // .catch(err => console.log({err}))
    // {
    //     id: 1,
    //     title: 'MyTitle',
    //     description: 'Hello world',
    //     imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    // },
    // useEffect(() => {
    //     axios.get('/')
    // }, [])
    // const data = [
    //     {
    //         email: 'MyTitle',
    //         description: 'Hello world',
    //         imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    //     },
    //     {
    //         email: 'Tiot',
    //         description: 'Yoyo',
    //         imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    //     },
    //     {
    //         email: 'Tiot',
    //         description: 'Yoyo',
    //         imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    //     },
    //     {
    //         email: 'Tiot',
    //         description: 'Yoyo',
    //         imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    //     },
    //     {
    //         email: 'Tiot',
    //         description: 'Yoyo',
    //         imgUrl: 'https://miro.medium.com/v2/resize:fit:1400/1*rKl56ixsC55cMAsO2aQhGQ@2x.jpeg'
    //     },
    // ]
  return (
    <div>
        <p className='text-2xl font-medium mb-5'>Our Top Lawyers</p>
        <div className='flex flex-wrap justify-center'>
            {data.map((item: any, index: number) => (
                <Card userId={item.id} key={index} title={item.email} description={item.description} imgUrl={item.imgUrl} />
            ))}
        </div>
        <div style={{width: 'fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
            <Pagination />
        </div>
    </div>
  )
}

export default Featured