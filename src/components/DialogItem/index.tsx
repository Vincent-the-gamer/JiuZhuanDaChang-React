import "./DialogItem.less";
import caokefanImg from "@/assets/img/caokefan.jpg";
import yutaoImg from "@/assets/img/yutao.jpg";

interface DialogProps {
    isLeft: boolean,
    content: string
}

export default function DialogItem(props: DialogProps) {
  const { isLeft, content } = props;

  return (
    <div className="dialogItem">
        {
            isLeft && (
                <div className="leftStyle">
                    <img src={ yutaoImg } alt="俞涛"/>
                    <div className="text">
                        <h3>{ content }</h3>
                    </div>
                </div>
            )
        }
        {
            !isLeft && (
            <div className="rightStyle">
                <img src={ caokefanImg } alt="曹可凡"/>
                <h3>{ content }</h3>
            </div>
            )
        }
    </div>
  )
}
