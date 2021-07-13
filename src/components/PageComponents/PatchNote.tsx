import styled from 'styled-components';
import React, { useState } from 'react';
import { Device } from '../../styles/theme';
const PatchItemBox = styled.div`
    padding: 10px;
    width: 100%;
`;

const PatchDate = styled.div``;

const PatchContent = styled.div`
    overflow-wrap: break-word;
    width: 100%;
`;

const PatchItem = ({ content }: { content: PatchInterface }) => {
    return (
        <PatchItemBox>
            <PatchDate>{content.date}</PatchDate>
            <PatchContent>{content.content}</PatchContent>
        </PatchItemBox>
    );
};
const PatchMonthBox = styled.div<{ toggle: boolean }>`
    width: 500px;
    @media ${Device.tablet} {
        width: 90%;
    }
    .month {
        font-size: 20px;
    }
    .contents {
        opacity: ${(props) => (props.toggle ? 1 : 0)};
        height: ${(props) => (props.toggle ? 'auto' : '0')};
        overflow: hidden;
        transition: all 1s ease-out;
    }
`;

const PatchMonth = ({
    item,
}: {
    item: [month: string, contents: PatchInterface[]];
}) => {
    const [month, contents] = item;
    const [toggle, setToggle] = useState(true);

    return (
        <PatchMonthBox toggle={toggle}>
            <div className="month" onClick={() => setToggle(!toggle)}>
                {month}
            </div>
            <div className="contents">
                {contents.map((content, index) => {
                    return (
                        <PatchItem content={content} key={index}></PatchItem>
                    );
                })}
            </div>
        </PatchMonthBox>
    );
};

const PatchNoteWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const PatchList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PatchHeader = styled.div`
    font-size: 30px;
`;

const Notes: Record<string, PatchInterface[]> = {
    '2021-7': [
        {
            date: '~2021-07-13',
            content:
                '개행 가능하게 수정, 파쿰람 무한 로딩 수정, 모바일뷰 가독성 개선 ',
        },
    ],
};

interface PatchInterface {
    date: string;
    content: string;
}

const PatchNote = () => {
    return (
        <PatchNoteWrapper>
            <PatchHeader>패치노트</PatchHeader>
            <PatchList>
                {Object.entries(Notes).map((item, index) => {
                    return <PatchMonth key={index} item={item} />;
                })}
            </PatchList>
        </PatchNoteWrapper>
    );
};

export default PatchNote;
