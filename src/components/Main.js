import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Hi! My name is Miles Benovic and I am a full stack developer. I graduated from Texas State University in San Marcos in August of 2015 with a degree in Political Science. I'm a musician, avid reader, gamer, and love to learn new things! By the way, check out my <a href="https://github.com/Ehomba" target="_blank">awesome work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <div><p>You can check out my resume <a href="https://docs.google.com/document/d/1q88ZOvw_XaGQh0hxkpMKf-KipHXqfrFI_Ba6m9rF08Q/edit?usp=sharing" target="_blank">here.</a></p></div>
          <div style="display:flex">
          <div class="work">
            <iframe src="https://giphy.com/embed/7wwUXU4nsMI80" width="100" height="100"></iframe><p><a href="https://giphy.com/gifs/knight-7wwUXU4nsMI80"></a></p>

            <h3><a href="https://ehomba.github.io/unit-4-game/" target="_blank">RPG Game</a><br/><a href="https://github.com/Ehomba/unit-4-game" target="_blank">Github Code</a></h3>
          </div>
          <div class="work">
            <img src="https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/Small-shakin-it.gif/revision/latest?cb=20121210211519" alt="Smiley face" height="42" width="42"></img>

            <h3> <a href="https://ehomba.github.io/gifTastic/" target="_blank"> GifTastic </a><br/><a href="https://github.com/Ehomba/gifTastic" target="_blank">Github Code</a></h3>
          </div>
          <div class="work">
            <iframe src='https://gfycat.com/ifr/ShadyUnawareHairstreak' width='100' height='100'></iframe><p> <a href="https://gfycat.com/gifs/detail/ShadyUnawareHairstreak"></a></p>

            <h3> <a href="https://ehomba.github.io/trainTime/" target="_blank"> Train Time </a> <br/><a href="https://github.com/Ehomba/trainTime" target="_blank">Github Code</a> </h3>
          </div>
          </div>
          {close}
        </article>

                      <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                        <h2 className="major">About</h2>
                        <span className="image main"><img src={pic03} alt="" /></span>
                        <p>I've been working in Customer Service and Technical Support for over 10 years for multiple companies. I've worked Technical Support for companies such as Google and Apple, and worked Sales/Customer support for companies like CenturyLink and Progressive Insurance.</p>
                        <p>Graduated from UT Full-Stack developer camp in October 2018 where we worked on multiple large projects and learned multiple languages such as JavaScript, Jquery, MySql, MongoDB, ReactJS and more. I am always expanding my programming language skills and working on new projects all the time!</p>
                        {close}
                      </article>

                      <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
                        <h2 className="major">Contact</h2>
                        <form method="post" name="contact" action="mailto:milesbenovic@gmail.com">
                          <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                          </div>
                          <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                          </div>
                          <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4"></textarea>
                          </div>
                          <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                            <li><input type="reset" value="Reset" /></li>
                          </ul>
                        </form>
                        <ul className="icons">
                          <li><a href="https://github.com/Ehomba" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a>GitHub</li>
                        </ul>
                        <a><span>Milesbenovic@gmail.com</span></a>
                        {close}
                      </article>

      </div>
                    )
                  }
                }
                
Main.propTypes = {
                      route: PropTypes.object,
                    article: PropTypes.string,
                    articleTimeout: PropTypes.bool,
                    onCloseArticle: PropTypes.func,
                    timeout: PropTypes.bool
                  }
                  
export default Main