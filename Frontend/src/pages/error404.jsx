import '../assets/error404.css'
import  Conector  from '../assets/conector.png'


export default function Error404 (){
    return(
        <div class="errorPage">
            <div class="content">
                <div class="heading">
                    <h1>404</h1>
                </div>
                <div class="subHeading">
                    <h3>Página no encontrada</h3>
                </div>
                <div class="description">
                    <p>Lo sentimos. La página que estabas buscando pudo haber sido renombrada, movida o quizás jamás existió.</p>
                </div>
            </div>
            <div class="btnContainer">
                    <a href="/" class="btn">Inicio</a>
            </div>
            <div class="leftImage">
                    <img src={Conector}/>
            </div>
        </div>
    )
}