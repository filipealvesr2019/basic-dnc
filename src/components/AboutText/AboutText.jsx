import './AboutText.css'

export default function AboutText(props) {
     return (
         <div className='container'>
            <div className='text-section d-flex'>
            <div className='text-section-text'>
               <h2>ABC Ser</h2>
            </div>
            <div className='text-section-text'>
               <p className='primary-color'>Primeira linha</p>
               <p className='primary-color'>Segunda linha</p>
               <p className='primary-color'>Terceira linha</p>
            </div>

            </div>

         </div>
     )
}