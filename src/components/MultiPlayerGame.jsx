import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 0.3 + i * 0.2;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

function MultiPlayerGame() {

    const [grid, setGrid] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ])

    const [turn, setTurn] = useState('x')

    const [moveCount, setMoveCount] = useState(0)
    const [xScore, setXScore] = useState(0)
    const [oScore, setOScore] = useState(0)

    const handleTurn = () => {

        if (turn === 'x') {
            setTurn('o')
        }
        else {
            setTurn('x')
        }
        setMoveCount(moveCount + 1)

    }

    const resetGridAndUpdateScore = (winner) => {
        setGrid([
            '', '', '',
            '', '', '',
            '', '', ''
        ])

        if (winner === 'x') {
            setXScore(xScore + 1)

        }
        else if (winner === 'o') {
            setOScore(oScore + 1)
        }

    }

    useEffect(() => {

        if (moveCount >= 3) {

            const currentX = grid.map(c => {
                if (c === 'x') {
                    return 'x';
                }
                else {
                    return '';
                }
            })

            const currentO = grid.map(c => {
                if (c === 'o') {
                    return 'o';
                }
                else {
                    return '';
                }
            })

            if (//row
                (currentX[0] && currentX[1] && currentX[2]) ||
                (currentX[3] && currentX[4] && currentX[5]) ||
                (currentX[6] && currentX[7] && currentX[8]) ||
                //col
                (currentX[0] && currentX[3] && currentX[6]) ||
                (currentX[1] && currentX[4] && currentX[7]) ||
                (currentX[2] && currentX[5] && currentX[8]) ||
                //diagonal
                (currentX[0] && currentX[4] && currentX[8]) ||
                //anti diagonal
                (currentX[6] && currentX[4] && currentX[2])
            ) {
                console.log('x won')
                resetGridAndUpdateScore('x');
            }

            else if (//row
                (currentO[0] && currentO[1] && currentO[2]) ||
                (currentO[3] && currentO[4] && currentO[5]) ||
                (currentO[6] && currentO[7] && currentO[8]) ||
                //col
                (currentO[0] && currentO[3] && currentO[6]) ||
                (currentO[1] && currentO[4] && currentO[7]) ||
                (currentO[2] && currentO[5] && currentO[8]) ||
                //diagonal
                (currentO[0] && currentO[4] && currentO[8]) ||
                //anti diagonal
                (currentO[6] && currentO[4] && currentO[2])
            ) {
                console.log('o won');
                resetGridAndUpdateScore('o');
            } else {
                let countGridE = 0;
                grid.forEach(e => {

                    if (e === 'x')
                        countGridE++
                    else if (e === 'o')
                        countGridE++
                });
                if (countGridE === 9) {
                    resetGridAndUpdateScore('draw');
                }
            }

        }

    }, [moveCount])


    function handleGrid(index, turn) {
        const newGrid = grid.map((str, i) => {
            if (i === index && str === '') {
                return str + turn;
            } else {
                return str;
            }
        });
        setGrid(newGrid);
    }

    const isGridFull = (index) => {
        if (grid[index] !== '') {
            return true;
        }
        else {
            return false;
        }
    }

    const drawGridElement = (index) => {
        if (grid[index] === 'x') {
            return ([
                <motion.svg key={'x'} className=' absolute -z-10'
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    initial="hidden"
                    animate="visible"
                >
                    < motion.line
                        className="stroke-[5px] fill-none"
                        x1="0"
                        y1="0"
                        x2="50"
                        y2="50"
                        stroke="#0FCDF6"
                        variants={draw}
                        custom={0}
                    />

                    <motion.line
                        className="stroke-[5px] fill-none"
                        x1="0"
                        y1="50"
                        x2="50"
                        y2="0"
                        stroke="#0FCDF6"
                        variants={draw}
                        custom={1}
                    />
                </motion.svg>
            ]);
        } else if (grid[index] === 'o') {
            return ([
                <motion.svg key={'o'} className=' absolute -z-10'
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle
                        className="stroke-[5px] fill-none"
                        cx="50"
                        cy="50"
                        r="22"
                        stroke="#F8A426"
                        variants={draw}
                    />
                </motion.svg>
            ]);
        }
    }

    console.log(grid)

    return (
        <div className=' h-screen w-full flex items-center justify-center flex-col'>

            <span className=' select-none text-xl font-medium absolute top-[10%] text-[#D5D5D5]'>{xScore} | {oScore}</span>

            <div className=' grid grid-cols-3 grid-rows-3 w-[300px] h-[300px]'>


                {grid.map((e, i) => {
                    return ([
                        <div key={i} className=' flex items-center justify-center data-[isfull="false"]:cursor-pointer' data-isfull={isGridFull(i)} onClick={() => { if (!isGridFull(i)) { handleTurn(); handleGrid(i, turn) } }}>
                            {drawGridElement(i)}
                        </div>
                    ]);
                })}

            </div>

            <motion.svg className=' absolute -z-10'
                width="300"
                height="300"
                viewBox="0 0 300 300"
                initial="hidden"
                animate="visible"
            >
                {/* X */}
                <motion.line
                    className="stroke-[1.7px] fill-none"
                    x1="100"
                    y1="300"
                    x2="100"
                    y2="0"
                    stroke="#CDCDCD"
                    variants={draw}
                    custom={1}
                />

                <motion.line
                    className="stroke-[1.7px] fill-none"
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="300"
                    stroke="#CDCDCD"
                    variants={draw}
                    custom={3}
                />

                {/* Y */}
                <motion.line
                    className="stroke-[1.7px] fill-none"
                    x1="300"
                    y1="200"
                    x2="0"
                    y2="200"
                    stroke="#CDCDCD"
                    variants={draw}
                    custom={2}
                />

                <motion.line
                    className="stroke-[1.7px] fill-none"
                    x1="0"
                    y1="100"
                    x2="300"
                    y2="100"
                    stroke="#CDCDCD"
                    variants={draw}
                    custom={4}
                />
            </motion.svg>
        </div>
    )
}

export default MultiPlayerGame