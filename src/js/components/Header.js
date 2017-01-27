import React from "react"
import { observer } from "mobx-react"


export default class Header extends React.Component {


  render() {
    return <div>
    <div className="off-canvas-wrap">
      <div className="inner-wrap">
        <header className="main-header">
          <div className="">
            <div className="container">
            <div className="row spaceUp">
              <div className="col-xs-5 col-sm-3 col-md-3"><img src="img/logoWhite.png" /></div>
              <div className="col-xs-7 col-sm-9 col-md-9 pull-right">
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>                      
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                      <ul className="nav navbar-nav pull-right">
                        <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Nosso Acervo</a></li>
                        <li><a href="#">Contato</a></li>
                      </ul>

                    </div>
                  </div>
                </nav>
              </div>
            </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
  }
}
