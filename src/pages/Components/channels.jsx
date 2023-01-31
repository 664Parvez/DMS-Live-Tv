const Channel = () => {
    return (
        <>
            <div id="all_channel">
                <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="true">News</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-sports-tab" data-bs-toggle="pill" data-bs-target="#pills-sports" type="button" role="tab" aria-controls="pills-sports" aria-selected="false">Sports</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-bangla-tab" data-bs-toggle="pill" data-bs-target="#pills-bangla" type="button" role="tab" aria-controls="pills-bangla" aria-selected="false">Bangla</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-hindi-tab" data-bs-toggle="pill" data-bs-target="#pills-hindi" type="button" role="tab" aria-controls="pills-hindi" aria-selected="false">Hindi</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-english-tab" data-bs-toggle="pill" data-bs-target="#pills-english" type="button" role="tab" aria-controls="pills-english" aria-selected="false">English</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-documentary-tab" data-bs-toggle="pill" data-bs-target="#pills-documentary" type="button" role="tab" aria-controls="pills-documentary" aria-selected="false">Documentary</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-cartoon-tab" data-bs-toggle="pill" data-bs-target="#pills-cartoon" type="button" role="tab" aria-controls="pills-cartoon" aria-selected="false">Cartoon</button>
                    </li>
                </ul>
                
                <div className="tab-content text-center" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">N</div>

                    <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab">S</div>
                    
                    <div className="tab-pane fade" id="pills-bangla" role="tabpanel" aria-labelledby="pills-bangla-tab">B</div>
                    
                    <div className="tab-pane fade" id="pills-hindi" role="tabpanel" aria-labelledby="pills-hindi-tab">H</div>

                    <div className="tab-pane fade" id="pills-english" role="tabpanel" aria-labelledby="pills-english-tab">E</div>

                    <div className="tab-pane fade" id="pills-documentary" role="tabpanel" aria-labelledby="pills-documentary-tab">D</div>

                    <div className="tab-pane fade" id="pills-cartoon" role="tabpanel" aria-labelledby="pills-cartoon-tab">C</div>
                </div>
            </div>
        </>
    )
}

export default Channel