function SinglePage({ id }) {
    return (<>{id}</>)
}

SinglePage.getInitialProps = (payload) => {
    const { query } = payload
    return { ...query }
}

export default SinglePage