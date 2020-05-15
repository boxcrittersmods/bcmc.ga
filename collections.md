---
layout: default
title: Collections
---
{% for collection in site.collections %}
## {{ collection.label }}
{% assign current_collection=site[collection.label] %}
{% for item in current_collection %}
{% assign start=collection.label %}
{% capture start_url %}{{ item.url | remove_first: '/' | remove_first: start }}{% endcapture %}
{% capture word_count %}{{ start_url | split: '/' | size }}{% endcapture %}
{% assign word_count = word_count | minus: '1' %}
*  [{{ item.title }}]({{ item.url }})

{% include listing-project.html item=author %}
{% endfor %}
{% endfor %}
