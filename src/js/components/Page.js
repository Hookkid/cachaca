import React from "react"
import { observer } from "mobx-react"

export default class Page extends React.Component {
  render() {
    return <div className="pagePropper">
      <section className="title">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-7 col-md-7 textalign-left spaceUp30">
                    <h1>Tradição Destilada</h1>
                    <p className="flair">A loja virtual que leva Calambau ao Brasil inteiro!</p>
                    <p>Texto promocional explicando as principais diferenças das cachaças de calambau. Apenas duas ou três frases de efeito. Talvez mais alguma coisa tipo isso para termos três linhas no parágrafo. You've not enough minerals.</p>
                    <a className="btn btn-default" target="_self" href="#">Cadastre-se</a>
                    <a className="btn btn-primary" target="_blank" href="#">Veja o nosso acervo</a>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5">
                    <img className="shot img-responsive" src="Img/shot.png" alt="Tradição Destilada" />
                </div>
            </div>          
       </div>
        <div className="bottomSection">
        </div>
      </section>
      <section className="cachacaClub">
        <div className="container">
            <div className="row">
                <div className="col-md-4 marginBottom20">
                    <div className="clubSteps">
                        <h3>Cadastre-se no site</h3>
                        <div className="clubStepsText">
                            Com apenas um email e uma senha você já pode acessar todo o nosso site.
                        </div>
                        <a className="btn btn-default">Cadastrar Agora</a>
                    </div>
                </div>

                <div className="col-md-4 marginBottom20">
                 <div className="clubSteps">
                    <h3>Escolha suas pingas</h3>
                    <div className="clubStepsText">
                        Temos um acervo curado à mão de 32 cachaças à sua disposição.
                    </div>
                    <a className="btn btn-default">Ver Acervo</a>
                 </div>
                </div>
                <div className="col-md-4 marginBottom20">
                <div className="clubSteps">
                    <h3>Entrega rápida</h3>
                    <div className="clubStepsText">
                        Se o pedido for da região metropolitana de Belo Horizonte, seu pedido chega em até 3 dias. No resto do Brasil, o prazo é de 7 dias úteis.
                    </div>
                    <a className="btn btn-default">Saiba Mais</a>
                </div>
                </div>  
            </div>
        </div>
      </section>
      <section className="mainLabel">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-7 col-md-8 left">
                   <h1>A Pinga do Mês (Abril/2017)</h1>
                   <img src="img/havana.jpg" className="labelShadow img-responsive"/>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-4 right">
                    <div className="spaceUp30">
                        <h3>A Havana de Salinas, Minas Gerais.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="price">R$ 38,40</p>
                        <a className="btn btn-primary marginRight12">Comprar Agora</a>
                        <a className="btn btn-default">Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="wineCellar">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2>Navegue nosso acervo</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="cellarDisplay">
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-3">
                                <div className="bottlePlace">
                                    <img src="img/garrafa1.png" />
                                </div>
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-9">
                                <div className="bottleInfo">
                                    <h3>Cachaça do Tito</h3>
                                    <h4>Descrição breve da cachaça em algumas palavras.</h4>
                                    <p className="hidden-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="price">R$ 28,80</p>
                                    <a className="btn btn-primary marginRight12">Colocar no Carrinho</a>
                                </div>
                                <div className="bottleNav">
                                    <div className="row">
                                        <div className="col-xs-6 col-md-4"><a href="javascript:;"><img src="img/left-arrow.png" className="img-responsive"/></a></div>
                                        <div className="col-md-4 hidden-xs"></div>
                                        <div className="col-xs-6 col-md-4"><a href="javascript:;"><img src="img/right-arrow.png" className="img-responsive right-arrow"/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

  </div>
  }
}
