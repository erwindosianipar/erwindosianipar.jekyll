---
layout: page
title: Blog
permalink: /blog/
---

<ul class="uk-list uk-list-divider">
	{% for post in site.posts %}
		{% assign currentdate = post.date | date: "%Y" %}
		{% if currentdate != date %}
			<h3 class="uk-margin-medium-top uk-margin-remove-bottom">
                # {{ currentdate }}
            </h3>
			{% assign date = currentdate %} 
		{% endif %}
		<li>
			<div class="uk-text-muted">{{ post.date | date: "%B %d" }}</div>
			<h4 class="uk-margin-remove">
				<a href="{{ post.url }}" class="uk-text-bold uk-text-emphasis">
					{{ post.title }}
				</a>
			</h4>
		</li>
	{% endfor %}
</ul>
