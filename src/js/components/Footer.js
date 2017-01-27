import React from "react"
import { observer } from "mobx-react"


export default class Footer extends React.Component {


  render() {
    return <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 col-sm-push-3 col-md-push-3">
              <h6>Desenvolvido por Bruno Portela</h6>
              <p>Realizado com tecnologias OpenSource:</p>
              <img src="img/react.png" title="REACT" />
              <img src="img/node.png" title="node.js" />
              <img src="img/mobx.png" title="MobX for REACT" />
              <img src="img/mongo.png" title="MongoDB" />
              <img src="img/webpack.png" title="Webpack" />
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3 col-sm-pull-5 col-md-pull-5 sm-margin-top-40">
            <h6>Cachaças de Calambau</h6>
              <ul className="list-unstyled">
                <li className="leaf">Saiba Mais</li>
                <li className="leaf">Sobre Nós</li>
                <li className="leaf">Nosso Acervo</li>
                <li className="leaf">Perguntas Frequentes</li>
                <li className="leaf">Contato</li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 sm-margin-top-40">
            <h6>Você é produtor?</h6>
              Quer anunciar o seu produto aqui? Fale com a gente!
            </div>
          </div>
        </div>
      </footer>
  </div>
  }
}
