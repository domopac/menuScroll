<h2>menuScroll</h2>

<div>menuScroll is a simple plugin to scroll smoth to an id.</div>

<div>Required is incorpoate jQuery and a container with the id menu with a elements in it.</div>

<div>Incorporate the menuScroll.js and initalize menuScroll on the element with id menu</div>

<div>Example:</div>

<code>$(document).ready(function() {<br>
	<br>
                $("#menu").animateScroll( {<br>
                   <br>
                });<br>
                <br>
            });<br>
</code>

<div>There are 4 parameters that animateScroll accepts:</div>

<ul>
<li>duration</li>
<li>ease (effect)</li>
<li>offset (positive offset = margin from top of page)</li>
<li>callback function</li>
</ul>

<div>An example of an initialisation with all parameters:</div>


<code>$(document).ready(function() {<br>
	<br>
                $("#menu").animateScroll( {<br>
                    duration: "600",<br>
                    ease: "linear",<br>
                    offset: "20",<br>
                    callback: function() {alert("this is the callback function");}<br>
                });<br>
                <br>
            });<br>
</code>

<div>Meaning of parameters:</div>

<div>- The duration is the time in milliseconds that menuScroll will take to scroll</div>
<div>- Ease effects are like the <a href="https://jqueryui.com/easing/" target="_blank">jQuery easings</a></div>
<div>- Offset is to give as positive number for offsets from top and negative for vice versa</div>
<div>- The callback function is triggered when the scroll is finished</div>