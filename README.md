# Project2
# Yana’s Responsive Website Project
This project is a responsive website including all skills learnt throughout the course so far. 
It is a simple quiz which incudes JavaScript for its functionality.
The website is very simple and easy to navigate.
It allows the user to control audio using the audio player on each page.
How To page provides an instruction on how to do the quiz.

#### Features

<ul>
<li><h5>Feature 1</h5> – Fixed navigation menu on desktop --- ease of navigation</li>
<li><h5>Feature 2</h5> – Large font --- ease of navigation</li>
<li><h5>Feature 3</h5> - Highlighted answers --- easy of navigation</li>
<li><h5>Feature 4</h5> - Ability to control audio --- ease of control</li>

### Technologies Used

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Git</li>
<li>Github</li>
</ul>

### Testing

<ol>
<li><h4>Navigation Menu</h4>
<p>Does the Navigation Menu work smoothly and align with the sites design?</p>
<p>When clicking on the Menu links, does it open an appropriate page</p>
</li>
<li><h4>Enquire Form</h4>
<p>Try to click on radio buttons of wrong answers to see that the text is highlghted red</p>
<p>Try to click on radio buttons of all correct answers to see that the text is highlghted green</p>
<p>Try to leave all radio buttons unclicked to see that the text is highlghted red</p>
<p>Try to click on all buttons on music player to make sure all the functions of music player work</p></li>
<li><h4>Viewing on a mobile and tablet</h4>
<p>Please confirm that when you view my quiz on a mobile or tablet, the site has good spacing, not too much content and is easy to use on all devices.</p>
</li>
</ol>

### Validation
<p>I ran my code through code validation& quality tools. Please see following errors below:</p> 

#### HTML
 - The type attribute (type="text/javascript") is unnecessary for JavaScript resources.<br>
Solution: Deleted the attribute.
</li>

#### CSS
 - No errors found.

#### Javacript

 - 'document' was used before it was defined. (document.getElementById("mp3_src").src = "bckgmusic.mp3";)<br>
 Solution: Included /*global document: false */ at the beginning of the code.

 - Use the function form of "use strict".<br>
 Solution: Included the statement "use strict"; at the first statement in each function.

 - Unexpected 'let'. (for (let i = 1; i <= 3; i++)) <br>
  Solution: None

### Deployment

This website was created using Visual Studio Code, a local git directory was used for version control, and then pushed to GitHub. 
I initiated the git repository with 'git innit', then used 'git status' to see which of my un-tracked files had not been added to the new repository. 
I used 'git commit -m "added in a specific message" to commit my changed files to the repository. Once my files were committed I pushed all the files to GitHub.


### Media

•	The music incorporated to the quiz webpages was downloaded from Pixabay website. https://pixabay.com/music/search/theme/background%20music/
The mp3 file was free to download.

#### Acknowledgements

- Navigation menu code is from https://www.w3schools.com/howto/howto_js_topnav.asp.
- The quiz code is from https://teamtreehouse.com/community/javascript-project-simple-quiz-with-radio-buttons and then was edited by me.
- The footer code is from https://www.w3schools.com/tags/tag_footer.asp and then edited by me.
- The audio control code is from https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_audio_autoplay
