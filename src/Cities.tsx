import { useState } from 'react'
// import "./Cities."

interface IProps {
    myCities: string[],
    jay: string
}

const Cities = ({myCities, jay}: IProps) => {
    const [selectedIdx, setSelectedIdx] = useState(-1);
  return (
    <>
        <h1 className="Jay">{jay}</h1>
        <ul className="List-group">
            {myCities.map((city, idx) => 
            selectedIdx === idx ? (
                <li
                    className="list-group-item active"
                    key={idx} onClick={() => setSelectedIdx(-1)}>
                    {city}
                </li>
            ) : (
                <li
                    className="List-group-item"
                    key={idx} onClick={() => setSelectedIdx(idx)}>
                    {city}
                </li>
            )
            )}
        </ul>
    </>
  );
};

export default Cities