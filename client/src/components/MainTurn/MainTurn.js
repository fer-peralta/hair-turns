import './MainTurn.css'
const MainTurn = () => {
    return (
        <> <h1 style={{ textAlign: 'center' }}>Welcome to Hair Turns!</h1>
            <div className='contenedor'>
                <h2 style={{ textAlign: 'center' }}>Booking your Turn</h2>

                <div className='contenedorForm'>
                    <form className="Form">
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Dni"
                                name="DNI" />
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Nombre"
                                name="Nombre" />
                        </div>
                        <div className="input">
                            <input
                                type="text"
                                placeholder="Celular"
                                name="celular" />
                        </div>
                        <div className="input">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email" />
                        </div>


                    </form>
                    <button className='btn' style={{ alignItems: 'center' }}>Confirm</button>
                </div>
            </div>
        </>
    )
}
export default MainTurn