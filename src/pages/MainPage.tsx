import { LoadText } from '../components/LoadText';
import { ProdDev } from '../components/ProdDev';
import { pics } from '../data/PicsInfo';
import { useLoader } from '../hooks/loadPics';
import { ErrorShow } from '../components/ErrorShow'

export function MainPage() {

  const {loading, error} = useLoader()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <LoadText />}
      
      {error && <ErrorShow error={error} />}
      
      {pics.map(product => <ProdDev product={product} key={product.id} />)}

      <button className='absolute px-2 right-5 rounded-full bg-teal-600 text-white text-1xl'>It doesn't do anything</button>
    </div>
  );
}