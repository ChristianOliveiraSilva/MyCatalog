
import { useState } from 'react'
import Card from './Card.js'

export default function App(props) {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'teste',
            description: 'Este é um belo produto',
            count: 5
        }, {}, {}, // just for tests
    ])
    const [layout, setLayout ] = useState(0)
    const className = layout == 0 ? 'grid' : 'flex'

    const toggleLayout = (value) => {
        setLayout(value)
    }

    return (
        <main>
            <header>
                <h3 className="title">MyCatalog</h3>

                <div className="options">
                    <button className={layout == 0 ? 'active' : ''} onClick={() => toggleLayout(0)}>Grid</button>
                    <button className={layout == 1 ? 'active' : ''} onClick={() => toggleLayout(1)}>Flex</button>
                </div>
            </header>
            <section id="content" className={className}>
                {
                    products.map((product) => (
                        <Card {...product} key={product.id} />
                    ))
                }
            </section>
            <footer>
                <p>Feito por Christian Oliveira</p>
            </footer>
        </main>
    )
}