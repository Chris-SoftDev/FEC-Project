import { useContext } from "react";
import ReviewContext from "../../Context/ReviewContext";
import "./ShareMenu.css";

export default function ShareLink() {
  const { closeShareMenu, shareMenuRef } = useContext(ReviewContext);

  return (
    <div className="share-menu-cover-screen">
      <div className="share-container" ref={shareMenuRef}>
        <div className="share-header">
          <div id="share-menu-close-btn" onClick={closeShareMenu}>
            <button>
              <svg viewBox="0 0 32 32">
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="share-body">
          <div className="header-container">
            <div className="header">Share this place</div>
          </div>
          <div className="img-title-container">
            <div className="single-img-container">
              <img
                src="https://a0.muscache.com/pictures/563de9e7-dd5c-4389-a1ae-758f5c90f551.jpg"
                alt=""
              />
            </div>
            <div className="title-container">
              <div className="share-title">
                Mountaintop Getaway w/Stunning Views and Hot Tub
              </div>
            </div>
          </div>
          <div className="outer-buttons-container">
            <div className="btn-column">
            <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                    <div className="whatsApp-svg"> 
                      <svg viewBox="0 0 32 32">
                      <path d="M25 5a4 4 0 0 1 4 4v17a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V10a5 5 0 0 1 5-5h13zm0 2H12a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a2 2 0 0 0-2-2zm-3-6v2H11a6 6 0 0 0-5.996 5.775L5 9v13H3V9a8 8 0 0 1 7.75-7.996L11 1h11z"></path>
                      </svg>
                    </div>
                    <div className="whatsapp">Copy Link</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                    <div className="messages-svg"> 
                      <svg viewBox="0 0 32 32">
                        <defs>
                          <linearGradient x1="50.794%" y1="93.362%" x2="50.794%" y2="12.41%" id="imessagegradient">
                            <stop stopColor="#0CBD2A" offset="0%"></stop>
                            <stop stopColor="#5BF675" offset="100%"></stop>
                          </linearGradient>
                        </defs>
                        <g>
                          <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="url(#imessagegradient)">
                          </path>
                          <path d="M15.796 5.469c-6.404 0-11.595 4.324-11.595 9.658.005 3.39 2.143 6.528 5.633 8.27-.457 1.023-1.142 1.983-2.028 2.838 1.717-.3 3.329-.934 4.71-1.85 1.064.264 2.17.399 3.28.4 6.404 0 11.596-4.324 11.596-9.658S22.2 5.47 15.796 5.47z" fill="#FFF"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="whatsapp">Messages</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                    <div className="messenger-svg"> 
                        <svg viewBox="0 0 32 32">
                          <radialGradient id="a" cx="19.25%" cy="99.446619%" r="108.96%">
                            <stop offset="0" stop-color="#09f"></stop><stop offset=".6098" stop-color="#a033ff"></stop>
                            <stop offset=".9348" stop-color="#ff5280"></stop><stop offset="1" stop-color="#ff7061"></stop>
                          </radialGradient>
                          <g fill="none" transform="translate(4 4)">
                            <path d="m12 0c-6.759 0-12 4.95256076-12 11.6389677 0 3.4976898 1.434 6.5214217 3.768 8.6092365.195.1739846.315.4199627.321.6839393l.066 2.1358106c.021.6809396.723 1.1249002 1.347.8489247l2.382-1.0499069c.201-.089992.429-.1049907.642-.0479957 1.095.2999734 2.259.461959 3.474.461959 6.759 0 12-4.9525607 12-11.6389677 0-6.68640701-5.241-11.6419675-12-11.6419675z" fill="url(#a)"></path>
                            <path d="m4.794 15.0436658 3.525-5.59150411c.561-.89092099 1.761-1.10990157 2.604-.47995744l2.805 2.10281355c.258.1919829.612.1919829.867-.0029998l3.786-2.87374511c.504-.38396594 1.164.22198032.828.75893269l-3.528 5.58850432c-.561.890921-1.761 1.1099016-2.604.4799575l-2.805-2.1028135c-.258-.191983-.612-.191983-.867.0029997l-3.786 2.8737451c-.504.383966-1.164-.2189805-.825-.7559329z" fill="#fff"></path>
                          </g>
                        </svg>
                    </div>
                    <div className="whatsapp">Messenger</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                    <div className="whatsApp-svg"> 
                      <svg viewBox="0 0 32 32">
                        <path fill="#1DA1F2" d="M0 0H32V32H0z"></path>
                        <path d="M18.664 7.985a4.5 4.5 0 0 0-2.289 4.89c-3.5-.188-6.875-1.813-9.063-4.625a4.25 4.25 0 0 0 1.375 5.875c-.687 0-1.374-.125-2-.438.063 2.063 1.5 3.876 3.5 4.313-.624.188-1.312.188-2 .063.626 1.812 2.313 3.062 4.188 3.125-1.813 1.5-4.25 2.187-6.563 1.812a12.438 12.438 0 0 0 19.313-11.188c.875-.624 1.625-1.374 2.188-2.312-.75.375-1.625.625-2.5.75.937-.563 1.625-1.438 2-2.5-.875.5-1.813.875-2.813 1.063a4.5 4.5 0 0 0-5.336-.828z" fill="#FFF"></path>
                      </svg>
                    </div>
                    <div className="whatsapp">Twitter</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="btn-column2">
            <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                  <div className="email-svg"> 
                      <svg viewBox="0 0 32 32">
                       <g fill="none">
                          <rect height="24" rx="4" width="28" x="2" y="4"></rect>
                          <path d="m3 6 10.416231 8.813734c1.4913834 1.2619398 3.6761546 1.2619398 5.167538 0l10.416231-8.813734"></path>
                      </g>
                      </svg>
                    </div>
                    <div className="whatsapp">Email</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                  <div className="share-svg-container">
                    <div className="whatsApp-svg"> 
                      <svg viewBox="0 0 32 32">
                        <path d="m32 0v32h-32v-32z" fill="#25d366"></path>
                        <path d="m4 28 1.695-6.163a11.824 11.824 0 0 1 -1.595-5.946c.003-6.556 5.364-11.891 11.95-11.891a11.903 11.903 0 0 1 8.453 3.488 11.794 11.794 0 0 1 3.497 8.414c-.003 6.557-5.363 11.892-11.95 11.892-2 0-3.97-.5-5.715-1.448zm6.628-3.807c1.684.995 3.292 1.591 5.418 1.592 5.474 0 9.933-4.434 9.936-9.885.002-5.462-4.436-9.89-9.928-9.892-5.478 0-9.934 4.434-9.936 9.884 0 2.225.654 3.891 1.754 5.634l-1.002 3.648 3.76-.98h-.002zm11.364-5.518c-.074-.123-.272-.196-.57-.344-.296-.148-1.754-.863-2.027-.96-.271-.1-.469-.149-.667.147-.198.295-.767.96-.94 1.157s-.346.222-.643.074c-.296-.148-1.253-.46-2.386-1.466-.881-.783-1.477-1.75-1.65-2.045s-.018-.455.13-.602c.134-.133.296-.345.445-.518.15-.17.2-.294.3-.492.098-.197.05-.37-.025-.518-.075-.147-.668-1.6-.915-2.19-.241-.577-.486-.499-.668-.508l-.569-.01a1.09 1.09 0 0 0 -.79.37c-.272.296-1.039 1.01-1.039 2.463s1.064 2.857 1.211 3.054c.15.197 2.092 3.18 5.068 4.458.708.304 1.26.486 1.69.622.712.224 1.359.193 1.87.117.57-.084 1.755-.714 2.002-1.404.248-.69.248-1.28.173-1.405z" fill="#FFF"></path>
                      </svg>
                    </div>
                    <div className="whatsapp">WhatsApp</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                 <div className="share-svg-container">     
                 <div className="facebook-svg"> 
                      <svg viewBox="0 0 32 32">
                      <path fill="#1877F2" d="M32 0v32H0V0z"></path>
                      <path d="M22.938 16H18.5v-3.001c0-1.266.62-2.499 2.607-2.499h2.018V6.562s-1.831-.312-3.582-.312c-3.654 0-6.043 2.215-6.043 6.225V16H9.436v4.625H13.5V32h5V20.625h3.727l.71-4.625z" fill="#FFF"></path>
                      </svg>
                    </div>
                  <div className="facebook">Facebook</div>
                  </div>
                </button>
              </div>
              <div className="share-btn">
                <button className="btn">
                <div className="share-svg-container">
                    <div className="whatsApp-svg"> 
                      <svg viewBox="0 0 32 32">
                      <path d="M18.346 4.19l1.923.55-6.615 23.07-1.923-.55zm4.215 1.956l8.293 8.293.116.128a2 2 0 0 1-.116 2.7l-8.293 8.294-1.415-1.415 8.293-8.292-8.293-8.293zm-13.122 0l1.415 1.415-8.293 8.293 8.293 8.292-1.415 1.415-8.293-8.293a2 2 0 0 1-.116-2.701l.116-.128L9.44 6.146z"></path>
                      </svg>
                    </div>
                    <div className="whatsapp">Embed</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


