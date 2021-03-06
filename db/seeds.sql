-- Notes Test Seeds
INSERT INTO notes (note, complete) VALUES
    ("test1", 0),
    ("test2", 0);

--  Workout Seeds Added to the Heroku DB
INSERT INTO workouts (day, workout)
VALUES ("1", "-----215 pushups---At 5 different times throughout the day(75 total)"), 
    ("2", "-----20 Squats--- At 5 different times throughout the day(100 total)"),
    ("3", "-----220 Situps--- At 5 different times throughout the day(100 total)"),
    ("4", "-----215 pushups---At 5 different times throughout the day(75 total)"),
    ("5", "-----220 Squats--- At 5 different times throughout the day(100 total)"),
    ("6", "-----220 Situps--- At 5 different times throughout the day(100 total)"),
    ("7", "-----20 pushups, 20 Squats, 20 situps --- At 5 different times throughout the day");


--     Health and Wellness tips, seeds added to the Heroku DB
INSERT INTO tips (name, tip)
VALUES ("Take a break", "Take a break from news and media, when feeling overwhelmed it helps to step back, and disconnect."),
 
("Focus on what you can control", "Make a list of the things you can control and let others go."),

("The AWARE technique", "Accept that your feeling anxious and identify what you're feeling. Watch the anxiety and grade it on a scale. Act Normal as much as you can through talking and controlling your breathing. Repeat the previous 3 steps if needed. Expect the best, You're taking control of the fear instinct and taming/training your feelings and reactions."),

("Stay in the present.", "When your thoughts are starting to spiral, and you worry about the 'What Ifs' ask yourself questions like 'What's true right now?' 'What do I know right now?' 'What can i Control right now?' "),

("Move your body", "Channel your anxiety into moving your body, Get yourself psyched up and get active, by moving your body in a way that feels good, will alleviate the physical effects of anxiety on your body. Extra endorphins and oxygen will help to keep your muscles working and you feeling good.");