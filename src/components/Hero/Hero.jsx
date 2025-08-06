import './Hero.css'

export default function Hero(props) {
     return (
        <div className='hero d-flex al-center' style={{ backgroundImage: `url(/${props.image})`}}>
         <div className='hero-text'>
            <h1>Let Your Home Be Unique</h1>
            <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
         </div>
        </div>
     )
}