var userDialog = document.querySelector('.setup')

document.querySelector('.setup-similar').classList.remove('hidden');

nameArray = ['Иван','Хуан Себастьян', 'Мария','Кристоф', 'Виктор','Юлия', 'Люпита','Вашингтон'];
famArray = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая','Нионго', 'Ирвинг'];

colorArray = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

eyesColor = ['black','red','blue','yellow','green'];

coatColorArray = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

fireballColorArray = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848']



// Функция, которая генерирует случайный элемент массива

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





// Open setup window//
var userPageIcon = document.querySelector('.setup-open');
var userIcon = document. querySelector ('.setup-open-icon')


userPageIcon.addEventListener("click", onUserDialogClick );
userIcon.addEventListener('keydown', onIconEnterPress);



function onUserDialogClick(evt){
  userDialog.classList.remove('hidden')

  document.addEventListener('keydown', function(evt){
    if(evt.key === 'Escape'){
    userDialog.classList.add('hidden');
  }
  })


}


function onIconEnterPress(evt){
if(evt.key === "Enter"){
  userDialog.classList.remove('hidden');
}
}


var userDialogClose = userDialog.querySelector('.setup-close');
userDialogClose.addEventListener("click", onUserDialogCloseClick )
userDialogClose.addEventListener('keydown', onIconCloseEnterPress)

function onUserDialogCloseClick(evt){
  userDialog.classList.add('hidden')
}

function onIconCloseEnterPress(evt){
if (evt.key === "Enter"){
  userDialog.classList.add('hidden');
}
}


var setupSubmitButton = document.querySelector('.setup-submit');

// setupSubmitButton.addEventListener('keydown', onSetupSubmitClick);
setupSubmitButton.addEventListener('submit', onSetupSubmitClick);
// setupSubmitButton.addEventListener('click', onSetupSubmitClick);

function onSetupSubmitClick(evt){
  evt.preventDefault();


if(evt.key = "Enter"){
  userDialog.classList.add('hidden')
  }
}


var wizardSetup= document.querySelector('.setup-player');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');


wizardCoat.addEventListener('click', onWizardCoatClick);

function onWizardCoatClick(){
  //Правильно ли задавать переменую для изменения знаечния здесь или это нужно делать вне функции?
  var coatlColorValue = wizardSetup.querySelector('input[name = coat-color]');
  var randomCoatColor = arrayRandElement(coatColorArray);
  wizardCoat.style.fill = randomCoatColor;
  coatlColorValue.value = randomCoatColor;

}

wizardEyes.addEventListener('click', onWizardEyesClick)

function onWizardEyesClick(){

  var eyeslColorValue = wizardSetup.querySelector('input[name = eyes-color]');
  var randomEyesColor = arrayRandElement(coatColorArray);
  wizardEyes.style.fill = randomEyesColor;
  eyeslColorValue.value = randomEyesColor;

}


wizardFireball.addEventListener('click', onFireballClick);
function onFireballClick() {
  var firebolColorValue = wizardFireball.querySelector('input[name = fireball-color]')
  var randomFireBallColor = arrayRandElement(fireballColorArray);
  wizardFireball.style.background = randomFireBallColor;


  firebolColorValue.value = randomFireBallColor;
}
