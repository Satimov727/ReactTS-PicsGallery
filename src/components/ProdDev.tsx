import React, { useState } from 'react';
import { IProduct } from '../PicsModels';

interface PicsProps {
  product: IProduct
}

export function ProdDev({ product }: PicsProps) {

  const [clickEvent, setClickEvent] = useState(false)

  const btnChangeStyle = clickEvent ? 'bg-orange-600' : 'bg-purple-600'

  const btnChanges = ['py-2 px-4 border', btnChangeStyle]
  
  return (
    <div className='border py-2 px-4 flex flex-col items-center mb-10 rounded'>
      <img src={product.image} />
      
      <p style={{color: 'crimson'}}>{product.title}</p>

      <p className='font-bold'>{product.price}</p>

      <button
        className={btnChanges.join(' ')}

        onClick={() => setClickEvent(prev => !prev)}
      >
        {clickEvent ? 'Hide' : 'About'}
      </button>

      {clickEvent && <div>

        <p>{product.description}</p>

        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>

      </div>}
    </div>
  )
}