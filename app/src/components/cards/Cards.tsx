import { Link } from 'react-router-dom'
import './Cards.css'
import { Heart, Camera } from '../Icons'

interface Item {
  id: number
  image: string
  name: string
  like_count: number
  price: number
  is_sold_out: boolean
}

export function Cards ({ items }: { items: Item[] }): JSX.Element {
  return (
    <>
      <div className="cards-container">
        <div className="cards">
          {items.map((item) => (
            <div key={item.id} className="card">
              <Link style={{ textDecoration: 'none' }} to={`/item/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <div className="card-infos">
                  <div className="card-title">
                    <p>{item.name}</p>
                  </div>
                  <div className="card-details">
                    <p className="card-price">
                      ¥{item.price.toLocaleString('en-US')}
                    </p>

                    {item.like_count > 0 && (
                      <p>
                        <Heart /> {item.like_count}
                      </p>
                    )}
                  </div>
                </div>
                {item.is_sold_out && (
                  <>
                    <div className="sold-color"></div>
                    <div className="sold-text">SOLD</div>
                  </>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="list-item">
        <p>出品</p>
        <Camera />
      </div>
    </>
  )
}
