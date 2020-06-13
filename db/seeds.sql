-- Notes Test Seeds
INSERT INTO notes (note) VALUES
    ("test1"),
    ("test2");


--  Workout Seeds Added to the Heroku DB
INSERT INTO workouts (day, workout)
VALUES ("Monday", "15 pushups---At 5 different times throughout the day(75 total)"), 
    ("Tuesday", "20 Squats--- At 5 different times throughout the day(100 total)"),
    ("Wednesday", "20 Situps--- At 5 different times throughout the day(100 total)"),
    ("Thursday", "15 pushups---At 5 different times throughout the day(75 total)"),
    ("Friday", "20 Squats--- At 5 different times throughout the day(100 total)"),
    ("Saturday", "20 Situps--- At 5 different times throughout the day(100 total)"),
    ("Sunday", "10 pushups, 20 Squats, 20 situps --- At 5 different times throughout the day");


--     Health and Wellness tips, seeds added to the Heroku DB
INSERT INTO tips (name, tip)
VALUES ("Take a break", "Take a break from news and media, when feeling overwhelmed it helps to step back, and disconnect."),
 
("Focus on what you can control", "make a list of the things you can control and let others go"),

("The AWARE technique", "Accept that your feeling anxious and identify what you're feeling. 
                         Watch the anxiety and grade it on a scale./n 
                         Act Normal as much as you can through talking and controlling your breathing.
                         Repeat the previous 3 steps if needed.
                         Expect the best, You're taking control of the fear instinct and taming/training your feelings and reactions."),

("Grounding exercise", "Put your feet firmly on the floor and imagine that they're like roots of a tree. 
                        Envision that your roots go way down below ground level, and anchor you into place.
                        focus on other tangible things around you. 
                        notice 5 things you can see. 
                        4 things you can touch. 
                        3 things you can hear. 
                        2 things you can smell. 
                        1 thing you can taste."),

("Stay in the present.", "When your thoughts are starting to spiral, and you worry about the 'What Ifs' ask yourself questions like
                         'What's true right now?' 'What do I know right now?' 'What can i Control right now?' "),

("Move your body", "Channel your anxiety into moving your body, Get yourself psyched up and get active,
                    by moving your body in a way that feels good, will alleviate the physical effects of anxiety on your body.
                    Extra endorphins and oxygen will help to keep your muscles working and you feeling good.");

