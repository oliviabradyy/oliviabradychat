// Somethings the user might type....
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["yes", "YES", "Yes"],
  ["hot", "HOT","Hot"],
  ["Sore", "SORE", "sore"],
  ["I have", "More than recently", "i have"],
  ["tired", "Tired", "TIRED"],
  ["I don't mind", "I dont mind", "i dont mind", "i don't mind"],
  ["Fever", "fever", "FEVER"],
  ["Taste", "taste", "Smell", "smell", "SMELL", "TASTE"],
  ["Mask", "mask", "MASK"],
  ["next", "Next", "NEXT"],
  ["continue", "Continue", "CONTINUE"],
  ["show more", "Show more", "SHOW MORE", "Show More"],
  ["last step", "Last step", "Last Step", "LAST STEP"],
  ["OK", "ok", "Ok"],
   
]

// The responses.....

const replies = [
  ["Hello! Are you worried you might have covid? Please type YES if you do"],
  ["Do you have a tempreture? Please type Hot if you do."],
  ["Oh sorry to hear that! Do you have a sore throat? Say sore if you do"],
  ["Yikes!! Have you been coughing more recently? Say I have if you have been"],
  ["Did you know that people that don't even have these symptoms can still spread the virus, another question so we can help overcome this virus. Have you been feeling quite tired more than recently? please comment tired if you have"],
  ["I hope you're okay!!, let's keep positive throughout these hard times. You don't mind me asking a few more questions? say I don't mind if we should continue"],
  ["Let's keep going!!, Have you been having fever like symptoms? For example.. high temperture, body shaking, body aches, constant headaches. Say Fever if you have"],
  ["A loss of smell or taste can be common.. have you been experiencing this? Say smell or taste if you have"],
  ["It is important to being a face covering or mask when exiting your household, this limits the spread of coronavirus through talking, breathing and coughing. When leaving your household, have you been following these guidelines and wearing a mask? Say Mask if you have"],
  ["The virus has affected everyone's lives and these procedures are important to follow in order to stay safe and healthy, please say next to continue"],
  ["If you feel you have these symptoms, there are 5 steps you should follow to prevent the spread. please type continue"],
  ["Please keep in contact with your doctor. Stay home, Stop the spread by isolating yourself and avoiding public areas. Take care of yourself, If you are experiencing mild symptoms, you can most likely find relief with the use of over-the-counter pain relievers and fever reducers, along with lots of rest and hydration. please type show more to continue"],
  ["Talk to your own close contacts. It's important that you reach out to anyone you may have exposed to COVID-19. Think back to all the places you've gone and people you've seen starting two days before your symptoms began or you tested positive. Please type last step"],
  ["Keep things clean. Wash your hands often with soap and water for at least 20 seconds or clean them using hand sanitizer with at least 60% alcohol. Please type OK if you wish to continue"],
  ["Following these steps will ensure yours and your loved ones safety :) Thank you for your concern with the spread of this risk and I wish you on a speedy recovery, please type thank you."],
  ["Let's hope for a great kiwi summer in level 1!"]



]

// Random answer if not declared above.

const alternative = [
  "That's a good sign then",
  "I'm listening...",
  "I don't understand :/",
  "You're looking at a negative test then!!",
  "Let's overcome this virus",
  "Looking at a kiwi summer in level 1!!",
  "Keep going...",
  "I understand...",
  

]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]