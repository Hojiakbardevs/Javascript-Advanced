const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

const unitSize = 20;
let snake = [{ x: 100, y: 100 }];
let dx = unitSize;
let dy = 0;
let food = { x: 0, y: 0 };
let score = 0;

document.addEventListener('keydown', changeDirection);

function gameLoop() {
    if (gameOver()) return alert('Game Over!');
    clearCanvas();
    drawSnake();
    drawFood();
    moveSnake();
    if (snakeEatFood()) {
        score++;
        document.getElementById('score').textContent = score;
        generateFood();
    } else {
        snake.pop(); // Agar ovqat yemasachi, oxirgi qismini o‘chiradi
    }
    setTimeout(gameLoop, 100);
}

function clearCanvas() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = '#00ff00';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, unitSize, unitSize);
    });
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head); // Yangi bosh qo‘shiladi
}

function changeDirection(event) {
    const key = event.keyCode;
    const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;

    if (key === UP && dy === 0) {
        dx = 0;
        dy = -unitSize;
    } else if (key === DOWN && dy === 0) {
        dx = 0;
        dy = unitSize;
    } else if (key === LEFT && dx === 0) {
        dx = -unitSize;
        dy = 0;
    } else if (key === RIGHT && dx === 0) {
        dx = unitSize;
        dy = 0;
    }
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, unitSize, unitSize);
}

function snakeEatFood() {
    return snake[0].x === food.x && snake[0].y === food.y;
}

function generateFood() {
    food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;
    food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;
}

function gameOver() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x >= canvas.width;
    const hitTopWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y >= canvas.height;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

generateFood();
gameLoop();
