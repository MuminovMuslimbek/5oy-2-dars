// Filter:
const FilterInput1 = document.getElementById("filter__input1");
const FilterInput2 = document.getElementById("filter__input2");
const FilterBtn = document.getElementById("filter__btn");
const cards = document.querySelectorAll(".card");
const h1Element = document.querySelector('h1');
const h2Elements = document.querySelectorAll('h2');
const h2ElementFlex = document.getElementById("TitleNone");
const h2ElementEror = document.getElementById("titleEror");

FilterBtn.addEventListener('click', function(e) {
    e.preventDefault();

    h1Element.style.display = 'none';
    h2Elements.forEach(h2 => {
        h2.style.display = 'none';
    });
    h2ElementFlex.style.display = 'flex';
    h2ElementEror.style.display = 'flex';

    const min = parseInt(FilterInput1.value);
    const max = parseInt(FilterInput2.value);

    if (isNaN(min) || isNaN(max)) {
        cards.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }

    let hasVisibleCards = false;

    cards.forEach(card => {
        const h3Text = card.querySelector('h3').textContent;
        const numberMatch = h3Text.match(/\d+/);
        const number = numberMatch ? parseInt(numberMatch[0]) : null;

        if (number && number >= min && number <= max) {
            card.style.display = 'flex';
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!hasVisibleCards) {
        h2ElementEror.style.display = 'flex';
        cards.forEach(card => {
            card.style.display = 'none';
        });
    } else {
        h2ElementEror.style.display = 'none';
    }
});


// Massivlarga oid:
// N1:
function resultNum1() {
    let input1 = document.getElementById("inputNum1").value.trim();

    if (input1 == "") {
        document.getElementById("result1").value = "So'zlarni qayta kiriting!";
        return;
    }

    let res1 = input1.split(",").map(word => word.trim());

    let filteredWordsNum1 = res1
        .filter(word => word.length >= 5)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));

    document.getElementById("result1").value = filteredWordsNum1.length > 0 ? filteredWordsNum1.join(", ") : "Mos so'zlar topilmadi!";
}

document.getElementById("num1").addEventListener("click", resultNum1);

function clearFields1() {
    document.getElementById("inputNum1").value = "";
    document.getElementById("result1").value = "";
}
document.getElementById("clear1").addEventListener("click", clearFields1);

// N2:
function resultNum2() {
    let studentNames = document.getElementById("inputNum2num1").value.trim();
    let studentAges = document.getElementById("inputNum2num2").value.trim();

    if (studentNames == "" || studentAges == "") {
        document.getElementById("result2").value = "Ismlar va yoshlardan iborat massivlarni kiriting!";
        return;
    }

    let names = studentNames.split(",").map(name => name.trim());
    let ages = studentAges.split(",").map(age => parseInt(age.trim(), 10));

    if (names.length != ages.length) {
        document.getElementById("result2").value = "Ismlar va yoshlardagi qiymatlar soni teng emas!";
        return;
    }

    let studentIndex = ages.findIndex(age => age >= 20);

    let result = studentIndex != -1 ?
        names[studentIndex].charAt(0).toUpperCase() + names[studentIndex].slice(1).toLowerCase() :
        "20 yoshdan katta talaba topilmadi!";

    document.getElementById("result2").value = result;
}

document.getElementById("num2").addEventListener("click", resultNum2);

function clearFields2() {
    document.getElementById("inputNum2num1").value = "";
    document.getElementById("inputNum2num2").value = "";
    document.getElementById("result2").value = "";
}
document.getElementById("clear2").addEventListener("click", clearFields2);

// N3:
function resultNum3() {
    let input3 = document.getElementById("inputNum3").value.trim();

    if (input3 == "") {
        document.getElementById("result3").value = "Narxlarni qayta kiriting!";
        return;
    }

    let prices = input3.split(",").map(price => parseInt(price.trim(), 10));

    let totalPrice = prices
        .filter(price => price >= 10000)
        .reduce((sum, price) => sum + price, 0);

    document.getElementById("result3").value = totalPrice > 0 ? totalPrice : "10000 dan katta narx topilmadi!";
}

document.getElementById("num3").addEventListener("click", resultNum3);

function clearFields3() {
    document.getElementById("inputNum3").value = "";
    document.getElementById("result3").value = "";
}
document.getElementById("clear3").addEventListener("click", clearFields3);

// N4:
function resultNum4() {
    let input4 = document.getElementById("inputNum4").value.trim();

    if (input4 == "") {
        document.getElementById("result4").value = "Sonlarni qayta kiriting!";
        return;
    }

    let numbers = input4.split(",").map(num => parseFloat(num.trim()));

    let allPositive = numbers.every(num => num > 0);
    let hasLargeNumber = numbers.some(num => num > 100);

    let resultMessage = allPositive ? "Barcha sonlar musbat" : "Musbat bo'lmagan sonlar mavjud";
    if (hasLargeNumber) {
        resultMessage += " | Katta son mavjud";
    }

    document.getElementById("result4").value = resultMessage;
}

document.getElementById("num4").addEventListener("click", resultNum4);

function clearFields4() {
    document.getElementById("inputNum4").value = "";
    document.getElementById("result4").value = "";
}
document.getElementById("clear4").addEventListener("click", clearFields4);

// N5:
function resultNum5() {
    let input5 = document.getElementById("inputNum5").value.trim();

    if (input5 === "") {
        document.getElementById("result5").value = "Sonlarni qayta kiriting!";
        return;
    }

    let numbers = input5.split(",").map(num => parseFloat(num.trim()));

    let squaredNumbers = numbers.map(num => num ** 2);

    console.log("Kvadratlar:", squaredNumbers);

    document.getElementById("result5").value = "Kvadratlar konsolga chiqarildi!";
}

document.getElementById("num5").addEventListener("click", resultNum5);

function clearFields5() {
    document.getElementById("inputNum5").value = "";
    document.getElementById("result5").value = "";
}
document.getElementById("clear5").addEventListener("click", clearFields5);

// N6:
function resultNum6() {
    let input6 = document.getElementById("inputNum6").value.trim();

    if (input6 === "") {
        document.getElementById("result6").value = "Maoshlarni qayta kiriting!";
        return;
    }

    let salaries = input6.split(",").map(salary => parseFloat(salary.trim()));

    let totalNewSalary = salaries
        .filter(salary => salary >= 2000)
        .map(salary => salary * 1.1)
        .reduce((sum, salary) => sum + salary, 0);

    document.getElementById("result6").value = totalNewSalary > 0 ? totalNewSalary : "2000 dan kam bo'lmagan maosh topilmadi!";
}

document.getElementById("num6").addEventListener("click", resultNum6);

function clearFields6() {
    document.getElementById("inputNum6").value = "";
    document.getElementById("result6").value = "";
}
document.getElementById("clear6").addEventListener("click", clearFields6);

// N7:
function resultNum7() {
    let input7 = document.getElementById("inputNum7").value.trim();

    if (input7 == "") {
        document.getElementById("result7").value = "Talabalar ma'lumotlarini qayta kiriting!";
        return;
    }

    let students = input7.split(";").map(student => {
        let [name, age, score] = student.split(",").map(item => item.trim());
        return { name, age: parseInt(age, 10), score: parseInt(score, 10) };
    });

    let firstStudent = students.find(student => student.score >= 80);
    let firstStudentInfo = firstStudent ? `${firstStudent.name} (${firstStudent.age})` : "80 ball olgan talaba topilmadi!";

    let highScorers = students.filter(student => student.score > 80).map(student => student.name.toUpperCase());

    document.getElementById("result7").value = `Birinchi talaba: ${firstStudentInfo}\n80 dan yuqori ball olgan talabalar: ${highScorers.length > 0 ? highScorers.join(", ") : "Topilmadi!"}`;
}

document.getElementById("num7").addEventListener("click", resultNum7);

function clearFields7() {
    document.getElementById("inputNum7").value = "";
    document.getElementById("result7").value = "";
}
document.getElementById("clear7").addEventListener("click", clearFields7);


// Yozuvlarga oid:
// N1:
function resultNum8() {
    let input8 = document.getElementById("inputNum8").value.trim();

    if (input8 == "") {
        document.getElementById("result8").value = "Matnni qayta kiriting!";
        return;
    }

    let upperCaseResult = input8.toUpperCase();

    document.getElementById("result8").value = upperCaseResult;
}

document.getElementById("num8").addEventListener("click", resultNum8);

function clearFields8() {
    document.getElementById("inputNum8").value = "";
    document.getElementById("result8").value = "";
}
document.getElementById("clear8").addEventListener("click", clearFields8);

// N2:
function resultNum9() {
    let inputString = document.getElementById("inputNum9String").value.trim();
    let inputSubstring = document.getElementById("inputNum9Substring").value.trim();

    if (inputString == "" || inputSubstring == "") {
        document.getElementById("result9").value = "Matn va substringni qayta kiriting!";
        return;
    }

    let isSubstringPresent = inputString.includes(inputSubstring);

    document.getElementById("result9").value = isSubstringPresent ?
        `${inputSubstring} substringi mavjud.` :
        `${inputSubstring} substringi mavjud emas.`;
}

document.getElementById("num9").addEventListener("click", resultNum9);

function clearFields9() {
    document.getElementById("inputNum9String").value = "";
    document.getElementById("inputNum9Substring").value = "";
    document.getElementById("result9").value = "";
}
document.getElementById("clear9").addEventListener("click", clearFields9);


// N3:
function resultNum10() {
    let inputString = document.getElementById("inputNum10").value.trim();

    if (inputString == "") {
        document.getElementById("result10").value = "Matnni qayta kiriting!";
        return;
    }

    let replacedString = inputString.replace(/JavaScript/g, "JS");

    document.getElementById("result10").value = replacedString;
}

document.getElementById("num10").addEventListener("click", resultNum10);

function clearFields10() {
    document.getElementById("inputNum10").value = "";
    document.getElementById("result10").value = "";
}
document.getElementById("clear10").addEventListener("click", clearFields10);

// N4:
function resultNum11() {
    let inputString = document.getElementById("inputNum11").value.trim();

    if (inputString == "") {
        document.getElementById("result11").value = "Matnni qayta kiriting!";
        return;
    }

    let reversedString = inputString.split(" ").reverse().join(" ");

    document.getElementById("result11").value = reversedString;
}

document.getElementById("num11").addEventListener("click", resultNum11);

function clearFields11() {
    document.getElementById("inputNum11").value = "";
    document.getElementById("result11").value = "";
}
document.getElementById("clear11").addEventListener("click", clearFields11);

// N5:
function resultNum12() {
    let inputString = document.getElementById("inputNum12").value;

    let trimmedString = inputString.trim();

    document.getElementById("result12").value = trimmedString;
}

document.getElementById("num12").addEventListener("click", resultNum12);

function clearFields12() {
    document.getElementById("inputNum12").value = "";
    document.getElementById("result12").value = "";
}
document.getElementById("clear12").addEventListener("click", clearFields12);