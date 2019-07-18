import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    
                </div>
                <div className="board-row">
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </div>
                <div className="board-row">
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                </div>
                <div className="board-row">
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                </div>
                <div className="board-row">
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                </div>
                <div className="board-row">
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                </div>
                <div className="board-row">
                    {this.renderSquare(80)}
                    {this.renderSquare(81)}
                    {this.renderSquare(82)}
                    {this.renderSquare(83)}
                    {this.renderSquare(84)}
                    {this.renderSquare(85)}
                    {this.renderSquare(86)}
                    {this.renderSquare(87)}
                    {this.renderSquare(88)}
                    {this.renderSquare(89)}
                </div>
                <div className="board-row">
                    {this.renderSquare(90)}
                    {this.renderSquare(91)}
                    {this.renderSquare(92)}
                    {this.renderSquare(93)}
                    {this.renderSquare(94)}
                    {this.renderSquare(95)}
                    {this.renderSquare(96)}
                    {this.renderSquare(97)}
                    {this.renderSquare(98)}
                    {this.renderSquare(99)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return 'X';
        }
    }
    return null;
}
