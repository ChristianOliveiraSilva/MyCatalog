

export default function Card(props) {

    const title = props.title || 'MyCatalog - header'
    const description = props.description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente omnis dicta vero ipsam atque quae, suscipit reprehenderit non nisi delectus.'
    const count = props.count || 0

    return (
        <div className="card">
            <header>{title}</header>
            <section className="content">
                {description}
            </section>
            <footer>
                { count > 0 ? 
                    <button className="btn-buy">Produto disponível</button>
                    :
                    <p><small>Produto fora da loja</small></p>
                }
            </footer>
        </div>
    )
}