import { fetchPostsRQ } from '../api/API';
import { useQuery } from '@tanstack/react-query';

const FetchRQ = () => {

  const { data } = useQuery({
    queryKey: ['post'], // work like useState
    queryFn: fetchPostsRQ, // work like useEffect
  }
  )

  // if (loading) {
  //   return (<div className="loader"></div>)
  // }

  // if (error) {
  //   return <div><h1>{error.message}</h1></div>
  // }

  return (
    <div>
      <ul className='section-accordion'>
        {
          data?.map((cusElem) => {
            const { id, title, body } = cusElem;
            return (
              <li key={id}>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FetchRQ