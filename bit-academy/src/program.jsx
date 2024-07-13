import React from 'react'
import CardImage from './img/card1.png'
import UiImage from './img/ui.png'
import DigitalImage from './img/digital.png'
import Emageimage from './img/e.png'
import AiImage from './img/ai.png'
function program() {
    return (
        <div>
            <div className="program-container" id='#home'>
                <div className="program">
                    <div className='program-border'>
                        <h1>Program</h1>
                    </div>

                </div>
                <p className='bold-text'>We provide the best skill training programs with valuable learning and networking opportunities in Tech & business. <br />  The Programs are: </p>


                <div className="cards">
                    <div className="card1">
                        <div className="card">
                            <img src={CardImage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'> Simple flyer design <span>(Graphic <br /> design);</span></p>
                                <p className='card-write-up'>Make more money through Graphic design by creating simple flyer, <br /> banner designs as a business owner or a private individual.
                                    <br />
                                    <br />
                                    Graphic design industry is estimated to be USD 78.25 billion by 2030,</p>
                            </div>
                        </div>

                        {/* card two in column 1 */}
                        <div className="card">
                            <img src={UiImage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'> Simple flyer design <span>(Graphic <br /> design);</span></p>
                                <p className='card-write-up'>Make more money through Graphic design by creating simple flyer, <br /> banner designs as a business owner or a private individual.
                                    <br />
                                    <br />
                                    Graphic design industry is estimated to be USD 78.25 billion by 2030,</p>
                            </div>
                        </div>
                    </div>


                    {/* card 2 row 2 */}
                    <div className="card1 card2">
                        <div className="card">
                            <img src={DigitalImage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'> Simple flyer design <span>(Graphic <br /> design);</span></p>
                                <p className='card-write-up'>Make more money through Graphic design by creating simple flyer, <br /> banner designs as a business owner or a private individual.
                                    <br />
                                    <br />
                                    Graphic design industry is estimated to be USD 78.25 billion by 2030,</p>
                            </div>
                        </div>

                        {/* card two in column 1 */}
                        <div className="card">
                            <img src={Emageimage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'> Simple flyer design <span>(Graphic <br /> design);</span></p>
                                <p className='card-write-up'>Make more money through Graphic design by creating simple flyer, <br /> banner designs as a business owner or a private individual.
                                    <br />
                                    <br />
                                    Graphic design industry is estimated to be USD 78.25 billion by 2030,</p>
                            </div>
                        </div>
                    </div>
                    <div className='card5'>
                        <div className="card">
                            <img src={AiImage} alt="img" />
                            <div className="card-text">
                                <p className='card-text-heading'> Simple flyer design <span>(Graphic <br /> design);</span></p>
                                <p className='card-write-up'>Make more money through Graphic design by creating simple flyer, <br /> banner designs as a business owner or a private individual.
                                    <br />
                                    <br />
                                    Graphic design industry is estimated to be USD 78.25 billion by 2030,</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default program
