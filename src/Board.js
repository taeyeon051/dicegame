import Dice from './Dice';
import './css/Board.css';

function Board({ className = '', name, color, num, history, sum, winner = '' }) {
    const classNames = `${className} Board ${winner ? 'Board-winner' : ''}`;
    return (
        <div className={classNames}>
            <h2 className='Board-heading'>{name}</h2>
            <Dice color={color} num={num} />
            <h2 className='Board-heading'>총점</h2>
            <p>{sum}</p>
            <h2 className='Board-heading'>기록</h2>
            <p>{history}</p>
        </div>
    );
}

export default Board;
