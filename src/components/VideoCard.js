import React from 'react';
const VideoCard = (props) => {
    // console.log(props.data.snippet.title);
    
    return (
        <div onClick={() => props.onVideoSelect(props.data)}>
            <div className="ui card" data="" style={{ width: '100%' }}>
                <div className="content">
                    <div className="segment">
                        <img 
                            alt=""
                            style={{ width: '100%' }}
                            src={props.data.snippet.thumbnails.high.url}
                        />
                    </div>
                    <div className="header">{props.data.snippet.title}</div>
                    <div className="meta">
                        <span className="category">{props.data.snippet.channelTitle}</span>
                    </div>

                    {/* <div className="description">
                        < p></p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src="/images/avatar/small/matt.jpg"/> Matt
                    </div> */}
                </div>
            </div>
        </div>
    );
}

// const onCardClick = (e) => {
//     console.log(e);
// }

VideoCard.defaultProps = {
    data: {
        snippet: {
            title: 'loading',
            channelTitle: ''
        }
    }
}
export default VideoCard;