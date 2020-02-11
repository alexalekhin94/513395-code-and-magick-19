var userDialog = document.querySelector('.setup')
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

nameArray = ['Иван','Хуан Себастьян', 'Мария','Кристоф', 'Виктор','Юлия', 'Люпита','Вашингтон'];
famArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая','Нионго', 'Ирвинг'];

colorArray = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

eyesColor = ['black','red','blue','yellow','green'];


// Функция, которая генерирует случайэлемент массива

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function renderWizard(wizard){

  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardArr[i]['name'];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardArr[i]['eyesColor'];
  wizardElement.querySelector('.wizard-coat').style.fill = wizardArr[i]['color'];

  return wizardElement;
}

// Нормально ли вообще так задавать массив или его нужно удалять потом в какой то момент? Назвал сначала wizard, но она пересеклась с другой переменной. Это как решить?
var wizardArr = [];

for(var i = 0; i < 4; i++) {
  wizardArr[i] =  {
    name: arrayRandElement(nameArray) +' '+arrayRandElement(famArray),
    color: arrayRandElement(colorArray),
    eyesColor: arrayRandElement(eyesColor)
  }
}



var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');



var fragment =  document.createDocumentFragment();

for (var i = 0; i < wizardArr.length; i++) {

  fragment.appendChild(renderWizard(wizardArr[i]));

}

similarWizardList.appendChild(fragment)



