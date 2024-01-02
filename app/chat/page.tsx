import { Suspense } from 'react';
import Chat from './Chat';
import Loading from './Loading';

type Props = {}
function page({}: Props) {
    
  return (
    <Suspense fallback={<Loading />}>
      <Chat />
    </Suspense>
  )
}

export default page