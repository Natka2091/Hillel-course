/*
 * #1
 *
 * Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.
*/

function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum)

/*
 * #2
 * Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/

function doubleArrayElements(array) {
    return array.map(number => number * 2);
}

const examArray = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(examArray)
console.log('Подвоєні елементи масиву:', doubledArray)

/*
 * #3
 *
 * Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.
*/

class SkillsManager {
    constructor() {
        this.skills = [];
    }
    addSkill(skill) {
        if (typeof skill === "string" && skill.length >= 2) {
            this.skills.push(skill);
            return skill;
        }
        return null;
    }
    getAllSkills() {
        return this.skills;
    }
}

const skillsManager = new SkillsManager()
console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.getAllSkills())




