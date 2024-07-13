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
                                <p className='card-text-heading'> <span>UI / UX Design:</span></p>
                                <p className='card-write-up'>Get professional courses and training on how to design mobile apps, <br /> business websites & event plans!!!
                                    <br />
                                    <br />
                                    Earn in dollars with UI/UX design skill which is estimated  grow fro <br />  USD 3.50 billion in 2023 to USD 32.95 billion by 2030</p>
                            </div>
                        </div>
                    </div>


                    {/* card 2 row 2 */}
                    <div className="card1 card2">
                        <div className="card">
                            <img src={DigitalImage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'> <span>Digital Marketing:</span></p>
                                <p className='card-write-up'>Learn how to Generate Cash with digital marketing to give your brand <br /> the perfect audience as a business owner and for personal career <br />development.
                                    <br />
                                    <br />
                                    <b>Digital marketing</b> is a skill that is highly sought for by Local and <br /> International companies. it is estimated to climb to a market valuation <br />of US$ 887.2 billion by the end of 2032</p>
                            </div>
                        </div>

                        {/* card two in column 1 */}
                        <div className="card">
                            <img src={Emageimage} alt="" />
                            <div className="card-text">
                                <p className='card-text-heading'>  <span>Data Analysis:;</span></p>
                                <p className='card-write-up'>Don’t be left out in the digital tech space with Data analysis. <br /> <br /> We give the best training to become the next data analyst in the tech <br /> space perfectly placed by professionals to achieve your goals.
                                    <br />
                                    <br />
                                   <b> Data analysis </b>is lucrative and is expected to reach $684.12 billion by 2030</p>
                            </div>
                        </div>
                    </div>
                    <div className='card5'>
                        <div className="card">
                            <img src={AiImage} alt="img" />
                            <div className="card-text">
                                <p className='card-text-heading'> <span>AI Integration </span> (Use of AI for businesses):</p>
                                <p className='card-write-up'>Learn how to use & Earn using AI for your businesses or individually for growth. Using AI resources is efficient, Effective & lucrative for businesses and personal career developers.


                                    <br />
                                    <br />
                                    The market for <b> AI technologies </b> is vast and is expected to grow well beyond that to <b> over 1.8 trillion U.S. dollars </b> by 2030.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default program
