import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/lalo.vargascruz//'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/lalo_vargas89'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/lalovargas30/?hl=es'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Eduardo Vargas</strong>
</footer>
}

export default Footer