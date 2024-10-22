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

    if (input1 === "") {
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

    if (studentNames === "" || studentAges === "") {
        document.getElementById("result2").value = "Ismlar va yoshlardan iborat massivlarni kiriting!";
        return;
    }

    let names = studentNames.split(",").map(name => name.trim());
    let ages = studentAges.split(",").map(age => parseInt(age.trim(), 10));

    if (names.length !== ages.length) {
        document.getElementById("result2").value = "Ismlar va yoshlardagi qiymatlar soni teng emas!";
        return;
    }

    let studentIndex = ages.findIndex(age => age >= 20);

    let result = studentIndex !== -1 ?
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

    if (input3 === "") {
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