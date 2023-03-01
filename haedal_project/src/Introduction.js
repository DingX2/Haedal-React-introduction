import './css/Introduction.css'
import IntroductionTemplate from './IntroductionTemplate'

// content에 강조할 부분 <b></b>로 감싸 주세요
const list = [
  {
    img: "img/haedal.png",
    title: "해달 소개",
    content: "해달은 2018년 2학기 전자공학부 동아리로 시작해, IT대학 학술동아리로 성장하여 활동 중인 <b>코딩 동아리</b>입니다."
  },
  {
    img: "img/메인2_사진2.png",
    title: "해달 활동",
    content: "SW를 전혀 모르는 사람도 코딩을 시작할 수 있게 도와주는 <b>부트캠프</b>, 아이디어를 구체화하는 <b>아이디어톤</b>, 동아리 내 다양한 <b>트랙</b> 활동 등 다양한 코딩 행사를 개최합니다."
  }
]

export default function Introduction() {

  return (
    <div className='introduction'>
      <div className='introduction-view'>
        {/* reverse={true} : 사진과 글 위치 변경 */}
        <IntroductionTemplate source={list[0]}/>
        <IntroductionTemplate source={list[1]} reverse={true}/>
      </div>
    </div>
  )
}