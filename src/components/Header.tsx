interface Genre {
    genreTitle: string
}

export function Header(props: Genre) {
    return (
        <header>
            <span className="category">Categoria: <span>{props.genreTitle}</span></span>
        </header>
    )
}