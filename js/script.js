'use strict';

addEventListener("DOMContentLoaded", () => {
    let pets = [
        {
            "name": "Katrine",
            "img": "assets/icons/pets-katrine.jpg",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Jennifer",
            "img": "assets/icons/pets-jennifer.jpg",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Woody",
            "img": "assets/icons/pets-woody.jpg",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"]
        },
        {
            "name": "Sophia",
            "img": "assets/icons/pets-sofia.jpg",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Scarlett",
            "img": "assets/icons/pets-scarlet.jpg",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Timmy",
            "img": "assets/icons/pets-timmy.jpg",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"]
        },
        {
            "name": "Freddie",
            "img": "assets/icons/pets-freddie.jpg",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"]
        },
        {
            "name": "Charly",
            "img": "assets/icons/pets-charly.jpg",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"]
        }
    ];
    
    const friendsContainer = document.querySelector('.friends-container');
    const btnsLeft = document.querySelectorAll('.friends-left');
    const btnsRight = document.querySelectorAll('.friends-right');
    let access = true;
    
    let currentIndex = 0;
    
    
    function createItem(i) {
        const item = document.createElement('div');
        const img = document.createElement('img');
        const h5 = document.createElement('h5');
        const btn =document.createElement('button');
    
        img.setAttribute('src', `${pets[i].img}`);
        h5.textContent = `${pets[i].name}`;
        btn.className = 'learn';
        btn.textContent = 'Learn more';
        item.className = 'friends-item';
    
        item.append(img, h5, btn);
        return item;
    }
    
    friendsContainer.append(createItem(1), createItem(2), createItem(3), createItem(4), createItem(5));
    
    function appendEl() {
        access = false;
        const item = createItem(currentIndex);

        friendsContainer.querySelectorAll('.friends-item').forEach(el => {
            switch(true) {
                case window.innerWidth > 1000: el.classList.add('to-left');
                break;
                case window.innerWidth <= 1000 && window.innerWidth > 768: el.classList.add('to-left-l');
                break;
                case window.innerWidth <= 768: el.classList.add('to-left-s');
                break;
            }
        })

        setTimeout( () => {
            friendsContainer.append(item);
            while(friendsContainer.querySelectorAll('.friends-item').length > 5) {
                friendsContainer.firstChild.remove();
            }

            friendsContainer.querySelectorAll('.friends-item').forEach(el => {
                el.classList.remove('to-left', 'to-left-l', 'to-left-s');
                
            })
            access = true;
        }, 450)
    }
    
    function prependEl() {
        access = false;
        const item = createItem(currentIndex);

        friendsContainer.querySelectorAll('.friends-item').forEach(el => {
            switch(true) {
                case window.innerWidth > 1000: el.classList.add('to-right');
                break;
                case window.innerWidth <= 1000 && window.innerWidth > 768: el.classList.add('to-right-l');
                break;
                case window.innerWidth <= 768: el.classList.add('to-right-s');
                break;
            }
        })

        setTimeout( () => {
            friendsContainer.prepend(item);
    
            while(friendsContainer.querySelectorAll('.friends-item').length > 5) {
                friendsContainer.lastChild.remove();
            }

            friendsContainer.querySelectorAll('.friends-item').forEach(el => {
                el.classList.remove('to-right', 'to-right-l', 'to-right-s');
                
            })
            access = true;
        }, 450)

        
    }
    
    function incr() {
        currentIndex < pets.length - 1 ? currentIndex++ : currentIndex = 0;
        
    }
    
    function decr() {
        currentIndex > 0 ? currentIndex-- : currentIndex = pets.length - 1;
    }

    function addEventList(btns, index, func) {
        btns.forEach(el => {
            el.addEventListener('click', () => {
                if(access) {
                    index();
                    func();
                }
            })
        })
    }

    addEventList(btnsLeft, incr, appendEl);
    addEventList(btnsRight, decr, prependEl);
});


