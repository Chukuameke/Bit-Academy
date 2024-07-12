import React from 'react'
import Image from './img/bit-img.png'
import Stars from './img/stars.png'

function hero() {
    return (
        <div className='background'>
            <div className="hero-container">
                <div className="hero-img">
                    <img src={Image} alt="img" />
                </div>
                <div className="hero-text">
                    <h1>
                        Earn Steady Income as you <br /> Level up & Learn High Paying <br /> Digital Skills
                    </h1>
                    <p>Earn good income as you acquire digital skills like Graphic design, UI/UX <br /> design, data analysis e.t.c from detailed professional classes to develop your <br /> career and grow your business. <br /> <br />We are keen on giving out these skills of value to private  individuals for their <br />personal career development and business for growth.</p>
                    <img src={Stars} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default hero
