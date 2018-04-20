exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        {id: 1, questions_Id: 1, response: '106', correct: 'no', description: '...nope.'},
        {id: 2, questions_Id: 1, response: '125', correct: 'yes', description: 'woohoo!'},
        {id: 3, questions_Id: 1, response: '83', correct: 'no', description: 'nice try.'},
        {id: 4, questions_Id: 1, response: '117', correct: 'no', description: 'getting close, but nah.'},
        {id: 5, questions_Id: 2, response: 'Yup', correct: 'yes', description: 'Good thing I was alone, because I am not a good singer.'},
        {id: 6, questions_Id: 2, response: 'Not a chance', correct: 'no', description: 'If you are riding with me, you probably wish I did not sing...'},
        {id: 7, questions_Id: 3, response: 'Jelly Bellies', correct: 'no', description: 'had to resort to these once, but not a go to.'},
        {id: 8, questions_Id: 3, response: 'Peanut Butter Sandwiches', correct: 'yes', description: 'Yup, peanut butter is my JAM...just mising jam. And if I was real lucky I could throw in a banana too!'},
        {id: 9, questions_Id: 3, response: 'Trail Mix', correct: 'no', description: 'I am addicted to trail-mix, so I do not buy it. It would not last long enough.'},
        {id: 10, questions_Id: 3, response: 'Granola Bars', correct: 'no', description: 'A good guess, but nope.'},
        {id: 11, questions_Id: 4, response: '7', correct: 'no', description: '7 peices of roadkill seems like a lot does it not?.'},
        {id: 12, questions_Id: 4, response: '16', correct: 'no', description: 'Okay, wow that is a lot of dead animals. But not the right answer.'},
        {id: 13, questions_Id: 4, response: '4', correct: 'no', description: 'I wish it was this low.'},
        {id: 14, questions_Id: 4, response: '33', correct: 'yes', description: '33!? That is a huge number!!!...but sadly you are correct. I have never seen so much roadkill in my life! Pretty sad.'},
        {id: 15, questions_Id: 5, response: 'Doritos, Snickers, and Coke', correct: 'yes', description: 'Yup, this stuff is locket rocket fuel when you got long drives ahead of you.'},
        {id: 16, questions_Id: 5, response: 'canned pasta, nuts, Red Bull', correct: 'no', description: 'I did have a lot of cold canned pasta, but hard to eat while driving.'},
        {id: 17, questions_Id: 5, response: 'Doritos, Doritos, and Doritos', correct: 'no', description: 'This sounds like a dream...just missing pizza'},
        {id: 18, questions_Id: 5, response: 'Big Mac, Quarter Pounder, fries and a Coke', correct: 'no', description: 'Psh, I do not eat McDonalds, I am being healthy...'},
        {id: 19, questions_Id: 6, response: '/images/map_correct.png', correct: 'yes', description: 'Yay, you got it!'},
        {id: 20, questions_Id: 6, response: '/images/map_wrong1.png', correct: 'no', description: 'Not quite.'},
        {id: 21, questions_Id: 6, response: '/images/map_wrong2.png', correct: 'no', description: 'Nope.'},
        {id: 22, questions_Id: 6, response: '/images/map_wrong3.png', correct: 'no', description: 'You are not correct.'},
        {id: 23, questions_Id: 7, response: '2625 km', correct: 'yes', description: 'Nailed it!'},
        {id: 24, questions_Id: 7, response: '363,104 km', correct: 'no', description: '...That is actually like driving to the moon.'},
        {id: 25, questions_Id: 7, response: '15,761 km', correct: 'no', description: 'New Zealand is not that small'},
        {id: 26, questions_Id: 7, response: '200 km', correct: 'no', description: 'Nadda'},
        {id: 27, questions_Id: 8, response: 'drive to Milford Sounds', correct: 'yes', description: 'This was by far the coolest drive. I stopped practically every 10 min to get out and look at the views.'},
        {id: 28, questions_Id: 8, response: 'Arthurs Pass', correct: 'no', description: 'This was an awesome drive, but is nothing compared to something else on the list.'},
        {id: 29, questions_Id: 8, response: 'Tongariro National Park', correct: 'no', description: 'Pretty mindblowing to see the volcanos pop out of the flat lands, but not epic enough.'},
        {id: 30, questions_Id: 8, response: 'West Coast', correct: 'no', description: 'Very Jurassic Park like, but still not as good as something else.'},
        {id: 31, questions_Id: 9, response: '0, I am obviously to cool to listen to Beibs', correct: 'no', description: 'Thanks, but no I am not that cool.'},
        {id: 32, questions_Id: 9, response: '10, I am a BELIEBER!', correct: 'no', description: 'Not quiet a Belieber either. But he has some cool stuff.'},
        {id: 33, questions_Id: 9, response: '3', correct: 'yes', description: 'And I know all (or at least most) of the words.'},
        {id: 34, questions_Id: 9, response: '5', correct: 'no', description: 'Solid guess'},
        {id: 35, questions_Id: 10, response: '5', correct: 'no', description: 'No...Is it weird that I would keep track of something like this?'},
        {id: 36, questions_Id: 10, response: '0', correct: 'yes', description: 'When you are driving hours on end. There is no point in pressing skip'},
        {id: 37, questions_Id: 10, response: '12', correct: 'no', description: '12 IS divisble by 2 but NOT the amount of skips.'},
        {id: 38, questions_Id: 10, response: '9', correct: 'no', description: '9 is NOT divibisble by 2 and is NOT the amount of skips'},
        {id: 39, questions_Id: 11, response: '0', correct: 'no', description: 'Correct. Responsibility and safety is COOL!'},
        {id: 40, questions_Id: 11, response: '1', correct: 'no', description: 'You must think I am a rebel.'},
        {id: 41, questions_Id: 11, response: '2', correct: 'no', description: 'I sure diiiid...not get 2 speeding tickets.'},
        {id: 42, questions_Id: 11, response: '10', correct: 'no', description: 'Woah! You must think I am crazy!'},
        {id: 43, questions_Id: 12, response: '131', correct: 'no', description: 'Nah'},
        {id: 44, questions_Id: 12, response: '984', correct: 'no', description: 'My tourist level is not quite at expert'},
        {id: 45, questions_Id: 12, response: '676', correct: 'yes', description: 'Yup...I went a little nuts on the photo taking'},
        {id: 46, questions_Id: 12, response: '333', correct: 'no', description: 'three three three, no no no'},
        {id: 47, questions_Id: 13, response: '1031', correct: 'no', description: 'This is a larger number then the choices given for total number of pictures...sooooo nah'},
        {id: 48, questions_Id: 13, response: '113', correct: 'yes', description: 'Yeah budday! I probably took more selifes in these two weeks then I have in my entire life'},
        {id: 49, questions_Id: 13, response: '42', correct: 'no', description: 'It is the answer to life, but not to my selfies'},
        {id: 50, questions_Id: 13, response: '117', correct: 'no', description: 'Master Cheif, Halo, wicked game, but not correct.'},
        {id: 51, questions_Id: 14, response: '10.3 km', correct: 'no', description: 'I am not that soft. Cmon!'},
        {id: 52, questions_Id: 14, response: '50.5 km', correct: 'no', description: 'I wish I was cool enough to do something big like that.'},
        {id: 53, questions_Id: 14, response: '69.69 km', correct: 'no', description: 'Lawls, but no.'},
        {id: 54, questions_Id: 14, response: '20.69 km', correct: 'yes', description: 'Yup, Tongariro Crossing was my biggest day.'},
        {id: 55, questions_Id: 15, response: '114.3 km', correct: 'yes', description: 'Yehaw! I did some adventuring and it was great!.'},
        {id: 56, questions_Id: 15, response: '133.23 km', correct: 'no', description: 'Solid effort, young padawan.'},
        {id: 57, questions_Id: 15, response: '220.2 km', correct: 'no', description: 'Nope.'},
        {id: 58, questions_Id: 15, response: '69.69 km', correct: 'no', description: 'Lawls again. I wish I could give you bonus points if you picked this twice.'},
        {id: 59, questions_Id: 16, response: '10,235 m', correct: 'no', description: 'Nah, again not quite that bad ass.'},
        {id: 60, questions_Id: 16, response: '6969 m', correct: 'no', description: 'Lawls again. If this is third time you have done this. Mad props, I like you.'},
        {id: 61, questions_Id: 16, response: '8770 m', correct: 'yes', description: 'Correct! Average 1000 m per day of trekking. Not bad at all.'},
        {id: 62, questions_Id: 16, response: '12,127 m', correct: 'no', description: 'Nope, not that hard core.'},
        {id: 63, questions_Id: 17, response: '1879 m', correct: 'yes', description: 'Yup, Only because I did two treks this day. Queenstown Hill and Ben Lommond.'},
        {id: 64, questions_Id: 17, response: '1760 m', correct: 'no', description: 'Solid guess. This was Roys Peak, to Mount Alpha'},
        {id: 65, questions_Id: 17, response: '1529 m', correct: 'no', description: 'Surpirisingly the Tongariro Crossing does not have a tone of elevation'},
        {id: 66, questions_Id: 17, response: '1060 m', correct: 'no', description: 'Nope. This was the gain on Mount Fox, and it was definitely the hardest. > 1000 m of elevation in < 3 km!'},
        {id: 67, questions_Id: 18, response: 'Roys Peak to Mount Alpha', correct: 'yes', description: 'The initial hike up Roys peak is not all that great. But the veiws are amazing, then running the ridge to Mount Alpha where I had the mountain to myself made for a perfect day.'},
        {id: 68, questions_Id: 18, response: 'Mount Fox', correct: 'no', description: 'This was a close second. Super gnarly terrain. Basically had to rock climb, and use roots to make it to the top. But I was completely socked in by fog at the top.'},
        {id: 69, questions_Id: 18, response: 'Tongariro Crossing', correct: 'no', description: 'I wish this was it! The conditions were super rough, crazy wind, crazy cold, and no visibility. Made for quite the adventure but I did not see anything. Will have to make my way back some day'},
        {id: 70, questions_Id: 18, response: 'Ben Lommond', correct: 'no', description: 'Nah. Great trek, on Queenstown doorstep, just not as good as the others.'},
        {id: 71, questions_Id: 19, response: 'Leaves', correct: 'no', description: 'I wish there were leaves around, but sadly none were to be found.'},
        {id: 72, questions_Id: 19, response: 'Pinecone', correct: 'no', description: 'Ouch! No! I do not think I would ever resort to that.'},
        {id: 73, questions_Id: 19, response: 'Business car', correct: 'yes', description: 'Yeah...can not recommend it, but there was nothing else!'},
        {id: 74, questions_Id: 19, response: 'A sock', correct: 'no', description: 'Not me. But I no a guy who sacrifced a sock for this purpose.'},
        {id: 75, questions_Id: 20, response: 'Not letting anyone know where I was going', correct: 'no', description: 'Nope. When I could not reach my parents with data, or text a friend. I would write a note and leave it on dashboard of my car "I am on TRAIL alone, if not back by TIME send help" So I think that did the job.'},
        {id: 76, questions_Id: 20, response: 'Not bringing a map', correct: 'no', description: 'No. All the trails I was on were well marked, so no need for a map.'},
        {id: 77, questions_Id: 20, response: 'Hiking with only 500 ml of water and a pack of Jelly Bellies', correct: 'yes', description: 'Yup. That is all I had. No jacket, no supplies, no nothing. But I made it.'},
        {id: 78, questions_Id: 20, response: 'Free climbing a 50 m cliff', correct: 'no', description: 'Not a chance would I do that!'},
        {id: 79, questions_Id: 21, response: '3', correct: 'no', description: 'Incorrect.'},
        {id: 80, questions_Id: 21, response: '2', correct: 'no', description: 'Nope.'},
        {id: 81, questions_Id: 21, response: '1', correct: 'no', description: 'Nah, but getting closer.'},
        {id: 82, questions_Id: 21, response: '0', correct: 'yes', description: 'Correct. My feet are tough as nails...I know this last question was lame but I can not think of a better one.'}
      ])
    })
}
