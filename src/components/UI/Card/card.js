import Button from '../Button/button';
import './card.css'

function Card(params) {
    return (
        <div className="container p-3 card_wrapper">
            <div className="row">
                <div className="col-12">
                    <p className='text-white fw-bold'>What color is are leaves ?</p>
                    <div className="row">
                        {
                            [1, 1, 1, 1].map((x, i) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 my-1"><Button /></div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;