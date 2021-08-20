import React from 'react'
import './Home.css'
import photo from '../../Image/photo.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home__info">
                <h4>Pythonda dasturlash asoslari</h4>
                <p>Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal qo‘llanma hisoblanadi.
                    Kitobning har bir bo‘limi uchun maxsus video darslar yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish mumkin.
                </p>
                <button className="book">Bururtma berish</button>
            </div>
            <div className="image">
                <div className="picture"></div>
                <img src={photo} alt="photo" className="photo" />
            </div>

        </div>
    )
}

export default Home
