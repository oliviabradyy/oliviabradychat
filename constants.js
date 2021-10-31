// Somethings the user might type....
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["yes", "YES", "Yes"],
  ["hot", "HOT","Hot"],
  ["Sore", "SORE", "sore"],
  ["I have", "More than recently", "Yes", "yes", "i have"],
  ["Yes", "YES", "yes", "tired", "Tired", "TIRED"],
  ["I don't mind", "I dont mind", "i dont mind", "i don't mind"],
  ["Fever", "fever", "FEVER"],
  ["Taste", "taste", "Smell", "smell", "SMELL", "TASTE"],
  ["Mask", "mask", "MASK"]

]

// The responses.....

const replies = [
  ["Hello! Are you worried you might have covid? Please type YES if you do"],
  ["Do you have a tempreture? Please type Hot if you do."],
  ["Oh sorry to hear that! Do you have a sore throat? Say Sore if you do"],
  ["Yikes!! Have you been coughing more recently? Say I have if you have been"],
  ["Did you know that people that don't even have these symptoms can still spread the virus, another question so we can help overcome this virus. Have you been feeling quite tired more than recently? please comment yes if you have"],
  ["I hope you're okay!!, let's keep positive throughout these hard times. You don't mind me asking a few more questions? say I don't mind if we should continue"],
  ["Let's keep going!!, Have you been having fever like symptoms? For example.. high temperture, body shaking, body aches, constant headaches. Say Fever if you have"],
  ["A loss of smell or taste can be common.. have you been experiencing this? Say smell or taste if you have"],
  ["It is important to being a face covering or mask when exiting your household, this limits the spread of coronavirus through talking, breathing and coughing. When leaving your household, have you been following these guidelines and wearing a mask? Say Mask if you have"]


]

// Random answer if not declared above.

const alternative = [
  "That's a good sign then",
  "I'm listening...",
  "I don't understand :/",
  "You're looking at a negative test then!!",
  "Let's overcome this virus",
  "Looking at a kiwi summer in level 1!!"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]