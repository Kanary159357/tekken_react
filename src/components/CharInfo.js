import styled from 'styled-components'
import dcImg from '../img/dc.png';
import youtubeImg from '../img/youtube.png';
const InfoWrapper = styled.div`
    display:flex;
    background: #fff;
    height: 90%;
   align-items: center;
   justify-content:space-around;
   flex-direction: column;
   @media all and (max-width: 1024px){
       height:20%;
       width:100%;
       border-bottom: 1px solid black;
   }

   h2{
       @media all and (max-width:1024px){
           margin: 0;
           font-size: 20px;

       }
   }

   .link {
       display:flex;
       flex-direction:column;
       @media all and (max-width: 1024px){
        flex-direction: row;
       }
   }
    .info_img{
        text-align:center;
        img{
            width:80%;
            @media all and (max-width: 1024px){
                width:20%;
            }   
        }
    
    }
    .link a{
        display:flex;
        text-decoration:none;
        line-height: 1.5em;
        &:visited{
            color:#333;
        }
        margin-bottom: 15px;
        @media all and (max-width: 1140px){
            line-height: 1em;
        }
    
      
    }
    .link a img{
        display:flex;
        width:1.5em;
        height:1.5em;
        align-items:center;
        @media all and (max-width:1140px){
            width: 1em;
            height: 1em;
        }
        
    }
`  


const CharInfo = ({data})=>{
    return(
        <InfoWrapper>
            <div className="info_img">
            <img src={data.img} alt="char"/>
            <h2>{data.name}</h2>
            </div>
            <div className="link">
            <a target="_blank" rel="noopener noreferrer" href={data.punish}><img src={youtubeImg}  alt="youtube"/>딜캐</a>
            <a target="_blank" rel="noopener noreferrer" href={data.combo}><img src={youtubeImg}  alt="youtube"/>콤보 (쿨잼)</a>
            <a target="_blank" rel="noopener noreferrer" href={data.dc}><img src={dcImg}  alt="dc"/>철마갤 캐릭터 팁</a>
            </div>  
        </InfoWrapper>
    )
}

export default CharInfo;