import styled from 'styled-components'
import InfoImg from '../img/jin.jpg';
import dcImg from '../img/dc.png';
import youtubeImg from '../img/youtube.png';
const InfoWrapper = styled.div`
    position: absolute;
    display:flex;
    margin-top: 30px;
    margin-left: 50px;
    background: #fff;
    width: 15%;
    height: 90%;
    min-height: 600px;    
   align-items: center;
   justify-content:space-around;
   flex-direction: column;
    .info_img{
        text-align:center;
    }
    .link a{
        display:flex;
        text-decoration:none;
        line-height: 1.5em;
        &:visited{
            color:#333;
        }
        margin-bottom: 15px;
    }
    .link a img{
        width:1.5em;
        height:1.5em;
        text-align:center;
    }
`  


const CharInfo = ()=>{
    return(
        <InfoWrapper>
            <div className="info_img">
            <img src={InfoImg} alt="char"/>
            <h2>Jin</h2>
            </div>
            <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-VKe-ZosJaA"><img src={youtubeImg}  alt="youtube"/>딜캐( 김케장유투브)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-VKe-ZosJaA"><img src={youtubeImg}  alt="youtube"/>콤보 (쿨잼)</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-VKe-ZosJaA"><img src={dcImg}  alt="dc"/>철마갤 캐릭터 팁</a>
            </div>  
        </InfoWrapper>
    )
}

export default CharInfo;