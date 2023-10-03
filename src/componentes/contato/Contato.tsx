import '.Contato/.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'


function Contato(){
    return(
       <>
        <Header/>
        <div className='content-main'>
          <div className='tiluloMain'>
            <h1>Contate-me</h1>
          </div>
          <div>
            div do titulo e formulario
            <div>
              div TF parte1
            </div>
            <div>
              dv TF part 2 
            </div>
          </div>
        </div>
        <Footer/>
      </>
    )
}
export default Contato