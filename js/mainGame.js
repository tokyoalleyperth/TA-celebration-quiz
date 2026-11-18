const gameData = {
    "1": {
        "text": "<p><span><strong>TOUKO:</strong></span></p>"+
            "<p><span>Today is November 19th &mdash; Sensei&apos;s birthday!</span></p>" +
"<p><span>Well&hellip; it&apos;s my birthday, too!</span></p>"+
"<p><span>Sensei and I have always shared our birthday celebrations, but this year, I want to make things extra special just for him.</span></p>"+
"<p><span>So, I&apos;ve been busy planning a BIG surprise birthday party, with a little help from all my friends!</span></p>"+
"<p><span>Kaasan is keeping Sensei occupied with a fun day out for now, but they&apos;ll be back before we know it. Eek! There&apos;s still so much to do!</span></p>"+
"<p><span>I&apos;d better check in with everyone and see how the preparations are coming along.</span></p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [2, []],
        }
    },

    "2": {
        "text": "<p><strong><span>HOSHI:</span></strong></p>"+
"<p><span>Hey, Touko, lookin&rsquo; cute!</span></p>" +
"<p><br></p>" +
"<p><strong><span>TOUKO:</span></strong></p>" +
"<p><span>Hehe, thanks, Hoshi! And thanks for coming to help out today. We could definitely use someone with your expertise!</span></p>" +
"<p><span>(This is Hoshi, probably the most stylish person I know! She&rsquo;s always looking out for me like a big sister.)</span></p>" +
"<p><br></p>" +
"<p><strong><span>HOSHI:</span></strong></p>" +
"<p><span>Oh, don&apos;t mention it, darling! I&apos;ve done this sort of thing a million times. Party planning is practically second nature to me!</span></p>" +
"<p><span>Not that I get enough sleep with all the parties.</span></p>" +
"<p><br></p>" +
"<p><strong><span>TOUKO:</span></strong></p>" +
"<p><span>How ironic! Just promise me you won&apos;t go overboard like last time. Remember, this is only a&mdash;</span></p>" +
"<p><br></p>" +
"<p><strong><span>HOSHI:</span></strong></p>" +
"<p><span>A birthday party. Yes, yes, I know! Don&apos;t worry, I&apos;ve got everything under control. We&apos;ll save the REAL party for the afterparty tonight!</span></p>" +
"<p><br></p>" +
"<p><strong><span>TOUKO:</span></strong></p>" +
"<p><span>You&rsquo;re in charge of this year&rsquo;s theme, right? What have you got in mind?</span></p>" +
"<p><br></p>" +
"<p><strong><span>HOSHI:</span></strong></p>" +
"<p><span>Oh I have so many ideas, but I&rsquo;ve managed to narrow it down to my top four! I was hoping to get your input, too.</span></p>" +
"<p><br></p>" +
"<p><strong><span>TOUKO:</span></strong></p>" +
"<p><span>My input?</span></p>" +
"<p><br></p>" +
"<p><strong><span>HOSHI:</span></strong></p>" +
"<p><span>Why not? It&rsquo;s your birthday, too, silly!</span></p>" +
"<p><br></p>" +
"<p><strong><span>TOUKO:</span></strong></p>" +
"<p><span>I guess&hellip; Sensei and I have always shared a party, but this year I want to make it extra special just for him.</span></p>" +
"<p><br></p>" +
"<p><strong><span>HOSHI:</span></strong></p>" +
            "<p><span>Well that&rsquo;s perfect, you know Sensei the best! So what do you think?</span></p>",
        "image": "images/Touko_Hoshi.png",
        "choices": {
            "NEXT": [3, []],
        }
    },

    "3": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The party vibes should be…</span></p>",
        "image": "images/Touko_Hoshi.png",
"choices": {
    "Bright and cute": [4, ["touko", "annya", "maka"]],
    "Cool and chic": [4, ["kaasan", "hoshi", "pog"]],
    "Bold and loud": [4, ["wayville", "sprite", "bunyeon"]],
    "Warm and cozy": [4, ["sensei", "tousan", "bristle"]],
        }
    },

    "4": {
        "text": "<p><strong>HOSHI:</strong></p>" +
"<p>Oh I&rsquo;m so excited, Touko! Now that we've got the theme sorted, it's time to tackle the most important detail of all&hellip;</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>The cake?</p>" +
"<p><strong>HOSHI:</strong></p>" +
"<p>Nope.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>The decorations?</p>" +
"<p><strong>HOSHI:</strong></p>" +
"<p>No, silly! Your outfit!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>My outfit!?</p>" +
"<p><strong>HOSHI:</strong></p>" +
"<p>Like I said, it&rsquo;s your birthday, too! You can't let Sensei have all the birthday spotlight! Not that we need a special occasion to dress up.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Easy for you to say! I spend most of my days covered in paint, ink and all sorts of art supplies&hellip;</p>" +
"<p><strong>HOSHI:</strong></p>" +
"<p>That's what aprons are for! Besides, I think someone deserves a little wardrobe refresh!</p>",
        "image": "images/Touko_Hoshi.png",
        "choices": {
            "NEXT": [5, []],
        }
    },

    "5": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The dress code should be…</span></p>",
        "image": "images/Touko_Hoshi.png",
"choices": {
    "Fun and playful": [6, ["touko", "sprite", "pog"]],
    "Comfy and casual": [6, ["tousan", "wayville", "bristle"]],
    "Sharp and stylish": [6, ["hoshi", "annya", "bunyeon"]],
    "Formal and fancy": [6, ["sensei", "kaasan", "maka"]],
        }
    },

    "6": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>Thanks for everything, Hoshi, you really didn&rsquo;t have to go the extra mile.</p>" +
"<p><strong>HOSHI:</strong></p>" +
"<p>What kind of party queen would I be if I didn&rsquo;t? I won&rsquo;t keep you any longer, Touko. Leave the rest up to me!&nbsp;</p>" ,
        "image": "images/Touko_Hoshi.png",
        "choices": {
            "NEXT": [7, []],
        }
    },


    "7": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>Hey, Annya! How are the decorations coming along?</p>" +
"<p><strong>ANNYA:</strong></p>" +
"<p>They're coming along wonderfully! Maybe a little TOO wonderfully&hellip; Ohhh, I just can't decide what to go with!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Well, you can never have too much of a good thing, right?</p>" +
"<p>(This is Annya! She's always full of good vibes and knows exactly how to make things look pretty. I've always admired her sense of style!)</p>" +
"<p><strong>ANNYA:</strong></p>" +
"<p>Touko&hellip; there <em>is </em>such thing as too much of a good thing. That&rsquo;s the point of the saying!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh! Hehe&hellip; I knew that. Sort of.</p>" +
"<p><strong>ANNYA:</strong></p>" +
"<p>Anyway, I've narrowed it down to just a few options. And since it's your birthday, too, I thought I'd let you have the final say!</p>",
        "image": "images/Touko_Annya.png",
        "choices": {
            "NEXT": [8, []],
        }
    },

    "8": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The main decoration should be…</span></p>",
        "image": "images/Touko_Annya.png",
"choices": {
    "Balloons": [9, ["tousan", "hoshi", "bunyeon"]],
    "Streamers": [9, ["touko", "pog", "maka"]],
    "Pennants": [9, ["kaasan", "wayville", "sprite"]],
    "Flowers": [9, ["sensei", "bristle", "annya"]],
        }
    },

    "9": {
        "text":
"<p><strong>ANNYA:</strong></p>" +
"<p>Oh, I see the vision! See... the vision&hellip;&nbsp;</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>What's with the sudden dramatic pause, Annya?</p>" +
"<p><strong>ANNYA:</strong></p>" +
"<p>Well&hellip; there's just ONE tiny problem. We've put all this effort into making everything look good, but what happens when the sun goes down? Nobody will be able to see our beautiful decorations!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Can&rsquo;t we just turn on the ceiling light?</p>" +
"<p><strong>ANNYA:</strong></p>" +
"<p>A boring old light bulb? Now, that&rsquo;s no fun at all! C&rsquo;mon Touko, I know you can get more creative than that.</p>" ,
        "image": "images/Touko_Annya.png",
        "choices": {
            "NEXT": [10, []],
        }
    },


    "10": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>I guess so… instead of a plain ol’ light bulb, we can use…</span></p>",
        "image": "images/Touko_Annya.png",
"choices": {
    "Lanterns": [11, ["sensei", "annya", "maka"]],
    "Fairy lights": [11, ["touko", "bunyeon", "bristle"]],
    "Neon lights": [11, ["kaasan", "wayville", "pog"]],
    "Disco lights": [11, ["tousan", "hoshi", "sprite"]],
        }
    },

    "11": {
        "text":
"<p><strong>ANNYA:</strong></p>" +
"<p>That&rsquo;s more like it! Ooh, this is so exciting, I&rsquo;m gonna get started on it right away!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Thanks, Annya!</p>",
        "image": "images/Touko_Annya.png",
        "choices": {
            "NEXT": [12, []],
        }
    },

    "12": {
        "text":
"<p><strong>TOUKO:</strong></p>"+
"<p>Hey, Bristle! Thanks so much for coming to help out. I'm really glad you could make it!</p>"+
"<p><strong>BRISTLE:</strong></p>"+
"<p>Of course, Touko! I'd never miss a chance to help a fellow furry friend!</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>Looks like you're almost finished with the party favours! You're always so organised!</p>"+
"<p>(This is Bristle. They&rsquo;re <em>so </em>talented. I like to think we inspire each other to keep improving our art together!)</p>"+
"<p><strong>BRISTLE:</strong></p>"+
"<p>Yes, we got the gift bags, the party hats, the poppers and the blowers! But there&rsquo;s just one more thing&hellip;</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>One more!? Bristle, I think you&rsquo;ve already done more than enough!</p>"+
"<p><strong>BRISTLE:</strong></p>"+
"<p>Well, there&rsquo;s room to fit just one more thing, but I can&rsquo;t choose! Do you think you can help me out here?</p>",
        "image": "images/Touko_Bristle.png",
        "choices": {
            "NEXT": [13, []],
        }
    },

        
    "13": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The last party favour should be…</span></p>",
        "image": "images/Touko_Bristle.png",   
"choices": {
    "Lollies": [14, ["tousan", "annya", "sprite"]],
    "Thank-you cards": [14, ["sensei", "kaasan", "bristle"]],
    "Keychains": [14, ["touko", "hoshi", "maka"]],
    "Mini toys": [14, ["wayville", "pog", "bunyeon"]],
        }
    },

    "14": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>You&rsquo;re always going above and beyond, Bristle.</p>" +
"<p><strong>BRISTLE:</strong></p>" +
"<p>Aw, shucks, Touko! You know I can&rsquo;t help it. I just love putting together little things that'll make people smile!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Need any help with packing the gift bags?</p>" +
"<p><strong>BRISTLE:</strong></p>" +
"<p>Nah, I&rsquo;m good, but you should take it easy and relax, Touko. It&rsquo;s your birthday too!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>I&rsquo;ll think about it&hellip; riiight after I check in on everyone else!</p>",
        "image": "images/Touko_Bristle.png",
        "choices": {
            "NEXT": [15, []],
        }
    },



    "15": {
        "text":
"<p><strong>TOUKO:</strong></p>"+
"<p>Man, I am <em>starving</em>!&nbsp;</p>"+
"<p><strong>MAKA:</strong></p>"+
"<p>Hands off the snacks!</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>Awww, Maka&hellip; Just one little bite?</p>"+
"<p>(This is Maka. She&rsquo;s so cool and composed&hellip; whenever I&rsquo;m flustered, I try to be more like her!)</p>"+
"<p><strong>MAKA:</strong></p>"+
"<p>I know you, Touko. If you start snacking, there might not be any left for everyone else!</p>"+
"<p>Hmm&hellip; but you do raise a good point...</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>Oh yeah?</p>"+
"<p><strong>MAKA:</strong></p>"+
"<p>I should definitely order some extra food, just in case you can&rsquo;t help yourself.</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>H-hey!</p>"+
"<p><strong>MAKA:</strong></p>"+
"<p>Don&rsquo;t worry, you can choose the catering this time! After all, it&rsquo;s your birthday too.</p>",
        "image": "images/Touko_Maka.png",
        "choices": {
            "NEXT": [16, []],
        }
    },

    "16": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The catering should be…</span></p>",
        "image": "images/Touko_Maka.png",
"choices": {
    "Cookies & cupcakes": [17, ["tousan", "sprite", "annya"]],
    "Burgers & pizza": [17, ["touko", "hoshi", "pog"]],
    "Grazing platter with dips": [17, ["kaasan", "bristle", "maka"]],
    "Popcorn & pretzels": [17, ["sensei", "wayville", "bunyeon"]],
        }
    },

    "17" :{
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>And the drinks…</span></p>",
        "image": "images/Touko_Maka.png",
"choices": {
    "Soft drinks": [18, ["touko", "sprite", "annya"]],
    "Energy drinks": [18, ["wayville", "pog", "bunyeon"]],
    "Punch": [18, ["hoshi", "kaasan", "tousan"]],
    "Tea": [18, ["sensei", "bristle", "maka"]],
        }
    },

    "18": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>Hmm&hellip; Do you think that'll be enough food and drinks for everyone?</p>" +
"<p><strong>MAKA:</strong></p>" +
"<p>Well, I don't know. How much do you plan to snack on before the party?</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Maka!</p>" +
"<p><strong>MAKA:</strong></p>" +
"<p>I'm just teasing! Don't worry, there will be enough of a feast for everyone.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Thanks Maka, I can&rsquo;t wait!</p>",
        "image": "images/Touko_Maka.png",
        "choices": {
            "NEXT": [19, []],
        }
    },

    "19": {
        "text":
"<p><strong>TOUSAN:</strong></p>" +
"<p>Hey there, kiddo!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Hi, Dad! Thanks so much for helping out!</p>" +
"<p>(This is Tousan, my dad! He's hands down the best cook in the whole wide world. If anyone can whip up a delicious birthday feast, it's him!)</p>" +
"<p><strong>TOUSAN:</strong></p>" +
"<p>Of course! Anything for our favourite little pooch!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Daaad! You know Sensei doesn't like being called a pooch!</p>" +
"<p><strong>TOUSAN:</strong></p>" +
"<p>Well, he's not here to complain about it, is he? Hehe!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh, I'm sure he'll forgive you once he finds out there's cake! Speaking of which&hellip; How's the cake coming along?</p>" +
"<p><strong>TOUSAN:</strong></p>" +
"<p>Well&hellip; funny you should ask. I haven't quite started yet.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>WHAT?</p>" +
"<p><strong>TOUSAN:</strong></p>" +
"<p>C&rsquo;mon, Touko, have a little faith in your ol&rsquo; pa, would you?</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>O-of course&hellip; But you're sure it'll be ready in time, right?</p>" +
"<p><strong>TOUSAN:</strong></p>" +
"<p>It will be perfectly fresh, I promise! In fact, I was just about to start but I&rsquo;m having a little trouble choosing the flavour. You know how Sensei has a pretty worldly palette.</p>" ,
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [20, []],
        }
    },

    "20" :{
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>That is true! I think the flavour of the cake should be…</span></p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
"choices": {
    "Vanilla": [21, ["sensei", "bristle", "maka"]],
    "Chocolate": [21, ["tousan", "wayville", "pog"]],
    "Red Velvet": [21, ["hoshi", "kaasan", "bunyeon"]],
    "Funfetti": [21, ["touko", "sprite", "annya"]],
                }
    },

    "21": {
        "text":
"<p><strong>TOUSAN:</strong></p>" +
"<p>Now that&rsquo;s a good kid. Go on, now! I&rsquo;ve got a deadline and a cake that needs baking now.&nbsp;</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Never doubted you for a second.</p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [22, []],
        }
    },

    "22": {
        "text":
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Touko! Over here!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>What&rsquo;s up, Wayville? Can&rsquo;t wait to see what game you have planned for us tonight!</p>" +
"<p>(This is Wayville! He's one of the smartest people I know. Unfortunately, that also means I almost <em>never </em>win against him at games&hellip;)</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>As a matter of fact, I've got just the thing! It's a new game I discovered recently. The rules are a little lengthy, but trust me, it's super fun!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Wayville&hellip; Is that a rulebook or a dictionary?!</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>What&rsquo;s the problem?</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>At this rate, we'll be celebrating the next birthday before we even finish learning the rules!</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Hmm&hellip; Fair point. How about a quick game of rock-paper-scissors? Winner gets to choose tonight's game!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Deal!</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>[Paper!]</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>[Rock!]</p>" +
"<p>Aw man, you win! Fair and square.&nbsp;</p>" +
"<p>(Seriously&hellip; Why do I keep forgetting he's practically unbeatable?!)</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Haha! Well played, Touko! But you know what? I think you might be right about that other game. I got a little carried away with my enthusiasm.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Just a little? Hehe! Do you have anything that's a bit easier to pick up?</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Oh, absolutely! I brought my entire game collection, just in case!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Your&hellip; entire collection? Wayville! That's enough games to fill an entire arcade!</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Hey, you can never have too many options! Whatever you're in the mood for, I've got something!</p>",
        "image": "images/Touko_Wayville.png",
        "choices": {
            "NEXT": [23, []],
        }
    },

    "23" :{
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>How about a game everyone can play…</span></p>",
        "image": "images/Touko_Wayville.png",
"choices": {
    "Video games": [24, ["bunyeon", "sprite", "pog"]],
    "Board games": [24, ["tousan", "wayville", "annya"]],
    "Drawing games": [24, ["touko", "sensei", "bristle"]],
    "Card games": [24, ["hoshi", "kaasan", "maka"]],
        }
    },

    "24": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>How about this one?</p>" +
"<p><strong>WAYVILLE:</strong></p>" +
"<p>Sounds like a real winner to me! Now, if you'll excuse me, I have approximately one-hundred-and-one other games to unpack!</p>",
        "image": "images/Touko_Wayville.png",
        "choices": {
            "NEXT": [25, []],
        }
    },

    "25": {
        "text":
"<p><strong>BUNYEON:</strong></p>"+
"<p>Oh, Touko! Perfect timing! I was just about to come find you!</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>Hi Bunyeon, the dance floor looks great!</p>"+
"<p>(This is Bunyeon. She&rsquo;s always so trendy! She&rsquo;s on her phone right now&hellip;)</p>"+
"<p>Are you all finished setting things up for today?</p>"+
"<p><strong>BUNYEON:</strong></p>"+
"<p>Not quite. I&rsquo;m still putting together the perfect party playlist! But I haven&rsquo;t settled on what kind of vibe we should go for.&nbsp;</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>Hmm&hellip; How about something upbeat and energetic? You know, music that'll get everyone on their feet and dancing!</p>"+
"<p><strong>BUNYEON:</strong></p>"+
"<p>Ooh, that's one option! Or maybe something more chill and laid-back, so everyone can relax, mingle and have a good chat?</p>"+
"<p><strong>TOUKO:</strong></p>"+
"<p>That's a good point! Both sound pretty fun. How are we supposed to choose?</p>",
        "image": "images/Touko_Bunyeon.png",
        "choices": {
            "NEXT": [26, []],
        }
    },

    "26": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The vibe should be…</span></p>",
        "image": "images/Touko_Bunyeon.png",
"choices": {
    "Energetic": [27, ["touko", "hoshi", "sprite", "pog", "annya", "bunyeon"]],
    "Chill": [29, ["sensei", "kaasan", "tousan", "wayville", "bristle", "maka"]],
        }
    },

    "27" : {
        "text": "<p><span><strong>BUNYEON:</strong></span></p><p><span>Sounds great! Let’s narrow it down to a genre.</span></p>",
        "image": "images/Touko_Bunyeon.png",
"choices": {
    "Pop hits": [28, ["touko", "bristle", "bunyeon"]],
    "Electronic": [28, ["hoshi", "pog", "annya"]],
    "Disco": [28, ["sensei", "tousan", "sprite"]],
    "Rock": [28, ["wayville", "kaasan", "maka"]],
        }
    },

    "28": {
        "text":
"<p><strong>BUNYEON:</strong></p>" +
"<p>Ohhh yeah, I feel the vibe! Upbeat, energetic and full of life! This party's going to be a blast!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Just don't make it <em>too </em>obnoxious, or we'll have the neighbours knocking on our door!</p>" +
"<p><strong>BUNYEON:</strong></p>" +
"<p>Don't worry, Touko! I've got great taste, you can trust me!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Of course I can! I wouldn't have it any other way. Thanks, Bunyeon!</p>",
        "image": "images/Touko_Bunyeon.png",
        "choices": {
            "NEXT": [31, []],
        }
    },

    "29" : {
        "text": "<p><span><strong>BUNYEON:</strong></span></p><p><span>Sounds great! Let’s narrow it down to a genre.</span></p>",
        "image": "images/Touko_Bunyeon.png",
"choices":{
    "House": [30, ["hoshi", "pog", "annya"]],
    "Lo-Fi": [30, ["sensei", "wayville", "maka"]],
    "Jazz": [30, ["touko", "kaasan", "sprite"]],
    "Acoustic": [30, ["tousan", "bristle", "bunyeon"]],
        }
    },


    "30": {
        "text":
            "<p><strong>BUNYEON:</strong></p>" +
            "<p>Oohhh, I can totally feel the vibe! Something chill, cosy and laid-back. It's going to be such a lovely night!</p>" +
            "<p><strong>TOUKO:</strong></p>" +
            "<p>Hehe, just don't make it too relaxing. I don't want everyone snoozing before the cake comes out!</p>" +
            "<p><strong>BUNYEON:</strong></p>" +
            "<p>Don't worry, Touko! I've got great taste, you can trust me!</p>" +
            "<p><strong>TOUKO:</strong></p>" +
            "<p>Of course I can! I wouldn't have it any other way. Thanks, Bunyeon!</p>",
        "image": "images/Touko_Bunyeon.png",
        "choices": {
            "NEXT": [31, []],
        }
    },


    "31": {
        "text":
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh, hi, Pog! What have you been up to?</p>" +
"<p>(This is Pog! They're a talented little pup, just like Sensei. Luckily, I'm fluent in borfs, so understanding the arf dialect isn't too ruff!)</p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Ooh! Sounds like you've been working super hard!</p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>You're right! These are all great options. How am I supposed to choose?<br /><br /></p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Huh? You want me to pick one?</p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Because it&rsquo;s my birthday, too? Aww, thanks, Pog!</p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>",
        "image": "images/Touko_Pog.png",
        "choices": {
            "NEXT": [32, []],
        }
    },

    "32": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>The activity tonight should be…</span></p>",
        "image": "images/Touko_Pog.png",
"choices": {
    "Arts & crafts": [33, ["touko", "sensei", "bristle"]],
    "Photobooth": [33, ["hoshi", "pog", "maka"]],
    "Karaoke": [33, ["tousan", "annya", "bunyeon"]],
    "Movie": [33, ["kaasan", "wayville", "sprite"]],
        }
    },


    "33": {
        "text":
"<p><strong>POG:</strong></p>" +
"<p>Arf, arf, arf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Hehe! I was thinking the same thing! That's perfect! Thanks for your help, Pog!</p>" +
"<p><strong>POG:</strong></p>" +
"<p>Arf!</p>",
        "image": "images/Touko_Pog.png",
        "choices": {
            "NEXT": [34, []],
        }
    },


    "34": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>Hi, Sprite!</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Hi.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>What&rsquo;re you doing, kiddo?</p>" +
"<p>(This is Sprite. He might be a kid, but he&rsquo;s still a dear friend to both me, and Sensei!)&nbsp;</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Row-bwox!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh!</p>" +
"<p>(He&rsquo;s playing a game on Wayville&rsquo;s phone.)</p>" +
"<p>Hey, Sprite, do you want to help with the party?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>&hellip;&nbsp;</p>" +
"<p>Okay!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>How about&hellip; do you want to help me pick a present for Sensei?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Present!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Yeah, present! It&rsquo;s Sensei&rsquo;s birthday, so let&rsquo;s get him something nice, okay? What do you think?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Hmm&hellip;&nbsp;</p>" +
"<p>Teddy!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Teddy? You mean, like a teddy bear?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Yes!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>I think Sensei might be a little too old for teddy bears, buddy. Do you have any other ideas?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Hmm&hellip;</p>" +
"<p>Dinosaur!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh, like a toy dinosaur?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>No. Dinosaur.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>&hellip;</p>" +
"<p>Sprite, are these things <em>you </em>want as a present?</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Yes!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Ah&hellip;</p>" +
"<p>Well, I&rsquo;ll remember all that when it&rsquo;s <em>your </em>birthday. But today is Sensei&rsquo;s birthday, so we have to get him something he will like!</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Hmm&hellip;</p>" +
"<p>Slime!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Yeah, uh&hellip; slime is cool!&nbsp;</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Yes.</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>(How can I get him back on track?)</p>",
        "image": "images/Touko_Sprite.png",
        "choices": {
            "NEXT": [35, []],
        }
    },

    "35" : {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span>Hey buddy, what do you think about getting this for Sensei’s birthday?</span></p>",
        "image": "images/Touko_Sprite.png",
        "choices": {
            "New paint": [36, ["wayville", "bristle", "bunyeon"]],
            "Art from Touko": [36, ["touko", "sensei", "kaasan"]],
            "Dog-sized smock": [36, ["hoshi", "annya", "maka"]],
            "Doggy biscuits": [36, ["tousan", "sprite", "pog"]],
        }
    },


    "36": {
        "text":
"<p><strong>SPRITE:</strong></p>" +
"<p>Yes, yes!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Yeah, that&rsquo;s right! Thanks for helping me, Sprite!</p>" +
"<p><strong>SPRITE:</strong></p>" +
"<p>Okay!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>&hellip;</p>" +
"<p>(He&rsquo;s gone back to playing his game. Well, at least Sensei&rsquo;s present is sorted! Kinda..)</p>",
        "image": "images/Touko_Sprite.png",
        "choices": {
            "NEXT": [37, []],
        }
    },


    "37": {
        "text":
"<p><strong>TOUKO:</strong></p>" +
"<p>Oh no, Sensei will be home any minute, and I completely forgot to buy wrapping paper!</p>" +
"<p>Hmm&hellip; I guess I could use these leftover scraps, but&hellip; it's looking a little plain, don't you think?</p>" +
"<p>Eek! There's no time to waste! It's going to be a last-minute makeover, but I can't let Sensei's present look this boring!</p>" +
"<p>Time to get crafty!</p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [38, []],
        }
    },

    "38": {
        "text": "<p><span><strong>TOUKO:</strong></span></p><p><span> I’ll draw this pattern on the wrapping paper…</span></p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "Paw prints": [39, ["sensei", "sprite", "pog"]],
            "Simple pattern": [39, ["touko", "wayville", "bunyeon"]],
            "Watercolour splash": [39, ["tousan", "annya", "bristle"]],
            "Traditional": [39, ["hoshi", "kaasan", "maka"]],
        }
    },


    "39": {
        "text":
"<p><strong>TOUSAN:</strong></p>" +
"<p>Quick, quick! Everybody hide! Sensei's coming!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Eeeek! Places, everyone! Act natural!</p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [40, []],
        }
    },


    "40": {
        "text":
"<p><strong>SENSEI:</strong></p>" +
"<p>Borf?</p>" +
"<p>&hellip;</p>" +
"<p>&hellip;</p>" +
"<p>&hellip;</p>",
        "image": "images/Tokyo Alley Sensei BASECOLOUR.png",
        "choices": {
            "NEXT": [41, []],
        }
    },


    "41": {
        "text":
"<p><strong>EVERYONE:</strong></p>" +
"<p>SURPRIIIISE!!!</p>" +
"<p><strong>SENSEI:</strong></p>" +
"<p>BORF?!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Happy birthday, Sensei!</p>" +
"<p><strong>SENSEI:</strong></p>" +
"<p>Borf?</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Hehe! That's right! I planned a surprise birthday party just for you! I wanted to make today extra special for my very best friend!</p>" +
"<p><strong>SENSEI:</strong></p>" +
"<p>Borf! Borf, borf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Huh? What's that?</p>" +
"<p><strong>SENSEI:</strong></p>" +
"<p>Borf!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>A present? For me?!</p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [42, []],
        }
    },


    "42": {
        "text":
"<p><strong>KAASAN:</strong></p>" +
"<p>Of course! What do you think we spent the whole day shopping for? After all, it's your birthday too, Touko!</p>" +
"<p><strong>TOUKO:</strong></p>" +
"<p>Awww! You got me a present, too? Thank you! You really didn't have to!</p>" +
"<p><strong>SENSEI:</strong></p>" +
"<p>Borf!</p>" +
"<p><strong>KAASAN:</strong></p>" +
"<p>Hehe! I think someone's getting impatient. Go on, Touko, open it!</p>",
        "image": "images/Tokyo Alley Touko BASECOLOUR.png",
        "choices": {
            "NEXT": [0, []],
        }
    },


};
const personalities = { 
    "touko": 0,
    "sensei": 0,
    "tousan": 0,
    "kaasan": 0,
    "hoshi": 0,
    "wayville": 0,
    "sprite": 0,
    "pog": 0,
    "bristle": 0,
    "annya": 0,
    "maka": 0,
    "bunyeon": 0,
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.innerHTML = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const results = document.getElementById('results');
    const choicesContainer = document.getElementById('choices');
    const veggieImagePath = `images/id_cards/${maxVeggie}.png`;

    // Preload the image
    const img = new Image();
    img.src = veggieImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
        text.innerHTML = "";
    
        results.textContent = "Check out your present! Don't lose it! (Right click or hold the image to save)";
        results.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my Tokyo Alley Celebration Present! You can see yours at https://tokyoalleyperth.github.io/TA-celebration-quiz/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        results.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.scroll-box').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
