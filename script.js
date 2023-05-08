$('#click-me').click(function() { 
    let val = 0   
    val = (Math.floor(Math.random() * 10) + 3)   


switch (val) {
    case 1:       
        console.log("The Fool - Unaware of the life's challenges, and holding back a great potential, 'The Fool' is young and vulnerable.When 'The Fool' comes up as a tarot card, you are guided and encouraged to take on all challenges ahead without worry.")
        $("#message").html("The Fool - Unaware of the life's challenges, and holding back a great potential, 'The Fool' is young and vulnerable.When 'The Fool' comes up as a tarot card, you are guided and encouraged to take on all challenges ahead without worry.")  
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/02/15/07/52/the-fool-6016940_960_720.jpg")
        break;
    case 2:                
    console.log("The Magician- The Magician is unique and have many gifts to offer. A magician's skills set him apart from the crowd. When The Magician comes up as a tarot card, it's a reminder that you have everything to move forward or to begin a new project and accomplish it by overcoming any adversity.")
        $("#message").html("The Magician- The Magician is unique and have many gifts to offer. A magician's skills set him apart from the crowd. When The Magician comes up as a tarot card, it's a reminder that you have everything to move forward or to begin a new project and accomplish it by overcoming any adversity.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/18/02/19/the-magician-6103696_960_720.jpg")
        break;
    case 3:
        console.log("The High Priestess- It's the most intuitive card among all. It's the card of awareness. This card urges us to listen to our inner voice and follow our instincts. When this card comes up, it asks you to stop looking out for answers, but to seek within.")
        $("#message").html("The High Priestess- It's the most intuitive card among all. It's the card of awareness. This card urges us to listen to our inner voice and follow our instincts. When this card comes up, it asks you to stop looking out for answers, but to seek within.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/05/11/22/24/tarot-6246912_960_720.jpg")
        break;
    case 4:
        console.log("The Empress- The most faminine card among all, it encourages compassion, beauty and selfless love. Deeply connected to Mother nature, her influence is powerful. So absorb that positive energy around you and you'll be blessed!")
        $("#message").html("The Empress- The most faminine card among all, it encourages compassion, beauty and selfless love. Deeply connected to Mother nature, her influence is powerful. So absorb that positive energy around you and you'll be blessed!")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/02/15/07/46/empress-6016923_960_720.jpg")
        break;
    case 5:
        console.log("The Emperor- The most autoritative force that leads to leadership and power, The Emperor card represents structure and solidity. This card reminds you that you have immense power to rise up to great positions. So why wait, take charge of your own life. Jump ahead, nothing can ever stop you!")
        $("#message").html("The Emperor- The most autoritative force that leads to leadership and power, The Emperor card represents structure and solidity. This card reminds you that you have immense power to rise up to great positions. So why wait, take charge of your own life. Jump ahead, nothing can ever stop you!")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/27/21/35/tarot-6129696_960_720.jpg")
        break;
    case 6:
        console.log("The Hierophant- A messenger from heaven, he is a great spiritual guide, and when The Heirophant card comes up; you're encouraged to follow the rules, and to find a spiritual perspective of your difficult situation, inorder to find inner peace.")
        $("#message").html("The Hierophant- A messenger from heaven, he is a great spiritual guide, and when The Heirophant card comes up; you're encouraged to follow the rules, and to find a spiritual perspective of your difficult situation, inorder to find inner peace.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/02/15/07/53/hierophant-6016942_960_720.jpg")
        break;
    case 7:
        console.log("The Lovers- It's a card that represents your close relationships. This card when pops up indicates that your love life needs extra attention. It also shows about your values and decisions that you need to make.It's the time when you should consider all the possible consequences of your choices.")
        $("#message").html("The Lovers- It's a card that represents your close relationships. This card when pops up indicates that your love life needs extra attention. It also shows about your values and decisions that you need to make.It's the time when you should consider all the possible consequences of your choices.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/18/02/19/tarot-cards-6103697_960_720.jpg")
        break;
    case 8:
        console.log("The Chariot- It's a card that says about your natural drive and determination. It also indicates a victory awaiting you! This card reminds you not to limit your thinking; and encourage you to combine your knowledge of your mind with your heart and soul. Believe me, you are an unstoppable force!")
        $("#message").html("The Chariot- It's a card that says about your natural drive and determination. It also indicates a victory awaiting you! This card reminds you not to limit your thinking; and encourage you to combine your knowledge of your mind with your heart and soul. Believe me, you are an unstoppable force!")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/02/15/07/46/chariot-6016921_960_720.jpg")
        break;
    case 9:
        console.log("Strength- This card represents immense courage, the fortitude of your heart, and your endurance. When this card comes up, it's reminding you how strong you are to face any adverse situation. It ensures you that you'll come out of it as more strong and powerful.")
        $("#message").html("Strength- This card represents immense courage, the fortitude of your heart, and your endurance. When this card comes up, it's reminding you how strong you are to face any adverse situation. It ensures you that you'll come out of it as more strong and powerful.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/27/21/29/tarot-6129685_960_720.jpg")
        break;
    case 10:
        console.log("The Hermit- The Hermit yearns to be left alone. It shows how much you want to be away from all the noises and dramas that surround you, just to be in solitute! This card when shows up reminds you how finding inner peace is important to lead a healthy life.")
        $("#message").html("The Hermit- The Hermit yearns to be left alone. It shows how much you want to be away from all the noises and dramas that surround you, just to be in solitute! This card when shows up reminds you how finding inner peace is important to lead a healthy life.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/02/15/07/52/hermit-6016941_960_720.jpg")
        break;
    case 11:
        console.log("The Wheel of Fortune- The wheel of fortune is constantly revolving, sometimes at the top and other times at the bottom. This card reminds you that you must cherish every lesson the moment brings you as nothing is permanent in this world!")
        $("#message").html("The Wheel of Fortune- The wheel of fortune is constantly revolving, sometimes at the top and other times at the bottom. This card reminds you that you must cherish every lesson the moment brings you as nothing is permanent in this world!")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/27/21/29/tarot-6129686_960_720.jpg")
        break;
    case 12:
        console.log("Justice- This card reminds you of Karma, and that every action has it's consequence. Whatever life is throwing at you is the consequence of your actions and decisions you made in your past. When this card pops up, make sure you are fair to everyone and your interations are not to hurt others.")
        $("#message").html("Justice- This card reminds you of Karma, and that every action has it's consequence. Whatever life is throwing at you is the consequence of your actions and decisions you made in your past. When this card pops up, make sure you are fair to everyone and your interations are not to hurt others.")
        $ ('#pic').attr("src", "https://cdn.pixabay.com/photo/2021/03/27/21/24/tarot-6129675_960_720.jpg")
        break;    
    
  }
})                                                   
