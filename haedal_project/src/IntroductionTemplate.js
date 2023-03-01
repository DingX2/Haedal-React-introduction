export default function IntroductionTemplate(props) {
  return (
    <div className='introduction-template'>
      <div className='introduction-image-wrap' style={props.reverse ? {order: '2'} : {}}>
        <img src={props.source.img} alt={props.source.index} />
      </div>
      <div className='introduction-article-wrap'>
        <div className='introduction-article-title'>
          <span>{props.source.title}</span>
        </div>
        <div className='introduction-article-content'>
          <span dangerouslySetInnerHTML={{__html: props.source.content}}></span>
        </div>
      </div>
    </div>
  )
}