## JOURNAL

It seems like so long ago we did the wire frames for this project now, and i'm not smart and writing this journal at the very end after having done everything, instead of writing about my progress as I go, so some things may have escaped my memory by now.
The very first problem I had that made me put off working on this for a good couple weeks was trying to make the repo into a jekyll website. I originally had it done in the blank repo at the start, with the example jekyll site successfully here, ran into trouble with the organisation. It seemed that when I made changes, jekyll just overwrote them again with its own default code, plus the fact that it took like 20 minutes for the site to update and you had to serve the build every single time you wanted to work on it, which was just confusing. This was a very unhelpful way of trying to create a website, where you really need to see changes you make in real time. Then half the folders and files in the jekyll repo were not showing up on the github website page for it which I never figured out why. Secondly as we all found out, the classroom repo could not be turned into a github pages website, so I reverted everything I had done back to the original repo and started again making it from HTML and CSS.

I am pretty confident with this stuff now although some parts still frustrate me, mostly positioning elements on the page honestly I don't know why things can't just WORK sometimes and not be so complicated. I'm happy about how close the final website turned out to be to my wireframes, and in some parts the wire frames actually looks better than what I managed to come up with. But its very satisfying getting the whole site together. I feel like it was kind of a bit basic, like pretty much just all grey and white, not many borders or other interesting things on the page to look at. So I added a few borders and backgrounds here and there, that I felt went with the colour scheme and made it stand out a little more. Also I discovered drop-shadow is my favourite part about CSS ever, the way it makes your elements pop out, love putting it on everything that I can.

![extrastuff](https://i.ibb.co/fDsmYY9/Untitled.png)  
*Before and after, adding extra style to the page*

![dshadow](https://i.ibb.co/BsrN5yS/image.png)  
*Look how good this little shadow is*

One of the first styling issues I had that I struggled with for a while was the cart icon in the topnav. At first I had no idea how to make it not inherit the propertys from the other links in the nav bar, such as the border around them and hover effects etc. And positioning it was hard as well. But that was easiily dealt with, with some code I found on stackoverflow:  
`.topnav a:not(.cart) {`  
Adding this into the CSS for `topnav a` will let you exclude any other element you want from having everything that is defined for that section. In my opinion this is a very handy thing to know for future cause I find myself wanting to exclude things like that a lot.

The other huge problem I had was responsiveness. I struggled a lot over every single page pretty much, making sure that everything looked good while resizing the window back and forth. Some parts I eventually had to give up on and just be like "its good enough" like certain buttons, or the topnav cart icon too. Like when resizing my browser to mobile size, it'll look okay, but any size in between that and regular screen size, it messes up and sits stupidly where it shouldn't be. I ran into this problem with the text elements on the checkout pages as well - some of the text sits awkwardly in weird positions and I couldn't fix it. In conclusion, responsiveness can sit on a cactus.

![topnav](https://i.ibb.co/YL3K0T3/image.png)  
*The icons in the top nav being difficult while being resized*

Another thing I wasn't happy with and had no idea how to fix was the login popup, that comes up and hides again when you click the login button in the topnav. Currently, when it appears, it will push the body content down. I thought it would be simple to try just adding a `z indez` on it, but obviously nothing is ever easy so I just didn't have the strength to carry on after that and left it how it is.

![login](https://i.ibb.co/JBvcrwZ/1602991914860.gif)  
*Login being difficult this time*

I noticed when testing out the site on different browsers, that my code for changing the cart icons on the product and checkout page was not working in firefox. However in opera gx, which is chrominium based, it does appear correctly. I don't think anything else changed between the browsers but that, as far as i'm aware. I think a fix for that problem might be something like -webkit"xyz" and try a different way of changing that drop shadow from there, but again after spending all day and night for the last week almost, getting everything done, I don't have anymore patience to try and fix the little issues like i'm talking about here.

The code I used is all running correctly, and in the CSS files, mostly everything has been commented on explaining what that section does. I didn't comment in my HTML aside from once or twice because its a little more difficult there and I didn't want to fill the page up with that stuff. There is however a problem that VSCode picks up on. It's not a site breaking error, but just something that annoys me that it shows up saying is wrong

![errors](https://i.ibb.co/fnFvkzK/image.png)

So the problem with changing that would be if I did change either `inline-block` or `float` on those elements, it would not sit where I wanted it to sit. So ignoring those warning signs was actually giving me the correct result.

One thing I noticed myself doing a lot was styling certain things within the HTML page instead of creating an `id` tag for the element and doing it in the CSS where I should have put all styling, just to keep the HTML clean. But I feel like at times that would have just made the CSS too much longer than it needed to by creating all the extra tags, when all I want to do is change a margin or change a couple of other style attributes on different things, So I was just doing it inline. I think this is a habit I should be more mindful of as sometimes it does just make the HTML messier than it needs to be. And the CSS is so long anyway and it does look cleaner going in there.

The shipping and returns information I "borrowed" from Amazon, and some australian clothing store that I use. Figured it was easier to just paste in something premade as general terms and conditions like that are pretty much the same all around for websites.


### Moqups link to wireframes
https://app.moqups.com/x8MQBBz5bO/view/page/ad64222d5

---

#### REFERENCES

Pilgaard, M (2013). *Show and hide sections using click or mouseover*. https://html-shark.com/HTML/ShowHideSections.htm  
<sub>Used for show/hide login form</sub>

JSfiddle user "halirgb". (n.d). *Easy CSS arrow button*. https://jsfiddle.net/halirgb/fE5kB/  
<sub>Used for arrow buttons on checkout pages</sub>

Hart, M. (n.d). *Payment form*. https://codepen.io/meghart/pen/rVKbNG  
<sub>Used for credit card payment page</sub>

Codepen user "Thibaut". (n.d). *Dark and Light dropdown lists*. https://codepen.io/Thibaut/pen/Jasci  
<sub>Used for dropdown buttons on checkout info page</sub>

Stack Overflow user "Alex". (2011, March 31). *How can I exclude a specific element from inheriting CSS rules?* https://stackoverflow.com/questions/5507253/how-can-i-exclude-a-specific-element-from-inheriting-css-rules  
<sub>Used to figure out how to exclude certain elements from inheriting general rules</sub>

Freecodecamp. (2020, May 15). *How to center anything with CSS*. https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/  
<sub>Very helpful page on how to position elements because barely any of these actually work for centering most of the time you have to combine multiple ways and see what happens</sub>

W3Schools. (1999-2020). *CSS Website Layout*. https://www.w3schools.com/css/css_website_layout.asp  
<sub>Used for the topnav and the column layouts on each page</sub>
