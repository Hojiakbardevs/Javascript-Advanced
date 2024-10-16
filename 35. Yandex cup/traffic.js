/** Типы */
/*
type Signal = 'GREEN' | 'LEFT' | 'RIGHT' | 'RED';
type Direction = 'FORWARD' | 'LEFT' | 'RIGHT';

type TrafficLightController = {
    subscribe: (callback: (signal: Signal) => void) => void;
}

interface ITraffic {
    go: (direction: Direction) => Promise<void>;
}
*/

class Traffic {
    constructor(initialSignal, trafficLightController) {
        this.currentSignal = initialSignal;
        
        // Подписка на смену сигналов регулировщика
        trafficLightController.subscribe((newSignal) => {
            this.currentSignal = newSignal;
        });
    }

    // Метод go ожидает разрешение на проезд в зависимости от сигнала
    async go(direction) {
        return new Promise((resolve, reject) => {
            const checkPermission = () => {
                // Логика для определения разрешенного направления
                if (this.currentSignal === 'GREEN' && direction === 'FORWARD') {
                    resolve(); // Разрешение на проезд вперед
                } else if (this.currentSignal === 'LEFT' && direction === 'LEFT') {
                    resolve(); // Разрешение на поворот налево
                } else if (this.currentSignal === 'RIGHT' && direction === 'RIGHT') {
                    resolve(); // Разрешение на поворот направо
                } else if (this.currentSignal === 'RED') {
                    reject('Проезд запрещен'); // Проезд запрещен
                } else {
                    // Если сигнал не соответствует направлению, ждем его смены
                    setTimeout(checkPermission, 1000); // Повторная проверка через 1 секунду
                }
            };

            // Начать проверку на разрешение
            checkPermission();
        });
    }
}

// Пример использования:

// Контроллер сигналов, имитирующий смену сигналов регулировщика
class TrafficLightController {
    constructor() {
        this.callbacks = [];
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }

    changeSignal(newSignal) {
        this.callbacks.forEach((callback) => callback(newSignal));
    }
}

// Инициализация системы
const trafficLightController = new TrafficLightController();
const traffic = new Traffic('RED', trafficLightController);

// Изменение сигналов регулировщика через контроллер
setTimeout(() => trafficLightController.changeSignal('GREEN'), 3000);  // Через 3 секунды сигнал 'GREEN'
setTimeout(() => trafficLightController.changeSignal('LEFT'), 6000);   // Через 6 секунд сигнал 'LEFT'

// Пример обращения гондольера для движения вперед
traffic.go('FORWARD')
    .then(() => console.log('Разрешено движение вперед'))
    .catch((error) => console.log(error));

// Пример обращения гондольера для поворота налево
traffic.go('LEFT')
    .then(() => console.log('Разрешен поворот налево'))
    .catch((error) => console.log(error));
