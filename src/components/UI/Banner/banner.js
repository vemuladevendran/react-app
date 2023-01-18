import Card from '../Card/card'

function Banner(params) {
    return (<div className="container">
        <div className="row p-3">
            <div className="col-12 text-center fw-bold fs-3">
                Quizz App
            </div>
            {/* card */}
            <div className="col-12 mt-4">
                <div className='row'>
                    {
                        [1, 1, 1, 1, 1, 1].map((x, i) => {
                            return (
                                <div className='col-6 my-2'>
                                    <Card />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;