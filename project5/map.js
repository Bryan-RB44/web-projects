// Current room id (aka starter room)
let currentRoomId = "start";
// Rooms being defined
const ROOMS = {
    // Starting Room
    start: {
        id: "start",
        theme: "roomStart",
        // Which room each side goes to
        exits: {
            north: "northRoom",
            east: "eastRoom",
            west: "westRoom",
            south: "southRoom"
        },
        // Layout of the room
        objects: [
            // Rocks
            { type: "wall", x: "25%", y: "50%", variant: "leftSign" },
            { type: "wall", x: "75%", y: "50%", variant: "rightSign"},
            { type: "wall", x: "50%", y: "25%", variant: "upSign" },

            // Sign
            {
                type: "sign",
                x: "35%",
                y: "25%",
                variant: "interactiveSign",
                text: "West, North, and East. These are your paths of the Web.",
            },
            {
                type: "sign",
                x: "65%",
                y: "25%",
                variant: "interactiveSign",
                text: "Just because there's a shown path, doesn't mean it's the only one on the Web.",
            }
        ]
    },
    // NORTH ROUTE (CSS)
    northRoom: {
        id: "northRoom",
        theme: "roomDef",
        exits: {
            north: "northRoom2",
            south: "start"
        },
        objects: [
            { type: "wall", x: "25%", y: "50%", variant: "upSign" },
            { type: "wall", x: "25%", y: "65%", variant: "downSign" },
            {
                type: "sign",
                x: "70%",
                y: "50%",
                variant: "altSign",
                text: "Look around your surroundings, you never know if you might miss something!",
            },
            {
                type: "sign",
                x: "65%",
                y: "50%",
                variant: "cssNPC_2",
                text: "I do wonder, why are these signs brightly colored? They are certainly NOT stylish nor fit the aesthetic of this route!",
            },
        ]
    },
    northRoom2: {
        id: 'northRoom2',
        theme: "roomNorth2",
        exits: {
            north: "northRoom3",
            south: "northRoom"
        },
        objects: [
            { type: "wall", x: "80%", y: "20%", variant: "upSign" },
            { type: "wall", x: "80%", y: "35%", variant: "downSign" },
            {
                type: "sign",
                x: "25%",
                y: "60%",
                variant: "cssNPC_2",
                text: "Do you fancy my mustache? It's only made with the finest of curly brackets!",
            },
            {
                type: "sign",
                x: "70%",
                y: "28%",
                variant: "cssNPC",
                text: "If you're looking for somewhere rather pleasant, come visit our gallery. It's further up this route.",
            },
        ]
    },
    northRoom3: {
        id: 'northRoom3',
        theme: "roomNorth3",
        exits: {
            north: "cssRoom",
            south: "northRoom2"
        },
        objects: [
            { type: "wall", x: "30%", y: "45%", variant: "upSign" },
            { type: "wall", x: "30%", y: "60%", variant: "downSign" },
            {
                type: "sign",
                x: "20%",
                y: "40%",
                variant: "cssNPC",
                text: "Despite my love for the arts, I must say that it tires me out severely at times.",
            },
            {
                type: "sign",
                x: "36%",
                y: "50%",
                variant: "cssNPC",
                text: "I must say, these arrow signs are aesthetically pleasing to me.",
            },
        ]
    },
    cssRoom: {
        id: 'cssRoom',
        theme: "roomCSS",
        exits: {
            east: "cssRoom2",
            south: "northRoom3"
        },
        objects: [
            { type: "wall", x: "25%", y: "10%", variant: "downSign" },
            { type: "wall", x: "30%", y: "10%", variant: "rightSign" },
            { type: "wall", x: "10%", y: "60%", variant: "pillar" },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "cssNPC",
                text: "Welcome to the Gallery. We spend our lives here perfecting our craft of aesthetically pleasing elements.",
            },
            {
                type: "sign",
                x: "60%",
                y: "50%",
                variant: "cssNPC_2",
                text: "Between you and me, I am of the opinion that this is the best profession. This is infinitely better than playing in the dirt or stuffing my face into books all day long.",
            },
            {
                type: "sign",
                x: "40%",
                y: "25%",
                variant: "cssNPC_2",
                text: "Exquisite to meet you, I implore you to look around our divine creations.",
            },
            {
                type: "sign",
                x: "30%",
                y: "50%",
                variant: "painting1",
                text: '*"Stone Age" by Charles Style Sheets. It depicts a recreation of an ancient website... you are pretty sure there is no styling in this one.',
            },
        ]
    },
    cssRoom2: {
        id: "cssRoom2",
        theme: "roomCSS",
        exits: {
            west: "cssRoom",
            east: "cssRoom3"
        },
        objects: [
            { type: "wall", x: "30%", y: "10%", variant: "leftSign" },
            { type: "wall", x: "35%", y: "10%", variant: "rightSign" },
            { type: "wall", x: "30%", y: "30%", variant: "pillar" },
            {
                type: "sign",
                x: "40%",
                y: "50%",
                variant: "anipainting",
                text: '*"Animation" by Cassi Style Sheets. It depicts a ball going back and forth using CSS animations.',
            },
            {
                type: "sign",
                x: "50%",
                y: "20%",
                variant: "painting2",
                text: '*"Terminal Shading" by Chester Style Sheets. It depicts a background gradient from black to green using CSS gradients.',
            },
            {
                type: "sign",
                x: "55%",
                y: "35%",
                variant: "cssNPC",
                text: "You know, we have a place where we put our... lesser quality works. We'd rather it be out of sight and out of mind. If you for whatever reason wish to view it, it's at the far back room to the right.",
            },
            {
                type: "sign",
                x: "65%",
                y: "75%",
                variant: "cssNPC_2",
                text: "Don't listen to that gentleman up there. Just this past week, he went on about secret rooms within the walls. He is actually a lunatic.",
            }
        ]
    },
    cssRoom3: {
        id: "cssRoom3",
        theme: "roomCSS",
        exits: {
            west: "cssRoom2",
            east: "cssRoom4"
        },
        objects: [
            { type: "wall", x: "40%", y: "10%", variant: "leftSign" },
            { type: "wall", x: "45%", y: "10%", variant: "rightSign" },
            { type: "wall", x: "35%", y: "75%", variant: "pillar" },
            { type: "wall", x: "70%", y: "30%", variant: "pillar" },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "painting5",
                text: '"Business as Usual" by Chuck Style Sheets. It depicts a news website using CSS attributes to create its look.',
            },
            {
                type: "sign",
                x: "25%",
                y: "35%",
                variant: "cssNPC_2",
                text: "You have quite a fine taste in art to be visiting our gallery. Surely you like to appreciate even the mundane pieces of art across the Web, no?",
            },
            {
                type: "sign",
                x: "60%",
                y: "55%",
                variant: "cssNPC",
                text: 'This fellow gentleman next to me is my best friend. We both like the same things to the point that we share the same favorite artwork, "Business as Usual".',
            },
            {
                type: "sign",
                x: "66%",
                y: "55%",
                variant: "cssNPC",
                text: 'Do not tell him this, but I rather favor the simple colors of "Cascading Styles".',
            }
        ]
    },
    cssRoom4: {
        id: "cssRoom4",
        theme: "roomCSS",
        exits: {
            west: "cssRoom3",
            east: "cssSecret"
        },
        objects: [
            { type: "wall", x: "45%", y: "10%", variant: "leftSign" },
            { type: "wall", x: "40%", y: "30%", variant: "pillar" },
            {
                type: "sign",
                x: "60%",
                y: "30%",
                variant: "painting6",
                text: '"Cascading Styles" by Chrissy Style Sheets. It depicts a stream of colors that goes from side to side.',
            },
            {
                type: "sign",
                x: "20%",
                y: "55%",
                variant: "cssNPC",
                text: "I do apologize if this gallery is not quite up to par to something you would see elsewhere. We have only established ourselves just last week. Someday we may have something more presentable.",
            },
            {
                type: "sign",
                x: "60%",
                y: "55%",
                variant: "cssNPC",
                text: "While our gallery might be empty, we hope to teach a thing or two of our usual work and more creative works like the piece shown in this room.",
            },
            {
                type: "sign",
                x: "66%",
                y: "85%",
                variant: "cssNPC_2",
                text: "Refined as we may be, even amateurs such as yourself can partake in creating this art.",
            },
        ]
    },
    cssSecret: {
        id: "cssSecret",
        theme: "roomSecret",
        exits: {
            west: "cssRoom4"
        },
        objects: [
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "painting3",
                text: '"My Passion" by Cynthia Style Sheets. It depicts a frog on a cloudy background. You do not feel like looking at this any longer.',
            },
            {
                type: "sign",
                x: "80%",
                y: "20%",
                variant: "painting4",
                text: '"Blasphemy" by Cyrus Style Sheets. It depicts a line of HTML code that has styling inside of it. While not wrong, this feels wrong.',
            },
            {
                type: "sign",
                x: "35%",
                y: "20%",
                variant: "trashCan"
            },
            {
                type: "sign",
                x: "70%",
                y: "60%",
                variant: "trashCan"
            },
            {
                type: "sign",
                x: "25%",
                y: "80%",
                variant: "trashCan"
            },
        ]
    },


    // EAST ROUTE (JS)
    eastRoom: {
        id: "eastRoom",
        theme: "roomDef",
        exits: {
            west: "start",
            east: "eastRoom2"
        },
        objects: [
            { type: "wall", x: "24%", y: "70%", variant: "leftSign" },
            { type: "wall", x: "29%", y: "70%", variant: "rightSign" },
            {
                type: "sign",
                x: "30%",
                y: "55%",
                variant: "jsNPC",
                text: 'Hi there traveler. I take that you are the type to learn? Whatever the reason you may have, the Library shall be your refuge if you keep going on this path.',
            },
            {
                type: "sign",
                x: "70%",
                y: "30%",
                variant: "jsNPC_2",
                text: 'I had a friend of mine who went beyond this path and got lost. I have not seen them in a while but surely they are doing alright.',
            },
        ]
    },
    eastRoom2: {
        id: "eastRoom2",
        theme: "roomEast2",
        exits: {
            west: "eastRoom",
            east: "eastRoom3"
        },
        objects: [
            { type: "wall", x: "75%", y: "30%", variant: "leftSign" },
            { type: "wall", x: "80%", y: "30%", variant: "rightSign" },
            {
                type: "sign",
                x: "55%",
                y: "50%",
                variant: "jsNPC_2",
                text: 'Function() season!',
            },
            {
                type: "sign",
                x: "60%",
                y: "50%",
                variant: "jsNPC",
                text: '() => {} season!',
            },
        ]
    },
    eastRoom3: {
        id: "eastRoom3",
        theme: "roomEast3",
        exits: {
            west: "eastRoom2",
            east: "jsRoom"
        },
        objects: [
            { type: "wall", x: "45%", y: "10%", variant: "leftSign" },
            { type: "wall", x: "50%", y: "10%", variant: "rightSign" },
            { type: "wall", x: "60%", y: "80%", variant: "glitter" },
            {
                type: "sign",
                x: "45%",
                y: "50%",
                variant: "jsNPC",
                text: "The Library is just up ahead. While everyone else is busy playing with bricks or paints, we are out here creating efficiency. What's that look for?",
            },
            {
                type: "sign",
                x: "55%",
                y: "80%",
                variant: "jsNPC_2",
                text: "Hold on! I just found this old artifact from the old days of the Web. It's said that these shiny things used be all over the place back then.",
            },
        ]
    },
    jsRoom: {
        id: "jsRoom",
        theme: "roomJS",
        exits: {
            west: "eastRoom3",
            east: "jsRoom2"
        },
        objects: [
            { type: "wall", x: "24%", y: "70%", variant: "leftSign" },
            { type: "wall", x: "50%", y: "70%", variant: "rightSign" },
            {
                type: "sign",
                x: "60%",
                y: "50%",
                variant: "jsNPC",
                text: "Welcome to the Library, where we learn from the knowledge of those before us.",
            },
            {
                type: "sign",
                x: "70%",
                y: "20%",
                variant: "jsNPC_2",
                text: "While we use this place to study, we also use it for prayer. Not for religious reasons, but because half of the time our code doesn't work and we get stuck on it for hours.",
            },
            {
                type: "sign",
                x: "50%",
                y: "20%",
                variant: "bookShelf",
                text: "*These bookshelves are about JavaScript libraries... they seem to open into more books inside of these books.",
            },
            {
                type: "sign",
                x: "30%",
                y: "60%",
                variant: "bookShelf",
                text: '*There is a book about the complexities of programming languages... there seems to be newly added entry about a language with the file extension ".bf"... the next page is torn off.',
            },
            {
                type: "sign",
                x: "20%",
                y: "0%",
                variant: "bookShelf",
                text: "*These books are about bad habits in programming... all of them having titles either with randomly capitalized letters or being unreasonably long.",
            }
        ]
    },
    jsRoom2: {
        id: "jsRoom2",
        theme: "roomJS",
        exits: {
            north: "jsRoom3",
            west: "jsRoom"
        },
        objects: [
            { type: "wall", x: "70%", y: "40%", variant: "upSign" },
            { type: "wall", x: "65%", y: "40%", variant: "leftSign" },
            {
                type: "sign",
                x: "25%",
                y: "55%",
                variant: "bookShelf",
                text: "*These are books on text editors. Within the pages of one book, there's a crumpled up .txt file that has poorly written code.",
            },
            {
                type: "sign",
                x: "50%",
                y: "55%",
                variant: "bookShelf",
                text: '*A book was left open. "The Web, while not being easy to understand at first glance, does not need to be understood. It is there to exist to make free interpretations of, and to explore at your pace...". There is no author, but maybe there does not need to be one.',
            },
            {
                type: "sign",
                x: "75%",
                y: "55%",
                variant: "bookShelf",
                text: "*This bookshelf is all about graphic design. Most books on earlier time periods are full of art and information, but modern books are noticeably empty.",
            },
            {
                type: "sign",
                x: "15%",
                y: "55%",
                variant: "jsNPC",
                text: "I know this library isn't massive, but it's nonetheless a an impressive feat to pull off in so little time. While we edit and maintain what we have though, I have no clue as to where most of these books come from.",
            },
            {
                type: "sign",
                x: "50%",
                y: "40%",
                variant: "jsNPC_2",
                text: "I have no idea where these signs came from, nor does anyone else across the three parts of the Web know either. I believe they come from some force beyond ours but for now I must get back to my reading to avoid thinking about that too much.",
            },
        ]
    },
    jsRoom3: {
        id: "jsRoom3",
        theme: "roomJS",
        exits: {
            east: "jsRoom4",
            south: "jsRoom2"
        },
        objects: [
            { type: "wall", x: "80%", y: "10%", variant: "rightSign" },
            { type: "wall", x: "75%", y: "10%", variant: "downSign" },
            {
                type: "sign",
                x: "5%",
                y: "10%",
                variant: "bookShelf",
                text: "*These books are about hiding secrets and easter eggs in your code or products. There's a book about secret entrances, with pages that didn't show up in the table of contents.",
            },
            {
                type: "sign",
                x: "30%",
                y: "10%",
                variant: "bookShelf",
                text: "*There are books here about testing your code. There's a book specifically talking about actual testing for students taking programming courses. One passage from it is a rant from a student who had to write out his code on paper for an exam. You're grateful this is fiction on the Web.",
            },
            {
                type: "sign",
                x: "55%",
                y: "10%",
                variant: "bookShelf",
                text: "*There seems to be books about being over-ambitious on projects. You choose to ignore this and keep exploring.",
            },
            {
                type: "sign",
                x: "5%",
                y: "50%",
                variant: "bookShelf",
                text: "*These shelves are full of books about using front-end frameworks. Maybe someday you'll learn to use this witchcraft.",
            },
            {
                type: "sign",
                x: "30%",
                y: "50%",
                variant: "bookShelf",
                text: "*These shelves are full of books that are about using domain names. A lot of the names on one of the books are either crossed out or have a price sticker on them.",
            },
            {
                type: "sign",
                x: "55%",
                y: "50%",
                variant: "bookShelf",
                text: "*There's a book that sticks out from the rest. It's a book on file sizes. Everything here is too pixelated to read, bummer.",
            },
            {
                type: "sign",
                x: "5%",
                y: "35%",
                variant: "jsNPC_2",
                text: "I lay here all day reading these books. I believe that all knowledge is good knowledge. Even if things become outdated, looking back on older things can still shine new light on the modern things.",
            },
        ]
    },
    jsRoom4: {
        id: "jsRoom4",
        theme: "roomJS",
        exits: {
            north: "jsSecret",
            west: "jsRoom3"
        },
        objects: [
            { type: "wall", x: "25%", y: "30%", variant: "leftSign" },
            {
                type: "sign",
                x: "75%",
                y: "30%",
                variant: "bookShelf",
                text: "*There's a book on this shelf about comments. Everything inside of this book is written in green.",
            },
            {
                type: "sign",
                x: "40%",
                y: "70%",
                variant: "jsNPC",
                text: "I've come to terms with our world not making sense, but I think that's alright. Chaos does not mean complete randomness nor is it a bad thing. Perhaps that's just the way the Web is.",
            },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "jsNPC_2",
                text: "My friend here has been reading about our language but I think he might've gotten the wrong book because now he speaks all funny.",
            },
            {
                type: "sign",
                x: "60%",
                y: "50%",
                variant: "jsNPC",
                text: "console.log('Hi it's nice to meet you!')",
            },
        ]
    },
    jsSecret: {
        id: "jsSecret",
        theme: "roomSecret",
        exits: {
            south: "jsRoom4"
        },
        objects: [
            {
                type: "sign",
                x: "30%",
                y: "30%",
                variant: "bookShelf",
                text: '"What is considered useless is let go, but to learn from it go below. With the path that bears no mention, it still deserves at least some attention."',
            },
            {
                type: "sign",
                x: "50%",
                y: "30%",
                variant: "bookShelf",
                text: '"South lies the past, but it was not meant to last"',
            }
        ]
    },

    // WEST ROUTE (HTML)
    westRoom: {
        id: "westRoom",
        theme: "roomDef",
        exits: {
            west: "westRoom2",
            east: "start"
        },
        objects: [
            { type: "wall", x: "45%", y: "10%", variant: "leftSign" },
            { type: "wall", x: "50%", y: "10%", variant: "rightSign" },
            {
                type: "sign",
                x: "70%",
                y: "81%",
                variant: "interactiveSign",
                text: "Thanks for clicking this! Read signs to find out extra info!",
            },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "interactiveSign",
                text: "Direction signs can't be read, but they are sure helpful in finding your way around designated areas!",
            },
        ]
    },
    westRoom2: {
        id: "westRoom2",
        theme: "roomWest2",
        exits: {
            west: "westRoom3",
            east: "westRoom"
        },
        objects: [
            { type: "wall", x: "75%", y: "80%", variant: "leftSign" },
            { type: "wall", x: "80%", y: "80%", variant: "rightSign" },
            {
                type: "sign",
                x: "18%",
                y: "75%",
                variant: "interactiveSign",
                text: "Feel free to talk to NPC's!",
            },
            {
                type: "sign",
                x: "50%",
                y: "30%",
                variant: "htmlNPC_2",
                text: "We're all based on something here. I'm a part of the HTML Crew, those fancy schmucks up North are the a part of the CSS Club, and the nerds to the East are a part of the JS Fellowship.",
            },
        ]
    },
    westRoom3: {
        id: "westRoom3",
        theme: "roomWest3",
        exits: {
            west: "htmlRoom",
            east: "westRoom2"
        },
        objects: [
            { type: "wall", x: "30%", y: "30%", variant: "leftSign" },
            { type: "wall", x: "35%", y: "30%", variant: "rightSign" },
            {
                type: "sign",
                x: "40%",
                y: "30%",
                variant: "htmlNPC_2",
                text: "Needed to step out. Sure, it's an honor to work here, but we can't be relied on for EVERYTHING on the Web. Just don't tell our boss that... whoever that might be.",
            },
            {
                type: "sign",
                x: "60%",
                y: "75%",
                variant: "htmlNPC",
                text: "I reckon you should check out the Construction Zone up ahead, it's not much but it's still a wonderful place to work at.",
            },
        ]
    },
    htmlRoom: {
        id: "htmlRoom",
        theme: "roomHTML",
        exits: {
            south: "htmlRoom2",
            east: "westRoom3"
        },
        objects: [
            { type: "wall", x: "25%", y: "50%", variant: "rightSign" },
            { type: "wall", x: "25%", y: "62%", variant: "downSign" },
            { type: "wall", x: "20%", y: "20%", variant: "bricks" },
            { type: "wall", x: "35%", y: "70%", variant: "paraEl" },
            { type: "wall", x: "65%", y: "15%", variant: "paraEl" },
            { type: "wall", x: "80%", y: "30%", variant: "paraEl" },
            { type: "wall", x: "75%", y: "60%", variant: "bricks" },
            { type: "wall", x: "80%", y: "60%", variant: "wheelBarrow" },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "htmlNPC_2",
                text: "Hey there! Welcome to the Construction Zone! We're the backbone of this joint and aint ever had a day where we aren't hard at work!",
            },
            {
                type: "sign",
                x: "10%",
                y: "20%",
                variant: "htmlNPC_2",
                text: "I placed these bricks! Do they anything? Probably!? Either way at least I'm contributing to the Web with some sort of structure, unlike those uptight clowns or nerds out there!",
            },
            {
                type: "sign",
                x: "70%",
                y: "15%",
                variant: "htmlNPC",
                text: "I know this stuff is important but come on we don't need this many <p> elements, pesky <p>'s!",
            }
        ]
    },
    htmlRoom2: {
        id: "htmlRoom2",
        theme: "roomHTML",
        exits: {
            north: "htmlRoom",
            south: "htmlRoom3",
            west: "htmlRoom4"
        },
        objects: [
            { type: "wall", x: "22%", y: "30%", variant: "girderBar" },
            { type: "wall", x: "70%", y: "50%", variant: "upSign" },
            { type: "wall", x: "64%", y: "62%", variant: "leftSign"},
            { type: "wall", x: "70%", y: "62%", variant: "downSign" },
            { type: "wall", x: "45%", y: "40%", variant: "bricks" },
            { type: "wall", x: "50%", y: "40%", variant: "wheelBarrow" },
            {
                type: "sign",
                x: "55%",
                y: "40%",
                variant: "htmlNPC",
                text: "Managed to remove these bricks that felt out of place from some wall at the left side of the site. Don't go telling everyone about this though, my buddy who helped out stopped showing up after word got out, poor fella probably got fired.",
            },
            {
                type: "sign",
                x: "25%",
                y: "65%",
                variant: "pileDiv",
                text: "*Appears to be a pile of div elements. Of course, they're stacked on top of one another.",
            },
            {
                type: "sign",
                x: "90%",
                y: "40%",
                variant: "htmlNPC",
                text: "It's a thankless job, but it's honest work keepin' the Web together. What do I do? I supervise from a distance of course.",
            },
            {
                type: "sign",
                x: "20%",
                y: "65%",
                variant: "htmlNPC_2",
                text: "Why can't I place them side by side!? Hey! Scram! I'm busy workin' here!",
            },
        ]
    },
    htmlRoom3: {
        id: "htmlRoom3",
        theme: "roomHTML",
        exits: {
            north: "htmlRoom2"
        },
        objects: [
            { type: "wall", x: "16%", y: "80%", variant: "upSign" },
            { type: "wall", x: "60%", y: "80%", variant: "lunch" },
            { type: "wall", x: "80%", y: "25%", variant: "lunch" },
            {
                type: "sign",
                x: "85%",
                y: "25%",
                variant: "htmlNPC",
                text: "Should be working? Yes. Am I hungry? Also yes.",
            },
            {
                type: "sign",
                x: "30%",
                y: "50%",
                variant: "htmlNPC_2",
                text: "Bodoque, I brought enough money for the carne asade for lunch!",
            },
            {
                type: "sign",
                x: "35%",
                y: "50%",
                variant: "htmlNPC",
                text: "Hmmmm, I don't know Tulio and Juanin... with such a melancholic amount, you guys only have enough for the salad.",
            },
            {
                type: "sign",
                x: "40%",
                y: "50%",
                variant: "htmlNPC",
                text: "No no wait I have some more, pero quiero carrrrne.",
            },
            {
                type: "sign",
                x: "55%",
                y: "80%",
                variant: "htmlNPC_2",
                text: "My wife packed me a some <p>'s for lunch, my favorite!",
            },
        ]
    },
    htmlRoom4: {
        id: "htmlRoom4",
        theme: "roomHTML",
        exits: {
            west: "htmlSecret",
            east: "htmlRoom2"
        },
        objects: [
            { type: "wall", x: "25%", y: "50%", variant: "rightSign" },
            { type: "wall", x: "20%", y: "80%", variant: "girderBar" },
            { type: "wall", x: "75%", y: "20%", variant: "girderBar" },
            { type: "wall", x: "56%", y: "50%", variant: "girderBar" },
            { 
                type: "sign",
                x: "40%",
                y: "80%",
                variant: "lunch",
                text: "It's an abandoned lunchbox on the floor with a can of Spaghetti Code-io's inside, will you eat it?... no, you have standards."
            },
            { 
                type: "sign",
                x: "50%",
                y: "30%",
                variant: "htmlNPC_2",
                text: "Man it's rough being with the team that creates what we say today on the Web."
            },
            { 
                type: "sign",
                x: "15%",
                y: "10%",
                variant: "htmlNPC",
                text: "Can't help but feel like I'm being watched. Must be the guys upstairs watching us. That's right, those stylist guys up North must be watching feeling jealous over our skills."
            },
        ]
    },
    htmlSecret: {
        id: "htmlSecret",
        theme: "roomSecret",
        exits: {
            east: "htmlRoom4"
        },
        objects: [
            {
                type: "sign",
                x: "45%",
                y: "50%",
                variant: "htmlNPC_2",
                text: "Thanks pal, I was worried I was stuck here for good! Now I won't be canned like those old elements we used to work with. Wonder where they are now considering out supplier just gives us new elements now.",
            }
        ]
    },

    // SOUTH ROUTE (???)
    southRoom: {
        id: "southRoom",
        theme: "roomSecret",
        exits: {
            north: "start",
            south: "southRoom2"
        },
        objects: [
            { type: "wall", x: "60%", y: "50%", variant: "glitter" },
            { type: "wall", x: "40%", y: "70%", variant: "glitter" },
            { type: "wall", x: "35%", y: "50%", variant: "downSign" },
            {
                type: "sign",
                x: "10%",
                y: "30%",
                variant: "altSign",
                text: "On the Web, you must learn that there's endless places to wind up in."
            },
            {
                type: "sign",
                x: "90%",
                y: "60%",
                variant: "htmlNPC",
                text: "After removing those bricks, I got moved here. Dunno why but that's all I know."
            },
            {
                type: "sign",
                x: "90%",
                y: "30%",
                variant: "cssNPC",
                text: "Do you remember me? I told you that I was right! I am no madman!"
            },
            {
                type: "sign",
                x: "10%",
                y: "60%",
                variant: "jsNPC_2",
                text: "While my brethren bathe in the knowledge of the books, they ignore what came before us."
            },
        ]
    },
    southRoom2: {
        id: "southRoom",
        theme: "roomSecret",
        exits: {
            north: "southRoom",
            south: "southRoom3"
        },
        objects: [
            { type: "wall", x: "55%", y: "50%", variant: "glitter" },
            { type: "wall", x: "80%", y: "60%", variant: "glitter" },
            { type: "wall", x: "30%", y: "65%", variant: "glitter" },
            { type: "wall", x: "44%", y: "20%", variant: "glitter" },
            { type: "wall", x: "70%", y: "40%", variant: "downSign" },
            {
                type: "sign",
                x: "10%",
                y: "35%",
                variant: "altSign",
                text: "The Web can and cannot be controlled. The languages that are residing here visualize the web in a way we can understand. Its complexities with interaction, direction, and experience, are aspects that cannot be controlled."
            },
        ]
    },
    southRoom3: {
        id: "southRoom",
        theme: "roomSecret",
        exits: {
            north: "southRoom2",
            south: "secretRoom"
        },
        objects: [
            { type: "wall", x: "60%", y: "30%", variant: "glitter" },
            { type: "wall", x: "70%", y: "50%", variant: "glitter" },
            { type: "wall", x: "20%", y: "35%", variant: "glitter" },
            { type: "wall", x: "72%", y: "40%", variant: "glitter" },
            { type: "wall", x: "20%", y: "60%", variant: "downSign" },
            {
                type: "sign",
                x: "75%",
                y: "55%",
                variant: "altSign",
                text: "The Web is built on a tower of dirt. As more and more gets added, the lower layers becomes forgotten about."
            },
        ]
    },
    secretRoom: {
        id: "southRoom",
        theme: "roomSecreter",
        exits: {
            north: "southRoom3",
        },
        objects: [
            { type: "wall", x: "60%", y: "25%", variant: "glitter" },
            { type: "wall", x: "78%", y: "40%", variant: "glitter" },
            { type: "wall", x: "15%", y: "30%", variant: "glitter" },
            { type: "wall", x: "25%", y: "45%", variant: "glitter" },
            { type: "wall", x: "75%", y: "53%", variant: "wip" },
            { type: "wall", x: "10%", y: "70%", variant: "wip" },
            { type: "wall", x: "60%", y: "35%", variant: "stars" },
            { type: "wall", x: "20%", y: "55%", variant: "stars" },
            { type: "wall", x: "40%", y: "75%", variant: "stars" },
            {
                type: "sign",
                x: "45%",
                y: "50%",
                variant: "gmlNPC",
                text: "Hello, I'm GML, grandfather of HTML. I keep all of the old goodies from the past here, or at least most of them. Thanks for visiting and exploring this much of the Web, I don't get much visitors these days."
            },
            {
                type: "sign",
                x: "50%",
                y: "50%",
                variant: "altSign",
                text: "Thank you for experiencing this part of the Web! This isn't the true end in terms of exploration though, as there are still yet many, many places for you to explore."
            },
        ]
    },
};

// Helper function to clear current room elements
function clearRoomObjects() {
    const elems = document.querySelectorAll(".obstacle, .interactiveObj");
    elems.forEach(el => el.remove());
}

// Helper function to create elements and append them
function createRoomObject(obj) {
    const el = document.createElement("div");

    // All room elements are at least obstacles
    el.classList.add("obstacle");

    // Positioning
    el.style.position = "absolute";

    // Accepting of either pixel or percentage measurements
    if (typeof obj.x === "number") {
        el.style.left = obj.x + "px";
    } else if (typeof obj.x === "string") {
        el.style.left = obj.x;
    }

    if (typeof obj.y === "number") {
        el.style.top = obj.y + "px";
    } else if (typeof obj.y === "string") {
        el.style.top = obj.y;
    }

    // Sprite variants
    if (obj.variant) {
        el.classList.add(obj.variant);
    }

    //If object is meant to be interactable, give it the class and text data.
    if (obj.type === "sign" && obj.text) {
        el.classList.add("interactiveObj");
        el.dataset.text = obj.text;
    }

    document.body.appendChild(el);
}

// Place room objects and position player depending on entry side
function loadRoom(roomId, fromDirection) {
    const room = ROOMS[roomId];
    if (!room) return;

    currentRoomId = roomId;
    clearRoomObjects();

    // ROOM COLORS
    // Clears old class
    document.body.className = "";
    //If the room has a specific theme, change it to that theme
    if (room.theme) {
        document.body.classList.add(room.theme);
    }

    // Create all obstacles for this room
    room.objects.forEach(createRoomObject);

    // Position the player based on which side they came from
    const playerSprite = document.getElementById("playerSprite");
    const spriteWidth = playerSprite.offsetWidth;
    const spriteHeight = playerSprite.offsetHeight;

    // The x and y coords come from playerScript.js
    const margin = 10;

    if (fromDirection === "north") {
        // Came from below -> appear near bottom
        y = window.innerHeight - spriteHeight - margin;
    } else if (fromDirection === "south") {
        // Came from above -> appear near top
        y = margin;
    } else if (fromDirection === "east") {
        // Came from left -> appear near left edge
        x = margin;
    } else if (fromDirection === "west") {
        // Came from right -> appear near right edge
        x = window.innerWidth - spriteWidth - margin;
    } else {
        // Default is the center of the page
        x = window.innerWidth / 2 - spriteWidth / 2;
        y = window.innerHeight / 2 - spriteHeight / 2;
    }

    // Moving the sprite
    playerSprite.style.left = x + "px";
    playerSprite.style.top = y + "px";

    // Re-hooking interactive objects to have their respective text
    if (typeof window.setupInteractiveObjects === "function") {
            window.setupInteractiveObjects();
    }
}

// Function called from playerScript.js when user collides with anything
function changeRoom(direction) {
    const room = ROOMS[currentRoomId];
    if (!room || !room.exits) return;

    const nextRoomId = room.exits[direction];
    // If no exit, nothing happens
    if (!nextRoomId) {
        return;
    }

    loadRoom(nextRoomId, direction);
}