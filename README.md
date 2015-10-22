<h2>menuScroll</h2>

<div>menuScroll is a simple plugin to scroll smoth to an id.</div>

<div>Required is:</div>

<div>1. Incorporate jQuery </div>
<div>2. Create a container with <span class="highlight highlight-text-html-basic"><pre>#menu</pre></span><div>
<div>3. Put <span class="highlight highlight-text-html-basic"><pre><a></pre></span> elements into the container with <span class="highlight highlight-text-html-basic"><pre>#menu</pre></span></div>

<div>Incorporate the menuScroll.js and initalize menuScroll on the element with id menu</div>

<div>Example:</div>

<div class="highlight highlight-text-html-basic">
<pre>

$(document).ready(function() {
	
                $("#menu").animateScroll( {
                    
                });
                
            });

</pre>
</div>

<div>There are 4 parameters that animateScroll accepts:</div>

<ul>
<li>duration</li>
<li>ease (effect)</li>
<li>offset (positive offset = margin from top of page)</li>
<li>callback function</li>
</ul>

<div>An example of an initialisation with all parameters:</div>


<div class="highlight highlight-text-html-basic">
<pre>

$(document).ready(function() {
	
                $("#menu").animateScroll( {
                    duration: "600",
                    ease: "linear",
                    offset: "20",
                    callback: function() {alert("this is the callback function");}
                });
                
            });

</pre>
</div>

<div>Meaning of parameters:</div>

<div>- The duration is the time in milliseconds that menuScroll will take to scroll</div>
<div>- Ease effects are like the <a href="https://jqueryui.com/easing/" target="_blank">jQuery easings</a></div>
<div>- Offset is to give as positive number for offsets from top and negative for vice versa</div>
<div>- The callback function is triggered when the scroll is finished</div>