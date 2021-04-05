const counselors = {
    "alina": {
        name: "Alina Miller",
        license: "LMHC",
        img: "../media/testimonial_jane.png",
        focus: ["Substance abuse", "Recovery"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true,
        sent: true
    },
    "hazel": {
        name: "Hazel Jones",
        license: "LMHC",
        img: "../media/testimonial_leia.png",
        focus: ["Substance abuse", "Recovery", "Mood disorders"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    "anonymous": {
        name: "Another Name",
        license: "LPC",
        img: "../media/testimonial_leia.png",
        focus: ["Anxiety disorders", "Mood disorders"],
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: false
    },
};
const groups = [
    {
        name: "Recovering From Addiction Group",
        leader: "hazel", //use the same name as the object key in counselors
        meetDay: "Wednesdays",
        meetTime: "3:00 - 4:00 PM",
        meetLength: 1, //in hours
        meetWeekly: true, 
        focus: ["Substance abuse", "Self-improvement"],
        closed: true,
        size: 14,
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true,
        sent: true
    },
    {
        name: "Title of Group",
        leader: "alina",
        meetDay: "Saturdays",
        meetTime: "10:00 - 11:00 AM",
        meetLength: 1, //in hours
        meetWeekly: false, 
        focus: ["Self-improvement"],
        closed: false,
        size: 10,
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: true
    },
    {
        name: "Another title",
        leader: "anonymous",
        meetDay: "Sundays",
        meetTime: "7:00 - 7:45 PM",
        meetLength: 0.75, //in hours
        meetWeekly: true, 
        focus: ["Anxiety", "Depression"],
        closed: false,
        size: 11,
        description: "Insert description here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor, tortor in bibendum egestas, metus elit mattis felis, eget tempor justo nibh quis sem. Praesent auctor felis et sapien venenatis fermentum. Fusce id auctor urna. Nulla semper metus felis, id placerat odio vulputate eget.",
        recommended: false
    },
];
const events = [
    {
        title: "How to Meditate",
        leader: "Taylor Peterson",
        img: "../media/herbal.jpg",
        date: "5",
        time: "10:15 - 11:00 AM",
        description: "Meditation is simple, inexpensive, and surprisingly beneficial. Not only can you relieve stress, but you can gain new perspectives and increase your imagination and self-awareness at the same time. Join us as Peterson explains how you can get started with meditation anywhere, at any time.",
        shortDescrip: "A talk on the basics of meditation"
    },
    {
        title: "The Healing Arts",
        leader: "Sarah Parker",
        img: "../media/herbal.jpg",
        date: "10",
        time: "4:00 - 5:00 PM",
        description: "Arts, whether it be music or painting or dance, have long played a role in enhancing our well-being. Even if you may not consider yourself an artistic or creative person, simply engaging in these activities can not only lift your mood but substantially improve your health, as well. Discover more about the power of creative expression in our lives.",
        shortDescrip: "A conversation about the benefits of arts therapy"
    },
    {
        title: "Sharing Your Story",
        leader: "Kayden Wheatley",
        img: "../media/herbal.jpg",
        date: "14",
        time: "3:00 - 4:30 PM",
        description: "Struggles are hard to share - Kayden Wheatley knows that just as well as anyone else. But these stories also offer a powerful way to connect with and to inspire others, to show that they are not alone. The session will start off with Kayden sharing her recovery journey, and she'll talk through how to share yours, as well. At the end, there'll be an opportunity for you to join in the discussion with your story.",
        shortDescrip: "An opportunity to share your story"
    },
    {
        title: "Connection with Nature",
        leader: "Avery Johnson",
        img: "../media/herbal.jpg",
        date: "17",
        time: "8:00 - 9:00 AM",
        description: "Surrounding yourself with some nature is a great way to quickly lower stress levels and boost your mental health. Join us for an overview of the benefits nature has to offer us and participate in a virtual group walk from your local area.",
        shortDescrip: "A walk and talk focusing on nature"
    },
    {
        title: "Sparking Gratitude",
        leader: "Haley Morrison",
        img: "../media/herbal.jpg",
        date: "23",
        time: "1:30 - 2:15 PM",
        description: "An excellent exercise in self-awareness and a wonderful mood-booster is finding something to be grateful about. It may be big, or it may be small, but what matters most is recognizing the things that give us joy in our lives. Find out more on how to practice gratitude and how it could benefit you.",
        shortDescrip: "A talk centered on gratitude and its importance"
    },
];